import styled from 'styled-components'
import { styled as st } from '@mui/material/styles'
import { Button, Switch } from '@mui/material'

export const PageBackground = styled.div`
  background-image: url("img/Snowflake-Background-PNG.svg");
  background-position: bottom -250px right 0;
  background-repeat: no-repeat;
  font-family: Raleway !important
`

export const ProfileTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 35px;
  padding-top: 140px;
`

export const StyledLink = styled(Button)`
  display: block;
  font-size: 20px;
  color: #FF5539 !important;
  text-decoration: underline !important;
  font-weight: bold !important;
`

export const ProfileForm = styled.form`
  width: 100%;
  margin: 0 auto;
`

export const InputSection = styled.div`
  margin: 0 auto 29px;
  width: 642px;
`

export const InputSectionTitle = styled.h3`
  margin: 35px 0 19px;
`

export const SwitchSection = styled.div`
  background-color: #F6F3F3;
  border: 2px solid #CDCCCC;
  border-radius: 3px;
  width: 642px;
  display: flex;
  align-items: center;
  margin: 0 auto 53px;
`

export const SwitchText = styled.div`
  padding: 15px;

  h4 {
    margin-bottom: 9px;
  }

  p {
    font-size: 14px;
  }
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
      '& .MuiSwitch-thumb': {
        opacity: 1,
        width: 30,
        height: 30,
        backgroundColor: '#FF5539',
        boxShadow: 'none'
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FF917E'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#C6BBB9',
    boxShadow: 'none'
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    opacity: 1,
    boxSizing: 'border-box',
    backgroundColor: '#D6CCCA',
  }
}))

export const RemoveDesc = styled.div`
  font-family: Raleway;
  text-align: center;
  color: #7C7C7C;
  font-size: 20px;
`

export const ProfileButton = styled.button`
  font-family: Raleway;
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 20px;
  margin: 40px auto 71px;
  height: 81px;
  border-radius: 4px;
  width: 291px;
  background-color: #FF5539;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff4f32;
  }
`

