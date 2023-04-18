import { Dispatch, SetStateAction } from "react";

export interface IAdvertsProps {
    adverts ?: any;
    getAdverts ?: any;
    addAdverts  ?: React.Dispatch<React.SetStateAction<object>>;
    delAdverts  ?: any;
    patchAdverts  ?: any;
    children?: React.ReactNode;
    getEspecificAdverts ?: any;
    brands: string[];
    selectBrand: string;
    setSelectBrand: Dispatch<SetStateAction<string>>;
    selectModelValues: iModel[];
    setSelectModelValues: Dispatch<SetStateAction<iModel[]>>;
    selectModel: string;
    setSelectModel: Dispatch<SetStateAction<string>>;
    selectModelData: iModel | undefined;
    setSelectModelData: Dispatch<SetStateAction<iModel | undefined>>;
    inputImages: boolean[];
    setInputImages: Dispatch<SetStateAction<boolean[]>>;
    handleImages: () => void;
    handleBrandChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleModelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    fuelType: (n: number) => "" | "Flex" | "Híbrido" | "Elétrico";
  }

  export interface iCreateAdvertModalProps {
    setIsCreateAdvertModal: Dispatch<SetStateAction<boolean>>;
  }
  
  export interface iCreateAdvert {
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string | number;
    color: string;
    fipe: string;
    price: string;
    description: string;
    banner: string;
    is_bargain?: boolean;
    is_published?: boolean;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    images: string[];
  }
  
  export interface iModel {
    id: string;
    name: string;
    brand: string;
    year: string;
    fuel: number;
    value: number;
  }

  export interface iEditAdvertModalProps {
    setIsEditAdvertModal: Dispatch<SetStateAction<boolean>>;
    id?: string;
  }
  
  export interface iAdvert {
    id: string;
    brand: string;
    banner: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    color: string;
    price: string;
    description: string;
    is_bargain: boolean;
    is_published: boolean;
    created_at: string;
    updated_at: string;
  }
  
  export interface iEditAdvert {
    brand?: string;
    banner?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: string;
    color?: string;
    price?: string;
    description?: string;
    is_bargain?: boolean;
    is_published?: boolean;
    fipe?: string;
    firstImage?: string;
    secondImage?: string;
    images?: string[];
  }
  
  export interface iImage {
    url: string;
  }
  