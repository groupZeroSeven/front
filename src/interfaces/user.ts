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
