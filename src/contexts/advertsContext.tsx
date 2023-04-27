import React from 'react';
import { toast } from 'react-toastify';
import { IAdvertsProps, iAdvert, iModel } from '../interfaces/adverts';
import { api } from '../services/api';
import { UserContext } from './userContext';

export const AdvertsContext = React.createContext<IAdvertsProps>(
  {} as IAdvertsProps
);

const AdvertsProvider = ({ children }: IAdvertsProps) => {
  const [adverts, setAdverts] = React.useState<iAdvert[] | null>(null);
  const [selectBrand, setSelectBrand] = React.useState<string>('');
  const [selectModel, setSelectModel] = React.useState<string>('');
  const [inputImages, setInputImages] = React.useState<boolean[]>([true, true]);
  const [isConfirmModal, setIsConfirmModal] = React.useState<boolean>(false);
  const [selectModelData, setSelectModelData] = React.useState<iModel>();
  const [selectModelValues, setSelectModelValues] = React.useState<iModel[]>(
    []
  );

  const { userLogout } = React.useContext(UserContext);

  const brands = [
    'Citroën',
    'Fiat',
    'Ford',
    'Chevrolet',
    'Honda',
    'Hyundai',
    'Nissan',
    'Peugeot',
    'Renault',
    'Toyota',
    'Volkswagen',
  ];

  const handleImages = (): void => {
    setInputImages((prevInputImages) => {
      if (prevInputImages.length < 6) {
        return [...prevInputImages, true];
      }
      return prevInputImages;
    });
  };

  const handleBrandChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectBrand(event.target.value);
  };

  const handleModelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectModel(event.target.value);
  };

  const fuelType = (n: number): '' | 'Flex' | 'Híbrido' | 'Elétrico' => {
    switch (n) {
      case 1:
        return 'Flex';
      case 2:
        return 'Híbrido';
      case 3:
        return 'Elétrico';
      default:
        return '';
    }
  };

  const getAdverts = async () => {
    try {
      const { data } = await api.get('/api/anoucements');
      setAdverts(data.data);
    } catch (error: any) {
      toast.error(error.response?.data.message);
    }
  };

  const getEspecificAdverts = async (id: string) => {
    const token: string | null = localStorage.getItem('token');

    if (!token) return userLogout();

    const { data } = await api.get(`/api/anoucements/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  };

  const addAdverts = async (data: any): Promise<void> => {
    try {
      await api.post('/api/anoucements', data);
      await getAdverts();
    } catch (error) {
      console.error(error);
    }
  };

  const delAdverts = async (id: string): Promise<void> => {
    try {
      await api.delete(`/api/anoucements/${id}`);
      await getAdverts();
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const patchAdverts = async (data: any, id: string): Promise<void> => {
    try {
      await api.patch(`/api/anoucements/${id}`, data);
      await getAdverts();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getAdverts();
  }, []);

  return (
    <AdvertsContext.Provider
      value={{
        adverts,
        getAdverts,
        addAdverts,
        delAdverts,
        patchAdverts,
        getEspecificAdverts,
        brands,
        selectBrand,
        setSelectBrand,
        selectModelValues,
        setSelectModelValues,
        selectModel,
        setSelectModel,
        selectModelData,
        setSelectModelData,
        inputImages,
        setInputImages,
        handleImages,
        handleBrandChange,
        handleModelChange,
        fuelType,
        isConfirmModal,
        setIsConfirmModal,
      }}
    >
      {children}
    </AdvertsContext.Provider>
  );
};

export default AdvertsProvider;
