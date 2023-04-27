import { UserContext } from '@/src/contexts/userContext';
import { api } from '@/src/services/api';
import { Body_2_500, Heading_7_500 } from '@/src/styles/global';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { StyledDivButtons } from '../Create Advert/style';
import { StyledDeleteAdvertModal } from './style';

export interface iDeleteAdvertModalProps {
  setIsDeleteModal: Dispatch<SetStateAction<boolean>>;
  advertId: string;
  setIsEditAdvertModal: Dispatch<SetStateAction<boolean>>;
}
export const DeleteAdvertModal = ({
  setIsDeleteModal,
  advertId,
  setIsEditAdvertModal,
}: iDeleteAdvertModalProps) => {
  const { userLogout, setMyAnnouncement, myAnnouncement } =
    React.useContext(UserContext);

  const deleteAdvert = async () => {
    const token = localStorage.getItem('token');

    if (!token) return userLogout();

    try {
      await api.delete(`/api/anoucements/${advertId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filter = myAnnouncement?.filter((el) => el.id !== advertId);

      setMyAnnouncement(filter!);

      toast.success('Anúncio deletado com sucesso', {
        theme: 'dark',
      });
      setIsDeleteModal(false);
      setIsEditAdvertModal(false);
    } catch (err) {
      toast.error('Não foi possível deletar o anúncio', {
        theme: 'dark',
      });
    }
  };
  return (
    <StyledDeleteAdvertModal>
      <div className="modal">
        <Heading_7_500>Excluir anúncio</Heading_7_500>
        <Heading_7_500>
          Tem certeza que deseja remover este anúncio?
        </Heading_7_500>
        <Body_2_500>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio
        </Body_2_500>
        <StyledDivButtons>
          <button className="cancel" onClick={() => setIsDeleteModal(false)}>
            Cancelar
          </button>
          <button className="delete" onClick={deleteAdvert}>
            Sim, excluir anúncio
          </button>
        </StyledDivButtons>
      </div>
    </StyledDeleteAdvertModal>
  );
};
