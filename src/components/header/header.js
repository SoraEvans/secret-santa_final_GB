import React, { useState } from 'react'
import Container from '../style_cont'
import logo from '../../assets/images/logo.svg'
import {
  AuthorisedWrapper,
  BoxesAndProfileLink,
  HeaderEl,
  Logo,
  NotificationsLink,
  SignUpLink,
  Wrapper
} from './style'
import UserNotification from '../UserNotification/UserNotification'

function Header() {
  const isLogged = localStorage.getItem('isLoggedIn')
  const [showNotification, setShowNotification] = useState(false)
  const handlerNotification = () => {
    setShowNotification(prevState => !prevState)
  }

  if (isLogged === 'true') {
    return (
      <HeaderEl>
        <Container>
          <Wrapper>
            <Logo>
              <img alt="logo" src={logo} />
            </Logo>
            <AuthorisedWrapper>
              <BoxesAndProfileLink to="/boxes">Коробки</BoxesAndProfileLink>
              <NotificationsLink to="#" onClick={handlerNotification}>
                Уведомления
              </NotificationsLink>
              <UserNotification active={showNotification} />
              <BoxesAndProfileLink to="/profile">Профиль</BoxesAndProfileLink>
            </AuthorisedWrapper>
          </Wrapper>
        </Container>
      </HeaderEl>
    )
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo>
            <img alt="logo" src={logo} />
          </Logo>
          <SignUpLink to="/register">Вход и регистрация</SignUpLink>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
