import styled from 'styled-components'
import { styled as st } from '@mui/material/styles'
import { Link, Switch } from '@mui/material'

export const PageBackground = styled.div`
  padding-bottom: 80px;
  background-image: url("img/Snowflake-Background-PNG.svg");
  background-position: bottom -250px right 0;
  background-repeat: no-repeat;
`

export const ProfileTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 140px;
`

export const StyledLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 20px;
  color: #FF8787 !important;
  text-decoration-color: inherit !important;
`

export const ProfileForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding-top: 114px;
`

export const InputSection = styled.div`
  display: flex;
  justify-content: center;
`

export const InputSectionTitle = styled.h3`

`

export const InputBlock = styled.div`
  position: relative;
  justify-self: center;
  display: inline-block;
  margin-bottom: 40px;
`

export const Input = styled.input`
  width: 622px;
  height: 62px;
  background-color: #F6F3F3;
  border: 2px solid #CDCCCC;
  font-size: 28px;
  padding: 10px;
`

export const SwitchSection = styled.div`
  background-color: #F6F3F3;
  border: 2px solid #CDCCCC;
  width: 642px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
`

export const SwitchText = styled.div`
  padding: 15px;
`

export const ProfileSwitch = st(Switch)(() => ({
  width: 79,
  height: 36,
  padding: 0,
  margin: 20,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 25
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(43px)',
      color: '#FD9797',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FFBFBF'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    opacity: 1,
    boxSizing: 'border-box',
    backgroundColor: '#D9D9D9',
  }
}))

export const ProfileButton = styled.button`
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 20px;
  margin: 0 auto;
  height: 81px;
  width: 291px;
  background-color: #fd9797;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff5539;
  }
`

