import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthForm, Credits, StyledRegBtn, Title } from './auth-styles'
import { AuthInput } from '../../components/Inputs/Inputs'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/regBranch.svg'
import SchemaValidation from '../../helpers/schemas/SchemaValidation'

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(SchemaValidation)
  })

  const onSubmit = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/user/register', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password
      })
    })
      .then(response => response.json())  // Парсинг данных ответа перед проверкой на успешную регистрацию
      .then(response => {
        if (response.status === 'success') {
          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('token', response.authorisation.token)
          localStorage.setItem('userId', response.user.id)
          navigate('/boxes')
        }
      })
  }

  const handleChangeForm = event => {
    const field = event.target.getAttribute('id')

    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ position: 'relative' }}>
        <img className="register-hat" src={TextIcon} alt="" />
        <h1>Регистрация</h1>
      </div>
      <Title>
        Уже зарегистрированы?&nbsp;
        <Link to="/login" underline="always">
          Войти на сайт
        </Link>
      </Title>
      <div style={{ width: 490 }}>
        <AuthInput
          {...register('name', { required: true } )}
          id="name"
          label="Имя"
          value={form.name}
          onChange={handleChangeForm}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
      </div>
      <div style={{ width: 490 }}>
        <AuthInput
          {...register('email', { required: true } )}
          id="email"
          label="E-mail"
          type="email"
          value={form.email}
          onChange={handleChangeForm}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </div>
      <div style={{ width: 490 }}>
        <AuthInput
          {...register('password', { required: true } )}
          id="password"
          label="Пароль"
          type="password"
          value={form.password}
          onChange={handleChangeForm}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <img className="reg-branch" src={btnBranch} alt="" />
        <StyledRegBtn
          variant="outlined"
          onClick={() => {
            onSubmit(form)
          }}
        >
          Зарегистрироваться
        </StyledRegBtn>
      </div>
      <Credits>
        Регистрируясь, вы даете согласие на&nbsp;
        <Link to="/www">обработку персональных данных.</Link>
      </Credits>
    </AuthForm>
  )
}
export default RegisterPage
