import * as yup from 'yup';

export const schemaNewAdvert = yup.object({
  brand: yup.string().required('Obrigatório inserir uma marca'),
  model: yup.string().required('Obrigatório inserir um modelo'),
  mileage: yup.string().required('Obrigatório inserir a quilometragem'),
  color: yup.string().required('Obrigatório inserir a cor do veículo'),
  price: yup.string().required('Obrigatório inserir o preço'),
  description: yup.string().required('Obrigatório inserir uma descrição'),
  banner: yup.string().required('Obrigatório inserir a imagem do veículo'),
  image1: yup.string().notRequired(),
  image2: yup.string().notRequired(),
  image3: yup.string().notRequired(),
  image4: yup.string().notRequired(),
  image5: yup.string().notRequired(),
  image6: yup.string().notRequired(),
});
