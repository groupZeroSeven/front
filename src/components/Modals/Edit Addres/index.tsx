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
import { StyledEditAddresModal } from "./style";
import { StyledButtonClose } from "../Create Advert/style";

export const EditAddressModal = () => {
    const { user, EditUser} = useContext(UserContext);
    const { isEditAddressModal, setIsEditAddressModal }  = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iFormRegister>({
        criteriaMode: 'all',
      });
      
    const teste = async (data : any) =>{
        let newdata = Object.fromEntries(Object.entries(data.address).filter(([_, value]) => value != ""));
        EditUser({...user?.address, ...newdata})
    }
    return (
        <>
        <StyledEditAddresModal>
            <div className="modal">
                <div className="head">
                <Heading_7_500>Editar Endereço</Heading_7_500>
                <StyledButtonClose
                className="close"
                onClick={() => setIsEditAddressModal(false)}
                >
                X
                </StyledButtonClose>
                </div>
                <Body_2_500>Informações de endereço</Body_2_500>
                <form onSubmit={handleSubmit(teste)}>

                    <StyledLabels htmlFor="cep">CEP</StyledLabels>
                    <StyledInput2
                    id="cep"
                    placeholder={user?.address?.cep}
                    {...register('address.cep')}
                    />

                    <div>
                        <div className="doubleInput">
                        <StyledLabels htmlFor="state">Estado</StyledLabels>
                        <StyledInput2
                        id="state"
                        placeholder={user?.address?.state}
                        {...register('address.state')}
                        />
                        </div>

                        <div className="doubleInput">
                        <StyledLabels htmlFor="city">Cidade</StyledLabels>
                        <StyledInput2
                        id="city"
                        placeholder={user?.address?.city}
                        {...register('address.city')}
                        />
                        </div>
                    </div>


                    <StyledLabels htmlFor="road">Rua</StyledLabels>
                    <StyledInput2
                    id="road"
                    placeholder={user?.address?.road}
                    {...register('address.road')}
                    />

                    <div>
                        <div className="doubleInput">
                        <StyledLabels htmlFor="birth_date">Numero</StyledLabels>
                        <StyledInput2
                        id="birth_date"
                        placeholder={user?.address?.number}
                        {...register('address.number')}
                        />
                        </div>

                        <div className="doubleInput">
                        <StyledLabels htmlFor="complement">Complemento</StyledLabels>
                        <StyledInput2
                        id="complement"
                        placeholder={user?.address?.complement}
                        {...register('address.complement')}
                        />
                        </div>
                    </div>

                    <div className="buttons">
                        <div className="buttons_exit">
                            <Button_big_text className="exit" onClick={()=>{setIsEditAddressModal(false)}}>Cancelar</Button_big_text>
                        </div>
                        <div className="buttons_save">
                            <Button_big_text className="save" type="submit">Salvar Alterações</Button_big_text>
                        </div>

                    </div>
                </form>
            </div>
        </StyledEditAddresModal>
        </>
    )
}