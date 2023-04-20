export interface IUserContext {
  userLogout: () => void;

  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;

  isCreateAdvertModal: boolean;
  setIsCreateAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  isEditAdvertModal: boolean;
  setIsEditAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  myAnnouncement: IUserAnnouncement[] | null;
  setMyAnnouncement: React.Dispatch<
    React.SetStateAction<IUserAnnouncement[] | null>
  >;

  detailAnnouncement: IUserAnnouncement | null;
  setDetailAnnouncement: React.Dispatch<
    React.SetStateAction<IUserAnnouncement | null>
  >;

  LoginUser: any;
  RegisterUser: any;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  is_seller: boolean;
  birth_date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserAnnouncement {
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
  is_published: true;
  created_at: string;
  updated_at: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface iFormRegister {
  name: string;
  password: string;
  confim_password: string;
  email: string;
  phone: string;
  cpf: string;
  birth_date: string;
  description: string;
  address: iFormRegisterAddress;
  is_seller: string;
}

export interface iFormRegisterAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}
