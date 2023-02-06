import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthForm, Credits, StyledRegBtn } from './auth-styles'
import { AuthInput } from '../../components/Inputs/Inputs'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/regBranch.svg'
import mail from '../../assets/images/mail.svg'
import SchemaValidation from '../../helpers/schemas/SchemaValidation'

// const onSubmit = (form) => {

// }

const PasswordResetPage = () => {
  const [form, setForm] = useState({ email: '' })

  const handleChangeForm = e => {
    const field = e.target.getAttribute('id')
    setForm({
      ...form,
      [field]: e.target.value
    })

    console.log(field)
  }
  const onSubmit = form => {
    console.log(form)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SchemaValidation)
  })

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ position: 'relative' }}>
        <img className="reset-hat" src={TextIcon} alt="" />
        <h1>Восстановление доступа</h1>
      </div>
      <div style={{ width: 642 }}>
        <AuthInput
          {...register('email')}
          id="email"
          type="email"
          label="Введите ваш e-mail"
          value={form.email}
          onChange={handleChangeForm}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </div>
      <Credits>
        На указанный e-mail будет отправлено письмо с временным паролем для
        входа на сайт.
      </Credits>
      <img className="mail-icon" src={mail} alt="" />
      <div style={{ position: 'relative' }}>
        <img className="reg-branch" src={btnBranch} alt="" />
        <StyledRegBtn
          variant="outlined"
          // onClick={() => {
          //   onSubmit(form)
          // }}
        >
          Отправить
        </StyledRegBtn>
      </div>
    </AuthForm>
  )
}

export default PasswordResetPage
