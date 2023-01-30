import React from 'react'
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
  SwitchText, RemoveDesc
} from './styles'
import { CustomInput } from '../../components/Inputs/Inputs'

function Profile() {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.clear()
    navigate('/')
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
              <CustomInput id="first" type="text" label="Ваше имя или никнейм" margin="0 0 24px" />
              <CustomInput id="second" type="text" label="Ваш e-mail" margin="0 0 24px" />
            </InputSection>
            <Divider />
            <InputSectionTitle>Уведомления</InputSectionTitle>
            <SwitchSection>
              <SwitchText>
                <h4>E-mail</h4>
                <p>При включенной опции уведомления будут приходить
                  на email адрес, указанный выше</p>
              </SwitchText>
              <ProfileSwitch />
            </SwitchSection>
            <Divider />
            <InputSectionTitle>Смена пароля</InputSectionTitle>
            <InputSection>
              <CustomInput id="pass" type="text" label="Новый пароль" margin="0 0 24px" />
              <CustomInput id="confirm" type="text" label="Подтвердите пароль" margin="0 0 24px" />
            </InputSection>
            <ProfileButton type="submit">Сохранить изменения</ProfileButton>
            <Divider />
            <InputSectionTitle>Удаление профиля</InputSectionTitle>
            <RemoveDesc>ВАЖНО: После удаления профиля, ваши карточки во всех коробках будут удалены</RemoveDesc>
          </ProfileForm>
          <ProfileButton type="submit">Удалить профиль</ProfileButton>
        </div>
      </Container>
    </PageBackground>
  )
}

export default Profile
