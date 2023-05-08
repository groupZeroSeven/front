import { UserContext } from "@/src/contexts/userContext";
import React from "react";
import { useRouter } from 'next/router';
import { api } from "@/src/services/api";
import { toast } from "react-toastify";

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
    <div>
      <h2>Tem certeza que deseja deletar o comentário?</h2>
      <button onClick={deleteComment}>Deletar</button>
      <button onClick={() => setIsDeleteCommentModal(false)}>Cancelar</button>
    </div>
  )
}