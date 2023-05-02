import { UserContext } from '@/src/contexts/userContext';
import { iFormRegister } from '@/src/interfaces/user';
import { api } from '@/src/services/api';
import { Button_big_text, Heading_7_500 } from '@/src/styles/global';
import { StyledInput2 } from '@/src/styles/input';
import { StyledLabels } from '@/src/styles/labels';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { StyledButtonClose } from '../Create Advert/style';
import { StyledEditUserModal } from './style';

export const EditUserModal = () => {
  const { user, EditUser, userLogout } = useContext(UserContext);
  const { isEditUserModal, setIsEditUserModal } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    criteriaMode: 'all',
  });

  const teste = async (data: any) => {
    let o = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v != '')
    );
    EditUser({ ...user, ...o });
  };

  const deleteUser = async (id: string) => {
    const token = localStorage.getItem('token');

    await toast.promise(
      api.delete(`/api/users/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      }),
      {
        pending: 'Aguardando...',
        success: 'Usuário deletado com sucesso!',
      }
    );

    setIsEditUserModal(false);

    return userLogout();
  };

  return (
    <>
      <StyledEditUserModal>
        <div className="modal">
          <div className="head">
            <Heading_7_500>Editar Perfil</Heading_7_500>
            <StyledButtonClose
              className="close"
              onClick={() => setIsEditUserModal(false)}
            >
              X
            </StyledButtonClose>
          </div>
          <form onSubmit={handleSubmit(teste)}>
            <StyledLabels htmlFor="name">Nome</StyledLabels>
            <StyledInput2
              id="name"
              placeholder={user?.name}
              {...register('name')}
            />

            <StyledLabels htmlFor="email">Email</StyledLabels>
            <StyledInput2
              id="email"
              placeholder={user?.email}
              {...register('email')}
            />

            <StyledLabels htmlFor="cpf">CPF</StyledLabels>
            <StyledInput2
              id="cpf"
              placeholder={user?.cpf}
              {...register('cpf')}
            />

            <StyledLabels htmlFor="phone">Celular</StyledLabels>
            <StyledInput2
              id="phone"
              placeholder={user?.phone}
              {...register('phone')}
            />

            <StyledLabels htmlFor="birth_date">Data de nascimento</StyledLabels>
            <StyledInput2
              id="birth_date"
              placeholder={user?.birth_date}
              {...register('birth_date')}
            />

            <StyledLabels htmlFor="description">Descrição</StyledLabels>
            <StyledInput2
              id="description"
              placeholder={user?.description}
              {...register('description')}
            />

            <StyledLabels htmlFor="cep">CEP</StyledLabels>
            <StyledInput2
              id="cep"
              placeholder={user?.address?.cep}
              {...register('cep')}
            />

            <StyledLabels htmlFor="city">Cidade</StyledLabels>
            <StyledInput2
              id="city"
              placeholder={user?.address?.city}
              {...register('city')}
            />

            <StyledLabels htmlFor="state">Estado</StyledLabels>
            <StyledInput2
              id="state"
              placeholder={user?.address?.state}
              {...register('state')}
            />

            <StyledLabels htmlFor="number">Número</StyledLabels>
            <StyledInput2
              id="number"
              placeholder={user?.address?.number}
              {...register('number')}
            />

            <StyledLabels htmlFor="road">Rua</StyledLabels>
            <StyledInput2
              id="road"
              placeholder={user?.address?.road}
              {...register('road')}
            />

            <StyledLabels htmlFor="complement">Complemento</StyledLabels>
            <StyledInput2
              id="complement"
              placeholder={user?.address?.complement}
              {...register('complement')}
            />

            <StyledLabels htmlFor="password">Senha</StyledLabels>
            <StyledInput2
              id="password"
              type="password"
              placeholder="Digitar senha"
              {...register('password')}
            />

            <StyledLabels htmlFor="confim_password">
              Confirmar Senha
            </StyledLabels>
            <StyledInput2
              id="confim_password"
              type="password"
              placeholder="Digitar senha"
              {...register('confim_password')}
            />
            <div>
              <div>
                <Button_big_text
                  style={{ width: '100%' }}
                  onClick={(event) => {
                    event.preventDefault();
                    deleteUser(`${user?.id}`);
                  }}
                >
                  Excluir
                </Button_big_text>
                <Button_big_text style={{ width: '100%' }} className="save">
                  Salvar Alterações
                </Button_big_text>
              </div>
              <div>
                <Button_big_text className="exit">Cancelar</Button_big_text>
              </div>
            </div>
          </form>
        </div>
      </StyledEditUserModal>
    </>
  );
};
