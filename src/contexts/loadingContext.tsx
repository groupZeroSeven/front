import React from 'react';
import { Loading } from '../components/loading';
import { IContextProps } from '../interfaces/global';
import { ILoadContext } from '../interfaces/loading';

export const LoadContext = React.createContext({} as ILoadContext);

const LoadProvider = ({ children }: IContextProps) => {
  const [load, setLoad] = React.useState(false);

  return (
    <LoadContext.Provider value={{ load, setLoad }}>
      {load && <Loading />}
      {children}
    </LoadContext.Provider>
  );
};

export default LoadProvider;
