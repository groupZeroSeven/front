import { iAdvertComment } from "./adverts";

export interface IUserContext {
  userLogout: () => void;

  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;

  isCreateAdvertModal: boolean;
  setIsCreateAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  isEditAdvertModal: boolean;
  setIsEditAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  isEditUserModal: boolean;
  setIsEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;

  myAnnouncement: IUserAnnouncement[] | null;
  setMyAnnouncement: React.Dispatch<
    React.SetStateAction<IUserAnnouncement[] | null>
  >;

  myAnnouncementSeller: IUserAnnouncement[] | null;
  setMyAnnouncementSeller: React.Dispatch<
    React.SetStateAction<IUserAnnouncement[] | null>
  >;

  detailAnnouncement: IUserAnnouncement | null;
  setDetailAnnouncement: React.Dispatch<
    React.SetStateAction<IUserAnnouncement | null>
  >;

  LoginUser: any;
  RegisterUser: any;
  ResetPassword: any;
  EditUser: any;

  isEditCommentModal: boolean;
  setIsEditCommentModal: React.Dispatch<React.SetStateAction<boolean>>;

  isDeleteCommentModal: boolean;
  setIsDeleteCommentModal: React.Dispatch<React.SetStateAction<boolean>>;

  comments: iComment[] | null;
  setComments: React.Dispatch<React.SetStateAction<iComment[] | null>>;
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
  description: string;
  address?: iFormRegisterAddress;
  comments: iComment[]
}

export interface iComment {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  announcement: iAdvertComment;
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
  images?: [
    {
      id: string;
      url: string;
    }
  ];
  user?: {
    updatedAt: string;
    createdAt: string;
    cpf: string;
    is_seller: true;
    birth_date: string;
    description: string;
    phone: string;
    email: string;
    name: string;
    id: string;
    address: {
      complement: string;
      road: string;
      number: string;
      city: string;
      state: string;
      cep: string;
    };
  };
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
  complement: string;
  road: string;
  number: string;
  city: string;
  state: string;
  cep: string;
}

export interface iFormRegisterAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}
