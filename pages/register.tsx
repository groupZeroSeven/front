import { ButtonBig } from '@/src/components/button-big';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { UserContext } from '@/src/contexts/userContext';
import { iFormRegister } from '@/src/interfaces/user';
import {
  RegisterStyled,
  StyledAdress,
  StyledCheckbox,
} from '@/src/styles/containers';
import { Body_2_500, Heading_5_500 } from '@/src/styles/global';
import { StyledInput2 } from '@/src/styles/input';
import { StyledLabels } from '@/src/styles/labels';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function Register() {
  const { RegisterUser } = useContext(UserContext);
  const schema = yup.object().shape({
    password: yup
      .string()
      .required('digite uma senha')
      .matches(/[0-9]/, 'A senha deve possuir um numero')
      .matches(/[a-z]/, 'A senha deve possuir uma letra')
      .matches(/[^\w]/, 'A senha deve possuir um caractere especial')
      .min(8, 'A senha deve ter no minimo 8 caracteres'),
    confim_password: yup
      .string()
      .required('Confirmação de senha e obrigatoria')
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      ),
    name: yup.string().required('digite o seu nome'),
    email: yup
      .string()
      .required('digite o seu email')
      .email('Deve ser um e-mail válido'),
    phone: yup.string().required('digite o seu telefone'),
    cpf: yup.string().required('digite o seu cpf'),
    birth_date: yup.date().required('digite a sua data de nascimento'),
    description: yup.string().required('digite uma descrição'),
    address: yup.object({
      cep: yup.string().required('digite o seu cep'),
      state: yup.string().required('digite o seu estado'),
      city: yup.string().required('digite o sua cidade'),
      road: yup.string().required('digite o sua rua'),
      number: yup.number().required('digite o numero da sua casa'),
      complement: yup.string(),
    }),
    is_seller: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    criteriaMode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <RegisterStyled>
        <div>
          <Heading_5_500>Cadastro</Heading_5_500>
          <form onSubmit={handleSubmit(RegisterUser)}>
            <Body_2_500>Informações pessoais</Body_2_500>
            <StyledLabels htmlFor="name">Nome</StyledLabels>
            <StyledInput2
              id="name"
              placeholder="Ex: Samuel Leão"
              {...register('name')}
            />

            <StyledLabels htmlFor="email">Email</StyledLabels>
            <StyledInput2
              id="email"
              placeholder="Ex: samuel@email.com"
              {...register('email')}
            />

            <StyledLabels htmlFor="cpf">CPF</StyledLabels>
            <StyledInput2
              id="cpf"
              placeholder="000.000.000-00"
              {...register('cpf')}
            />

            <StyledLabels htmlFor="phone">Celular</StyledLabels>
            <StyledInput2
              id="phone"
              placeholder="(DDD) 90000-0000"
              {...register('phone')}
            />

            <StyledLabels htmlFor="birth_date">Data de nascimento</StyledLabels>
            <StyledInput2
              id="birth_date"
              placeholder="00/00/00"
              {...register('birth_date')}
            />

            <StyledLabels htmlFor="description">Descrição</StyledLabels>
            <StyledInput2
              id="description"
              placeholder="Digitar Descrição"
              {...register('description')}
            />

            <StyledAdress>
              <Body_2_500>Informações de endereço</Body_2_500>
              <StyledLabels htmlFor="cep">CEP</StyledLabels>
              <StyledInput2
                id="cep"
                {...register('address.cep')}
                placeholder="00000.000"
              ></StyledInput2>
              <div>
                <div>
                  <StyledLabels htmlFor="state">Estado</StyledLabels>
                  <StyledInput2
                    id="state"
                    {...register('address.state')}
                    placeholder="Digitar estado"
                  ></StyledInput2>
                </div>
                <div>
                  <StyledLabels htmlFor="city">Cidade</StyledLabels>
                  <StyledInput2
                    id="city"
                    {...register('address.city')}
                    placeholder="Digitar cidade"
                  ></StyledInput2>
                </div>
              </div>
              <StyledLabels htmlFor="road">Rua</StyledLabels>
              <StyledInput2
                id="road"
                {...register('address.road')}
                placeholder="Digitar rua"
              ></StyledInput2>

              <div>
                <div>
                  <StyledLabels htmlFor="number">Número</StyledLabels>
                  <StyledInput2
                    id="number"
                    {...register('address.number')}
                    placeholder="Digitar numero"
                  ></StyledInput2>
                </div>
                <div>
                  <StyledLabels htmlFor="complement">Complemento</StyledLabels>
                  <StyledInput2
                    id="complement"
                    {...register('address.complement')}
                    placeholder="Digitar complemento"
                  ></StyledInput2>
                </div>
              </div>
            </StyledAdress>

            <Body_2_500>Tipo de conta</Body_2_500>
            <div>
              <StyledCheckbox htmlFor="seler_false">
                <input
                  type="checkbox"
                  id="seler_true"
                  value="true"
                  {...register('is_seller')}
                ></input>
                <div>
                  <span>Anunciante</span>
                </div>
              </StyledCheckbox>

              <StyledCheckbox htmlFor="seler_true">
                <input
                  type="checkbox"
                  id="seler_false"
                  value="false"
                  {...register('is_seller')}
                ></input>
                <div>
                  <span>Comprador</span>
                </div>
              </StyledCheckbox>
            </div>

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

            <ButtonBig
              bgColor="var(--color-brand-1)"
              fontColor="var(--color-whiteFixed)"
              borderColor="var(--color-brand-1)"
              type="submit"
            >
              Finalizar Cadastro
            </ButtonBig>
          </form>
        </div>
      </RegisterStyled>
      <Footer />
    </>
  );
}
