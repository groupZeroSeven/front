import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUser, iFormRegister } from "@/src/interfaces/user";
import { userEditSchema } from "@/src/schemas/userSchema";
import { StyledLabels } from "@/src/styles/labels";
import { StyledInput2 } from "@/src/styles/input";
import { Body_2_500, Button_big_text, Button_medium_text, Heading_7_500 } from "@/src/styles/global";
import { useContext } from "react";
import { UserContext } from "@/src/contexts/userContext";
import { StyledEditUserModal } from "./style";
import { StyledButtonClose } from "../Create Advert/style";

export const EditUserModal = () => {
    const { user, EditUser} = useContext(UserContext);
    const { isEditUserModal, setIsEditUserModal }  = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iFormRegister>({
        criteriaMode: 'all',
      });
      
    const teste = async (data : any) =>{
        let o = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != ""));
        EditUser({...user, ...o})
    }
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
                            <Button_big_text className="remove">Excluir</Button_big_text>
                            <Button_big_text className="save">Salvar Alterações</Button_big_text>
                        </div>
                        <div>
                            <Button_big_text className="exit">Cancelar</Button_big_text>
                        </div>
                    </div>
                </form>
            </div>
        </StyledEditUserModal>
        </>
    )
}