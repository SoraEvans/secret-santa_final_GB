import styled from 'styled-components'
import { styled as st } from '@mui/material'
import { Credits, StyledRegBtn } from '../../pages/auth/auth-styles'
import { AuthInput } from '../Inputs/Inputs'

export const FooterEl = styled.footer`
  background: #212121;
  font-family: Raleway;
  flex-shrink: 0;

  .reg-branch {
    position: absolute;
    right: 88px;
    bottom: -6px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
`

export const FooterText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  cursor: pointer;
  color: #ffffff;

  :hover {
    color: #ff6f56;
  }
`

export const CopyrightText = styled.p`
  text-align: center;
  color: #818181;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
`
export const ModalHead = styled.div`
  margin-bottom: 40px;
  h1 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #000000;
  }

  p {
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #979797;
  }
`

export const ModalCandyTop = styled.img`
  width: 42px;
  position: absolute;
  top: -22px;
  right: -50px;
`
export const ModalCandyBot = styled.img`
  width: 55px;
  position: absolute;
  bottom: 85px;
  left: -50px;
  transform: scale(-1, 1);
`
export const ModalSend = styled(StyledRegBtn)``

export const ModalInput = st(AuthInput)`
  width: 485px;
  height: 55px;
`
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 110px;
`
export const ModalCredits = styled(Credits)`
  text-align: center;
`
