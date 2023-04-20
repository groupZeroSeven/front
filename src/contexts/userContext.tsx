import React from 'react';
import { toast } from 'react-toastify';
import { IContextProps } from '../interfaces/global';
import { IFormLogin, IUser, IUserAnnouncement, IUserContext } from '../interfaces/user';
import { api } from '../services/api';
import { LoadContext } from './loadingContext';
import { useRouter } from 'next/router';

export const UserContext = React.createContext({} as IUserContext);

const UserProvider = ({ children }: IContextProps) => {
  const { setLoad } = React.useContext(LoadContext);

  const router = useRouter();

  const [user, setUser] = React.useState<IUser | null>(null);

  const [myAnnouncement, setMyAnnouncement] =
    React.useState<IUserAnnouncement[] | null>(null);

  const [isCreateAdvertModal, setIsCreateAdvertModal] =
    React.useState<boolean>(false);

  const [isEditAdvertModal, setIsEditAdvertModal] =
    React.useState<boolean>(false);

  const userLogout = (): void => {
    setLoad(false);
    setUser(null);
    localStorage.removeItem('token');
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
          {
            pending: 'Waiting...',
            success: 'Successfully recovered data.',
          },
          {
            autoClose: 6000,
          }
        );

        setUser(data);
      } catch (e: any) {
        toast.error(e.response.data.message, {
          position: 'bottom-right',
          autoClose: 5000,
        });
      } finally {
        setTimeout(() => setLoad(false), 1000);
      }
    };

    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  async function LoginUser(data : IFormLogin) {
    try {
        console.log(data)
        const resp = await api.post(`/api/login`, data)
        const {token} = resp.data;

        localStorage.setItem('token', token)
        api.defaults.headers.authorization = `Bearer ${token}`
        router.push('/')
    } catch (error : any) {
      toast.error(error?.response.data.message, {
        position: 'bottom-right',
        autoClose: 5000,
      });
    }
   }

   async function RegisterUser(data:any) {
    console.log(data)
    try {
        await api.post('/api/users', data)
        router.push('/login')
    } catch (error : any) {
      toast.error(error?.response.data.message, {
        position: 'bottom-right',
        autoClose: 5000,
      });
    }
}


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
        LoginUser,
        RegisterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
