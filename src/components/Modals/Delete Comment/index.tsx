import { UserContext } from "@/src/contexts/userContext";
import React from "react";
import { useRouter } from 'next/router';
import { api } from "@/src/services/api";
import { toast } from "react-toastify";
import { StyledDeleteCommentModal } from "./style";
import { Heading_7_500 } from "@/src/styles/global";
import { StyledButtonClose, StyledDivButtons } from "../Create Advert/style";

interface iDeleteCommentModalProps {
  commentId: string;
}

export const DeleteCommentModal = (commentId : iDeleteCommentModalProps) => {
  const router = useRouter();
  const { id } = router.query;
  const {setIsDeleteCommentModal} = React.useContext(UserContext);
  const deleteComment = async () => {
    const token = localStorage.getItem('token');
    try {
      await api.delete(`api/${id}/comments/${commentId.commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setIsDeleteCommentModal(false)
      toast.success('Comentário deletado com sucesso!', {
        theme: 'dark',
      })
    } catch (err) {
      toast.error('Não foi possível deletar o comentário', {
        theme: 'dark',
      });
    }
  }
  return (
    <StyledDeleteCommentModal>
      <div className="modal">
        <div className="head">
          <Heading_7_500>Tem certeza que deseja deletar o comentário?</Heading_7_500>
          <StyledButtonClose onClick={() => setIsDeleteCommentModal(false)}>x</StyledButtonClose>
        </div>
        <StyledDivButtons>
          <button onClick={deleteComment} className="delete">Deletar</button>
          <button onClick={() => setIsDeleteCommentModal(false)} className="cancel">Cancelar</button>
        </StyledDivButtons>
      </div>
    </StyledDeleteCommentModal>
  )
}