import * as Yup from 'yup';
export let userSchema = Yup.object().shape({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });