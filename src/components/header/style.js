import styled from 'styled-components'
import { Button } from "@mui/material";
import { styled as st } from '@mui/material/styles'

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
  background: ${props => props.color};
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

export const StyledLink = st(Button)(({ colorState }) => ({
  'font-family': 'Raleway',
  textTransform: 'capitalize',
  color: colorState === 'white' ? '#FF5539' : 'black',
  outline: colorState === 'white' ? '1px solid #FF5539' : 'none',
  textDecoration: 'none',
  display: 'block',
  borderRadius: '4px',
  textAlign: 'center',
  padding: '8px 30px !important',
  marginLeft: '15px',
  background: colorState === 'white' ? colorState : '#FF7D68',
  '& div': {
    'font-family': 'Raleway',
  }
}))