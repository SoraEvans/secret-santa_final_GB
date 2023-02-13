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
  padding: 19px 295px;
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

export const StyledLink = st(Button)(({ colorState, margin, padding, fontsize, width, active }) => ({
  'font-family': 'Raleway',
  textTransform: 'inherit',
  // eslint-disable-next-line no-nested-ternary
  color: colorState === 'white' ? (active ? 'white' : '#FF5539') : 'black',
  outline: colorState === 'white' ? '1px solid #FF5539' : 'none',
  textDecoration: 'none',
  display: 'block',
  borderRadius: '4px',
  textAlign: 'center',
  'font-size': fontsize ? `${fontsize} !important` : '16px',
  padding: padding ? `${padding} !important` : '8px 30px !important',
  width: width || 'auto',
  margin: margin || '',
  // eslint-disable-next-line no-nested-ternary
  background: colorState === 'white' ? (active ? '#FF5539' : 'white') : '#FF7D68',

  '&:hover': {
    backgroundColor: '#f53e20',
    color: '#fff',
  },

  '& div': {
    'font-family': 'Raleway',
  }
}))