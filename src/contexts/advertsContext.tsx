import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IAdvertsProps, iModel } from '../interfaces/adverts';
import { api } from '../services/api';

export const AdvertsContext = createContext<IAdvertsProps>({} as IAdvertsProps);

const AdvertsProvider = ({ children }: IAdvertsProps) => {
  const [adverts, setAdverts] = useState();
  const [selectBrand, setSelectBrand] = useState<string>('');
  const [selectModelValues, setSelectModelValues] = useState<iModel[]>([]);
  const [selectModel, setSelectModel] = useState<string>('');
  const [selectModelData, setSelectModelData] = useState<iModel>();
  const [inputImages, setInputImages] = useState<boolean[]>([true, true]);
  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
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
  const handleImages = () => {
    setInputImages((prevInputImages) => {
      if (prevInputImages.length < 6) {
        return [...prevInputImages, true];
      }
      return prevInputImages;
    });
  };
  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectBrand(event.target.value);
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectModel(event.target.value);
  };

  const fuelType = (n: number) => {
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
  useEffect(() => {
    getAdverts();
  }, []);

  async function getAdverts() {
    try {
      const { data } = await api.get('/api/anoucements');
      setAdverts(data.data);
    } catch (error: any) {
      toast.error(error.response?.data.message);
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
