import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthForm, Credits, StyledRegBtn, Title } from './auth-styles'
import { AuthInput } from '../../components/Inputs/Inputs'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/regBranch.svg'

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  // const navigate = useNavigate()

  const onSubmit = async form => {
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
      .then(response => response.text())
      .then(response => {
        console.log(response)
        // navigate('/')
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
    <AuthForm>
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
      <div style={{ width: 642 }}>
        <AuthInput
          id="name"
          label="Имя"
          value={form.name}
          onChange={handleChangeForm}
        />
      </div>
      <div style={{ width: 642 }}>
        <AuthInput
          id="email"
          label="E-mail"
          value={form.email}
          onChange={handleChangeForm}
        />
      </div>
      <div style={{ width: 642 }}>
        <AuthInput
          id="password"
          label="Пароль"
          value={form.password}
          onChange={handleChangeForm}
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
