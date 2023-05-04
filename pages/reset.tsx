import { ButtonBig } from "@/src/components/button-big"
import { Footer } from "@/src/components/footer"
import { Header } from "@/src/components/header"
import { LoginStyled, ResetStyled } from "@/src/styles/containers"
import { Button_big_text, Heading_5_500 } from "@/src/styles/global"
import { StyledInput2 } from "@/src/styles/input"
import { StyledLabels } from "@/src/styles/labels"
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin } from "@/src/interfaces/user"
import { StyledSpanError } from "@/src/components/Modals/Create Advert/style"
import { UserContext } from "@/src/contexts/userContext"
import { useContext } from "react"

export default function Reset() {
    const router = useRouter();
    const { ResetPassword } = useContext(UserContext);

    const schema = yup.object().shape({
        email : yup.string().email().required('digite o seu email cadastrado')
    })
  
    const { register, handleSubmit, formState: { errors }} = useForm<IFormLogin>({
        resolver: yupResolver(schema)
    })

    return(
        <>
            <div>
            <Header/>
            <ResetStyled>
                <div>
                <Heading_5_500>Esqueceu a sua senha?</Heading_5_500>
                <form  onSubmit={handleSubmit(ResetPassword)}>
                    <StyledLabels htmlFor='email'>Digite o email que usou durante o cadastro que te enviaremos uma nova senha</StyledLabels>
                    <StyledInput2 id='email' placeholder="Email cadastrado" {...register("email")}/>
                    <StyledSpanError>{errors.email?.message}</StyledSpanError>
                    <div>
                    <ButtonBig
                        bgColor="var(--color-brand-1)"
                        fontColor="var(--color-whiteFixed)"
                        borderColor="var(--color-brand-1)"
                        type='submit'
                    >
                        Enviar nova senha
                    </ButtonBig>
                    </div>

                </form>
                    <div>
                    <Button_big_text
                        style={{
                        backgroundColor: 'var(--color-grey-10)',
                        color: 'var(--color-grey-0)',
                        border: '1px solid var(--color-brand-1)',
                        }}
                        onClick={()=>router.push('/login')}
                    >
                        Voltar
                    </Button_big_text>
                    </div>
                </div>

            </ResetStyled>
            <Footer/>
            </div>
            </>
    );
};