import styled from 'styled-components'
import { TextField } from '@mui/material'
import { styled as st } from '@mui/material/styles'

export const MyCardPage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 46px;
  margin: 40px 0;
  max-width: 1056px;
`

export const CardInfo = styled.div`
  width: 50%;
`

export const UserInfoBlock = styled.div`
  display: flex;
`

export const UserInfo = styled.div`
  margin-left: 19px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const UserName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`

export const Price = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #c1c1c1;
  white-space: nowrap;
`

export const PriceAmount = styled.div`
  color: black;
  margin-left: 2px;
`

export const CardForm = styled.div`
  padding-top: 22px;
`

export const CardFormLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 6px 0;

  a {
    color: #fd9797;
  }
`

export const ButtonBlock = styled.div`
  font-family: Raleway;
  font-size: 24px;
  color: #979797;
  margin-bottom: 38px;
`

export const TextBlock = styled.div`
  width: 600px;
  text-align: center;
  margin: 140px auto;
  padding-right: 210px;
`

export const Input = st(TextField)(() => ({
  background: '#F7F3F3'
}))

export const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  width: 50%;
`
export const ChatHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ChatTitle = styled.h3`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 19px;
  color: #000000;
  margin-bottom: 15px;
`
export const ChatSubTitle = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 108.02%;
  text-align: center;
  color: #a19593;
  max-width: 322px;
  margin-bottom: 30px;
`
