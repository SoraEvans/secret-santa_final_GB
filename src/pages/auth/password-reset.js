import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthForm, Credits, StyledRemBtn } from './auth-styles'
import { AuthInput } from '../../components/Inputs/Inputs'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/regBranch.svg'
import mail from '../../assets/images/mail.svg'
import SchemaValidation from '../../helpers/schemas/SchemaValidation'

// const onSubmit = (form) => {

// }

const PasswordResetPage = () => {
  const [form, setForm] = useState({ email: '' })
  const navigate = useNavigate()
  const handleChangeForm = e => {
    const field = e.target.getAttribute('id')
    setForm({
      ...form,
      [field]: e.target.value
    })
  }
  const onSubmit = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/user/restore', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        email: form.email
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          navigate('/login')
        }
        console.log(response)
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(SchemaValidation)
  })

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative' }}>
        <img className="reset-hat" src={TextIcon} alt="" />
        <h1 style={{ marginBottom: 20 }}>Восстановление пароля</h1>
      </div>
      <Credits style={{ width: 610, marginBottom: 40, marginTop: 0 }}>
        На указанный e-mail будет отправлено письмо с временным паролем для
        входа на сайт.
      </Credits>
      <div style={{ width: 490 }}>
        <AuthInput
          {...register('email', { required: true })}
          id="email"
          type="email"
          label="Введите ваш e-mail"
          value={form.email}
          onChange={handleChangeForm}
          style={{ marginBottom: 0 }}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </div>
      <img className="mail-icon" src={mail} alt="" />
      <div style={{ position: 'relative' }}>
        <img className="reg-branch" src={btnBranch} alt="" />
        <StyledRemBtn
          variant="outlined"
          type="submit"
        >
          Отправить
        </StyledRemBtn>
      </div>
    </AuthForm>
  )
}

export default PasswordResetPage
