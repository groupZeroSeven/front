import React from 'react';
import { IContextProps } from '../interfaces/global';
import { IUserContext } from '../interfaces/user';

export const UserContext = React.createContext({} as IUserContext);

const UserProvider = ({ children }: IContextProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;
