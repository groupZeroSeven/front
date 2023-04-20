import * as yup from 'yup';

export const schemaEditAdvert = yup.object({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  mileage: yup.string().notRequired(),
  color: yup.string().notRequired(),
  fip: yup.string().notRequired(),
  price: yup.string().notRequired(),
  description: yup.string().notRequired(),
  banner: yup.string().notRequired(),
  firstImage: yup.string().notRequired(),
  secondImage: yup.string().notRequired(),
});
