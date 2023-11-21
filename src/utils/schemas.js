import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup
    .string()
    .email('Email is not valid')
    .min(5, 'Email must be least 5 symbols')
    .required(),
  password: yup
    .string()
    .min(6, 'Password must be least 6 symbols')
    .max(16, 'Password must be less 16 chars')
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')]),
});
