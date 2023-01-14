import React, { useEffect, useState } from 'react'
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
  const [color, setColor] = useState('transparent')
  const handlerNotification = () => {
    setShowNotification(prevState => !prevState)
  }

  const listenScrollEvent = () => {
    if (window.scrollY > 400) {
      setColor('white')
    } else {
      setColor('transparent')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', listenScrollEvent)
  }, [])

  if (isLogged === 'true') {
    return (
      <HeaderEl>
        <Container>
          <Wrapper color={color}>
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
        <Wrapper color={color}>
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
