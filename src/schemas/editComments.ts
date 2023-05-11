import * as yup from 'yup';

export const schemaEditComment = yup.object({
  text: yup.string().required('Obrigatório inserir um texto')
});