import styled from 'styled-components'
import { TextField } from "@mui/material";
import { styled as st } from '@mui/material/styles'


export const MyCardPage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F5F5F5;
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
  color: #C1C1C1;
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

color: #FD9797;
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
background: '#F7F3F3',
}))