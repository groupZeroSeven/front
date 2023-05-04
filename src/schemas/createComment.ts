import * as yup from 'yup';

export const schemaCreateComment = yup.object({
  text: yup.string().required('Obrigatório inserir um texto')
});