export interface IUserContext {
  isCreateAdvertModal: boolean;
  setIsCreateAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  isEditAdvertModal: boolean;
  setIsEditAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;
}
