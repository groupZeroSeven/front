import { UserContext } from '@/src/contexts/userContext';
import { schemaEditComment } from '@/src/schemas/editComments';
import { api } from '@/src/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { StyledButtonClose, StyledDivButtons, StyledInput, StyledSpanError } from '../Create Advert/style';
import { useRouter } from 'next/router';
import { StyledEditCommentModal } from './style';
import { Heading_7_500, Input_label } from '@/src/styles/global';

interface iEditCommentModalProps {
  commentId: string;
}

interface iComentForm {
  text: string;
}
export const EditCommentModal = (commentId : iEditCommentModalProps) => {
  const router = useRouter();
  const { id } = router.query;
  const {setIsEditCommentModal, comments, setComments} = React.useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComentForm>({
    resolver: yupResolver(schemaEditComment),
  });
  const handleSubmitFunction = async (data: iComentForm) => {
    const token = localStorage.getItem('token');
    try {
      await api.patch(`api/${id}/comments/${commentId.commentId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setIsEditCommentModal(false)
      toast.success('Comentário alterado com sucesso!', {
        theme: 'dark',
      })
    } catch (err) {
      toast.error('Não foi possível alterar o comentário', {
        theme: 'dark',
      });
    }
  }
  return (
    <StyledEditCommentModal>
      <div className="modal">
        <div className="head">
          <Heading_7_500>Editar comentário</Heading_7_500>
          <StyledButtonClose onClick={() => setIsEditCommentModal(false)}>
            X
          </StyledButtonClose>
        </div>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <Input_label>Comentário</Input_label>
          <StyledInput type="text" id='text' {...register('text')} />
          <StyledSpanError>{errors.text?.message}</StyledSpanError>
          <StyledDivButtons>
            <button type='submit' className="confirm">Editar</button>
            <button type='button' className="cancel" onClick={() => setIsEditCommentModal(false)}>Cancelar</button>
          </StyledDivButtons>
        </form>
      </div>
    </StyledEditCommentModal>
  )
}