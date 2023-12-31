import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
