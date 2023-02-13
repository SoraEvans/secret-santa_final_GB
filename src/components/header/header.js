import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Badge, Popover } from '@mui/material'
import Container from '../style_cont'
import logo from '../../assets/images/logo.svg'
import { AuthorisedWrapper, HeaderEl, Logo, StyledLink, Wrapper } from './style'
import UserNotification from '../UserNotification/UserNotification'
import getNotification from '../../API/getNotification'
import deleteNotification from '../../API/deleteNotification'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLogged = localStorage.getItem('isLoggedIn');
  const [color, setColor] = useState('transparent');
  const [notification, setNotification] = useState([]);
  const id = localStorage.getItem('userId');

  useEffect(() => {
    getNotification(setNotification, id);
  }, []);

  useEffect(() => {
    getNotification(setNotification, id)
    const handle = setInterval(() => {
      getNotification(setNotification, id)
    }, 10000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  const delNotification = async (notificationId) => {
    await deleteNotification(setNotification, id, notificationId)
  }

  const listenScrollEvent = () => {
    if (window.scrollY > 400 || document.location.pathname !== '/') {
      setColor('white');
    } else {
      setColor('transparent');
    }
  };

  const test = (note) => {
    localStorage.setItem('notification', JSON.stringify(note.map(item => item.id)))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    test(notification)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    listenScrollEvent();
    document.addEventListener('scroll', listenScrollEvent);
  }, [location]);

  if (isLogged === 'true') {
    return (
      <HeaderEl>
        <Container>
          <Wrapper color={color}>
            <Logo>
              <img alt="logo" src={logo} />
            </Logo>
            <AuthorisedWrapper>
              <StyledLink disableRipple colorState={color} onClick={() => navigate('/boxes')} active={location.pathname === '/boxes'}>
                <div>Коробки</div>
              </StyledLink>
              <Badge sx={{ span: { background: '#FF5539' } }} color="primary" badgeContent={notification.length}>
                <StyledLink
                  margin="0 0 0 15px"
                  colorState={color}
                  onClick={handleClick}
                  disableRipple
                  active={anchorEl}
                >
                  Уведомления
                </StyledLink>
              </Badge>
              <Popover
                anchorEl={anchorEl}
                onClose={handleClose}
                open={anchorEl}
                marginThreshold={84}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                style={{
                  '&:last-child': {
                    borderBottom: 'none',
                  }
                }}
              >
                <UserNotification active={anchorEl} delNotification={delNotification} notification={notification} />
              </Popover>
              <StyledLink
                margin="0 0 0 15px"
                colorState={color}
                onClick={() => navigate('/profile')}
                disableRipple
                active={location.pathname === '/profile'}
              >
                Профиль
              </StyledLink>
            </AuthorisedWrapper>
          </Wrapper>
        </Container>
      </HeaderEl>
    );
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper color={color}>
          <Logo>
            <img alt="logo" src={logo} />
          </Logo>
          {console.log('color', color)}
          <StyledLink
            margin="0 0 0 15px"
            colorState={color}
            onClick={() => navigate('/login')}
            disableRipple
          >
            Вход и регистрация
          </StyledLink>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}

export default Header;
