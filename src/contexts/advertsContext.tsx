import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IAdvertsProps } from '../interfaces/adverts';
import { api } from '../services/api';

export const AdvertsContext = createContext<IAdvertsProps>({} as IAdvertsProps);

export const AdvertsProvider = ({ children }: IAdvertsProps) => {
  const [adverts, setAdverts] = useState();

  useEffect(() => {
    getAdverts();
  }, []);

  async function getAdverts() {
    try {
      const { data } = await api.get('/api/anoucements');
      setAdverts(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function getEspecificAdverts(id: string) {
    try {
      const { data } = await api.get(`/api/anoucements/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function addAdverts(data: any) {
    try {
      await api.post('/api/anoucements', data);
      await getAdverts();
    } catch (error) {
      console.error(error);
    }
  }

  async function delAdverts(id: string) {
    try {
      await api.delete(`/api/anoucements/${id}`);
      await getAdverts();
      return;
    } catch (error) {
      console.error(error);
    }
  }

  async function patchAdverts(data: any, id: string) {
    try {
      await api.patch(`/api/anoucements/${id}`, data);
      await getAdverts();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AdvertsContext.Provider
      value={{
        adverts,
        getAdverts,
        addAdverts,
        delAdverts,
        patchAdverts,
        getEspecificAdverts,
      }}
    >
      {children}
    </AdvertsContext.Provider>
  );
};
