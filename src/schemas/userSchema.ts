import * as yup from 'yup';

export const userSchema = yup.object({
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

export const userEditSchema = yup.object({
    password: yup
      .string()
      .notRequired()
      .matches(/[0-9]/, 'A senha deve possuir um numero')
      .matches(/[a-z]/, 'A senha deve possuir uma letra')
      .matches(/[^\w]/, 'A senha deve possuir um caractere especial')
      .min(8, 'A senha deve ter no minimo 8 caracteres'),
    confim_password: yup
      .string()
      .notRequired()
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      ),
    name: yup.string().notRequired(),
    email: yup
      .string()
      .notRequired()
      .email('Deve ser um e-mail válido'),
    phone: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    birth_date: yup.date().notRequired(),
    description: yup.string().notRequired(),
    address: yup.object({
      cep: yup.string().notRequired(),
      state: yup.string().notRequired(),
      city: yup.string().notRequired(),
      road: yup.string().notRequired(),
      number: yup.number().notRequired(),
      complement: yup.string().notRequired(),
    }),
    is_seller: yup.boolean().notRequired()
});

