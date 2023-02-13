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
    top: 5px;
    left: -10px;
  }

  .reg-branch {
    position: absolute;
    right: -9px;
    bottom: -7px;
  }

  .mail-icon {
    margin: 30px 0 20px;
  }
`

export const StyledDesc = styled.p`
  color: #979797;

  a {
    color: #979797 !important;
  }
`

export const Title = styled(StyledDesc)`
  font-family: Raleway;
  margin: 17px 0 40px;
  font-size: 20px;

  a {
    :hover {
      color: #FF5539 !important;
    }
  }
`

export const Credits = styled(StyledDesc)`
  font-family: Raleway;
  font-size: 20px;
  margin-top: 29px;

  a {
    :hover {
      color: #FF5539 !important;
    }
  }
`

export const LabelLink = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;

  a {
    color: #979797 !important;

    :hover {
      color: #FF5539 !important;
    }
  }
`

export const StyledLoginBtn = styled(CarouselButton)`
  margin: 16px auto 136px auto !important;
  font-size: 22px !important;
  width: 185px !important;
  height: 68px !important;
  margin-bottom: 0 !important;
`

export const StyledRegBtn = styled(CarouselButton)`
  margin: 16px auto 136px auto !important;
  font-size: 22px !important;
  width: 276px !important;
  height: 68px !important;
  margin-bottom: 0 !important;
`

export const StyledRemBtn = styled(CarouselButton)`
  margin: 16px auto 136px auto !important;
  font-size: 22px !important;
  width: 226px !important;
  height: 68px !important;
  margin-bottom: 0 !important;
`
