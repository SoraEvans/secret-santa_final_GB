import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from '../style_cont'
import logo from '../../assets/images/logo.svg'
import {
  AuthorisedWrapper,
  HeaderEl,
  Logo,
  StyledLink,
  Wrapper
} from './style'
import UserNotification from '../UserNotification/UserNotification'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isLogged = localStorage.getItem('isLoggedIn')
  const [showNotification, setShowNotification] = useState(false)
  const [color, setColor] = useState('transparent')
  const handlerNotification = () => {
    setShowNotification(prevState => !prevState)
  }

  const listenScrollEvent = () => {
    if (window.scrollY > 400 || document.location.pathname !== '/') {
      setColor('white')
    } else {
      setColor('transparent')
    }
  }

  useEffect(() => {
    listenScrollEvent()
    document.addEventListener('scroll', listenScrollEvent)
  }, [location])

  if (isLogged === 'true') {
    return (
      <HeaderEl>
        <Container>
          <Wrapper color={color}>
            <Logo>
              <img alt="logo" src={logo} />
            </Logo>
            <AuthorisedWrapper>
              <StyledLink colorState={color} onClick={() => navigate('/boxes')}><div>Коробки</div></StyledLink>
              <StyledLink margin="0 0 0 15px" colorState={color} onClick={handlerNotification}>
                Уведомления
              </StyledLink>
              <UserNotification active={showNotification} />
              <StyledLink margin="0 0 0 15px" colorState={color} onClick={() => navigate('/profile')}>Профиль</StyledLink>
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
          <StyledLink margin="0 0 0 15px" colorState={color} onClick={() => navigate('/login')}>Вход и регистрация</StyledLink>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
