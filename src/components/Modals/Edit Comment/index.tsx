import { UserContext } from '@/src/contexts/userContext';
import { schemaEditComment } from '@/src/schemas/editComments';
import { api } from '@/src/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { StyledSpanError } from '../Create Advert/style';
import { useRouter } from 'next/router';

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
    <form onSubmit={handleSubmit(handleSubmitFunction)}>
      <label htmlFor="text">Editar comentário</label>
      <input type="text" id='text' {...register('text')} />
      <StyledSpanError>{errors.text?.message}</StyledSpanError>
      <button type='submit'>Editar</button>
      <button type='button' onClick={() => setIsEditCommentModal(false)}>Cancelar</button>
    </form>
  )
}