import styled from 'styled-components'
import { CarouselButton } from '../home/components/carousel/style'

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: auto;

  h1 {
    font-family: Raleway;
    font-size: 36px;
    font-weight: 600;
  }

  .login-hat {
    position: absolute;
    top: -33px;
    left: 67px;
  }

  .register-hat {
    position: absolute;
    top: -34px;
    right: -14px;
  }

  .reset-hat {
    position: absolute;
    top: -34px;
    right: 137px;
  }

  .login-branch {
    position: absolute;
    top: -12px;
    left: -10px;
  }

  .reg-branch {
    position: absolute;
    right: -9px;
    bottom: -7px;
  }

  .mail-icon {
  }
`

export const StyledDesc = styled.p`
  color: #979797;

  a {
    color: #979797 !important;
  }
`

export const Title = styled(StyledDesc)`
  margin: 17px 0 40px;
`

export const Credits = styled(StyledDesc)`
  margin-top: 37px;
`

export const LabelLink = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const StyledLoginBtn = styled(CarouselButton)`
  width: 215px !important;
  height: 73px !important;
  margin-bottom: 0 !important;
`

export const StyledRegBtn = styled(CarouselButton)`
  width: 291px !important;
  height: 81px !important;
  margin-bottom: 0 !important;
`
