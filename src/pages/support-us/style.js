import styled from 'styled-components'


export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 337px 0 293px;
  position: relative;
`

export const SupportContainer = styled.main`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Raleway !important
`

export const LeftSide = styled.div`
  width: 489px;
`

export const SupportTitle = styled.div`
  font-family: 'Amatic SC';
  font-weight: 700;
  font-size: 80px;
`

export const SupportText = styled.div`

  margin: 27px 0 61px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #979797;
`

export const PaymentDetails = styled.div`
  display: flex;
  margin-bottom: 15px;
`
export const LogoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PaymentLogo = styled.div`
`

export const PaymentLogoDescription = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #979797;
`

export const PaymentName = styled.div`
  margin-left: 26px;
  font-weight: 400;
  font-size: 30px;
  line-height: 32px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #979797;
`