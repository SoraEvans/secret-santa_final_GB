import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  display: block;
  height: 85px;
`

export const Wrapper = styled.div`
  font-family: Raleway;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 56px;
  background: ${props => {
    console.log(props)
    return props.color
  }};
`

export const AuthorisedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 65px;
`

export const SignUpLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #FF7D68;
  width: 205px;
  border-radius: 4px;
  padding: 15px 0;
  text-align: center;
`

export const BoxesAndProfileLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #FF7D68;
  width: 131px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
  border-radius: 4px;
`

export const NotificationsLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #FF7D68;
  width: 181px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
  border-radius: 4px;
`
