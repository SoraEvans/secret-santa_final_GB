import React, { useState } from 'react'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/style_cont'
import {
  PageBackground,
  StyledLink,
  InputSection,
  InputSectionTitle,
  ProfileButton,
  ProfileForm,
  ProfileSwitch,
  ProfileTop,
  SwitchSection,
  SwitchText,
  RemoveDesc
} from './styles'
import { CustomInput } from '../../components/Inputs/Inputs'

function Profile() {
  const [state, setState] = useState({
    name: null,
    email: null,
    notifications: false,
    password: null,
    confirm_password: null
  })

  const id = localStorage.getItem('userId')
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.clear()
    navigate('/')
  }
  console.log(state)
  const onSubmitSave = async state => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/user/update/${id}`, {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        email_notify: state.notifications,
        newPassword: state.password
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          // navigate('/box-created')
        }
      })
  }

  const onSubmitDelete = async () => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/user/delete/${id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => {
      if (response.status === 200) {
        logOut()
      }
    })
  }

  return (
    <PageBackground>
      <Container>
        <div style={{ padding: '57px 220px 0' }}>
          <ProfileTop>
            <h2>Настройки профиля</h2>
            <StyledLink onClick={() => logOut()}>Выйти с сайта</StyledLink>
          </ProfileTop>
          <ProfileForm>
            <Divider />
            <InputSectionTitle>Личные данные</InputSectionTitle>
            <InputSection>
              <CustomInput
                id="first"
                type="text"
                label="Ваше имя или никнейм"
                margin="0 0 24px"
                data-name="name"
                // onChange={handleChangeState}
                onChange={event =>
                  setState({
                    ...state,
                    name: event.target.value
                  })
                }
              />
              <CustomInput
                id="second"
                type="email"
                label="Ваш e-mail"
                margin="0 0 24px"
                onChange={event =>
                  setState({
                    ...state,
                    email: event.target.value
                  })
                }
              />
            </InputSection>
            <Divider />
            <InputSectionTitle>Уведомления</InputSectionTitle>
            <SwitchSection>
              <SwitchText>
                <h4>E-mail</h4>
                <p>
                  При включенной опции уведомления будут приходить на email
                  адрес, указанный выше
                </p>
              </SwitchText>
              <ProfileSwitch
                checked={state.notifications}
                name="notifications"
                onChange={event =>
                  setState({
                    ...state,
                    notifications: event.target.checked
                  })
                }
              />
            </SwitchSection>
            <Divider />
            <InputSectionTitle>Смена пароля</InputSectionTitle>
            <InputSection>
              <CustomInput
                id="pass"
                type="password"
                label="Новый пароль"
                margin="0 0 24px"
              />
              <CustomInput
                id="confirm"
                type="password"
                label="Подтвердите пароль"
                margin="0 0 24px"
              />
            </InputSection>
            <ProfileButton type="button" onClick={() => onSubmitSave(state)}>
              Сохранить изменения
            </ProfileButton>
            <Divider />
            <InputSectionTitle>Удаление профиля</InputSectionTitle>
            <RemoveDesc>
              ВАЖНО: После удаления профиля, ваши карточки во всех коробках
              будут удалены
            </RemoveDesc>
          </ProfileForm>
          <ProfileButton type="submit" onClick={() => onSubmitDelete(state)}>
            Удалить профиль
          </ProfileButton>
        </div>
      </Container>
    </PageBackground>
  )
}

export default Profile
