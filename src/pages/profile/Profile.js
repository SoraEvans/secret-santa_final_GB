import React from 'react'
import { Divider, TextField } from '@mui/material'
import Container from '../../components/style_cont'
import {
  PageBackground,
  StyledLink,
  InputBlock,
  InputSection,
  InputSectionTitle,
  ProfileButton,
  ProfileForm,
  ProfileSwitch,
  ProfileTop,
  SwitchSection,
  SwitchText
} from './styles'

function Profile() {

  return (
    <PageBackground>
      <Container>
        <div style={{ padding: 57 }}>
          <ProfileTop>
            <h2>Настройки профиля</h2>
            <StyledLink type='button' href="/">Выйти с сайта</StyledLink>
          </ProfileTop>
          <ProfileForm>
            <InputSectionTitle>Личные данные</InputSectionTitle>
            <InputSection>
              <InputBlock>
                <TextField id="first" type="text" placeholder="Name" label="Ваше имя или никнейм" />

              </InputBlock>
            </InputSection>
            <InputSection>
              <InputBlock>
                <TextField id="second" type="text" label="Ваш e-mail" />

              </InputBlock>
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
              <InputBlock>
                <TextField id="pass" type="text" placeholder="new password" label="Новый пароль" />
              </InputBlock>
              <InputBlock>
                <TextField id="confirm" type="text" placeholder="confirm password" label="Подтвердите пароль" />
              </InputBlock>
            </InputSection>
            <Divider />
            <InputSectionTitle>Удаление профиля</InputSectionTitle>
          </ProfileForm>
          <ProfileButton type="submit">Удалить профиль</ProfileButton>
        </div>
      </Container>
    </PageBackground>
  )
}

export default Profile
