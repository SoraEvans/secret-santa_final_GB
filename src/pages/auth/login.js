import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthForm, Credits, LabelLink, StyledLoginBtn, Title } from './auth-styles'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/btnBranch.svg'
import { AuthInput } from '../../components/Inputs/Inputs'

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const onSubmit = async form => {
    await fetch('https://backsecsanta.alwaysdata.net/api/user/login', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('token', response.authorisation.token)
          localStorage.setItem('userId', response.user.id)
          navigate('/boxes')
        }
      })
  }

  const handleChangeForm = e => {
    const field = e.target.getAttribute('id')
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  return (
    <AuthForm>
      <div style={{ position: 'relative' }}>
        <img className="login-hat" src={TextIcon} alt="" />
        <h1>Войти на сайт</h1>
      </div>
      <Title>
        Ещё не зарегистрированы?&nbsp;
        <Link to="/register" underline="always">
          Зарегистрироваться
        </Link>
      </Title>
      <div style={{ width: 642 }}>
        <AuthInput
          id="email"
          label="E-mail"
          value={form.email}
          onChange={handleChangeForm}
        />
      </div>
      <div style={{ width: 642, position: 'relative' }}>
        <AuthInput
          id="password"
          label="Пароль"
          type="password"
          value={form.password}
          onChange={handleChangeForm}
        />
        <LabelLink for="password">
          <Link to="/password-reset">Забыли пароль?</Link>
        </LabelLink>
      </div>
      <div style={{ position: 'relative' }}>
        <img className="login-branch" src={btnBranch} alt="" />
        <StyledLoginBtn
          variant="outlined"
          onClick={() => {
            onSubmit(form)
          }}
        >
          Войти
        </StyledLoginBtn>
      </div>
      <Credits>
        Входя на сайт, вы даете согласие на&nbsp;
        <Link to="/www">обработку персональных данных.</Link>
      </Credits>
    </AuthForm>
  )
}

export default LoginPage
