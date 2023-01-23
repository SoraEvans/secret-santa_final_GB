import React, { useState } from 'react'
import { AuthForm, Credits, StyledRegBtn } from './auth-styles'
import { AuthInput } from '../../components/Inputs/Inputs'
import TextIcon from '../../assets/images/textHead.svg'
import btnBranch from '../../assets/images/regBranch.svg'
import mail from '../../assets/images/mail.svg'

// const onSubmit = (form) => {

// }

const PasswordResetPage = () => {
  const [form, setForm] = useState({ email: '' })

  const handleChangeForm = event => {
    const field = event.target.getAttribute('data-name')

    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  return (
    <AuthForm>
      <div style={{ position: 'relative' }}>
        <img className="reset-hat" src={TextIcon} alt="" />
        <h1>Восстановление доступа</h1>
      </div>
      <div style={{ width: 642 }}>
        <AuthInput
          id="email"
          label="Введите ваш e-mail"
          value={form.email}
          onChange={handleChangeForm}
        />
      </div>
      <Credits>
        На указанный e-mail будет отправлено письмо с временным паролем для входа на сайт.
      </Credits>
      <img className="mail-icon" src={mail} alt=''/>
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
