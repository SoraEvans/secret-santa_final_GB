import * as yup from 'yup'

const SchemaValidation = yup.object().shape({
  name: yup.string().required('Введите ваше имя'),
  email: yup
    .string()
    .email('Введите корректный Email')
    .required('Введите ваш Email'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Введите пароль'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .required('Введите пароль еще раз'),
  acceptTerms: yup.bool().oneOf([true], 'Примите пользовательское соглашение')
})

export default SchemaValidation
