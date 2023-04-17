import React from 'react';
import { IContextProps } from '../interfaces/global';
import { IUserContext } from '../interfaces/user';

export const UserContext = React.createContext({} as IUserContext);

const UserProvider = ({ children }: IContextProps) => {
  const [isCreateAdvertModal, setIsCreateAdvertModal] =
    React.useState<boolean>(false);

  const [isEditAdvertModal, setIsEditAdvertModal] =
    React.useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        isCreateAdvertModal,
        setIsCreateAdvertModal,
        isEditAdvertModal,
        setIsEditAdvertModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
