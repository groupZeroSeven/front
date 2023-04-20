import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { IContextProps } from '../interfaces/global';
import { IUser, IUserAnnouncement, IUserContext } from '../interfaces/user';
import { api } from '../services/api';
import { LoadContext } from './loadingContext';

export const UserContext = React.createContext({} as IUserContext);

const UserProvider = ({ children }: IContextProps) => {
  const router = useRouter();

  const { setLoad } = React.useContext(LoadContext);

  const [user, setUser] = React.useState<IUser | null>(null);

  const [myAnnouncement, setMyAnnouncement] = React.useState<
    IUserAnnouncement[] | null
  >(null);

  const [detailAnnouncement, setDetailAnnouncement] =
    React.useState<IUserAnnouncement | null>(null);

  const [isCreateAdvertModal, setIsCreateAdvertModal] =
    React.useState<boolean>(false);

  const [isEditAdvertModal, setIsEditAdvertModal] =
    React.useState<boolean>(false);

  const userLogout = (): void => {
    setLoad(false);
    setUser(null);
    localStorage.removeItem('token');
    router.push('/');
  };

  React.useEffect(() => {
    setLoad(true);

    const token: string | null = localStorage.getItem('token');

    if (!token) return userLogout();

    const autoLogin = async (): Promise<void> => {
      try {
        const { data } = await toast.promise(
          api.get(`/api/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          {}
        );

        setUser(data);
      } catch (e: any) {
        toast.error(e.response.data.message, {
          position: 'bottom-right',
          autoClose: 5000,
        });
      } finally {
        setLoad(false);
      }
    };

    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogout,
        user,
        setUser,
        isCreateAdvertModal,
        setIsCreateAdvertModal,
        isEditAdvertModal,
        setIsEditAdvertModal,
        myAnnouncement,
        setMyAnnouncement,
        detailAnnouncement,
        setDetailAnnouncement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
