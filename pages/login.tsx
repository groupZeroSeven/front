import { ButtonBig } from "@/src/components/button-big";
import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header"
import { Body_2_400, Body_2_500, Button_big_text, Heading_5_500 } from "@/src/styles/global";
import { StyledInput2 } from "@/src/styles/input";
import { StyledLabels } from "@/src/styles/labels";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin } from "@/src/interfaces/user";
import { UserContext } from "@/src/contexts/userContext";
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginStyled } from "@/src/styles/containers";

export default function Login() {
  const {LoginUser} = useContext(UserContext);
  const router = useRouter();

    const schema = yup.object().shape({
      password : yup.string().required('digite sua senha'),
      email : yup.string().email().required('digite o seu username')
  })

  const { register, handleSubmit, formState: { errors }} = useForm<IFormLogin>({
      resolver: yupResolver(schema)
  })

  return (
    <>
    <div>
      <Header/>
      <LoginStyled>
        <div>
          <Heading_5_500>Login</Heading_5_500>
          <form onSubmit={handleSubmit(LoginUser)}>
            <StyledLabels htmlFor='email'>Usuário</StyledLabels>
            <StyledInput2 id='email' placeholder="Digitar usuário" {...register("email")}/>
            <StyledLabels htmlFor='password'>Senha</StyledLabels>
            <StyledInput2 type="password" id='password' placeholder="Digitar Senha" {...register("password")}/>
            <div className="lostPassword"><Body_2_500>Esqueci a minha senha</Body_2_500></div>
            <div>
              <ButtonBig
                bgColor="var(--color-brand-1)"
                fontColor="var(--color-whiteFixed)"
                borderColor="var(--color-brand-1)"
                type='submit'
              >
                Entrar
              </ButtonBig>
            </div>

          </form>
          <div>
            <Body_2_400>Ainda nao possui conta?</Body_2_400>
            <div>
              <Button_big_text
                style={{
                  backgroundColor: 'var(--color-grey-10)',
                  color: 'var(--color-grey-0)',
                  border: '1px solid var(--color-brand-1)',
                }}

                onClick={() => router.push('/register')}
              >
                Cadastrar
              </Button_big_text>
            </div>
          </div>
        </div>
      </LoginStyled>
      <Footer/>
    </div>
    </>
  );

}
