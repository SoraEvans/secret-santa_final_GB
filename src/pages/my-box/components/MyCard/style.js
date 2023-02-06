import styled from 'styled-components'
import { TextField } from '@mui/material'
import { styled as st } from '@mui/material/styles'

export const MyCardPage = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(246, 243, 243, 0.5);
  border-radius: 4px;
  padding: 58px;
  height: 699px;
  margin: 53px 295px 30px -45px;
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
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`

export const Price = styled.div`
  display: flex;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #c1c1c1;
  white-space: nowrap;
`

export const PriceAmount = styled.div`
  color: black;
  margin-left: 4px;
`

export const CardForm = styled.div`
  padding-top: 22px;
`

export const CardFormLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 6px 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  a {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: #FF5539;
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
  background: '#F6F3F3',

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
  text-align: center;
  color: #a19593;
  max-width: 400px;
  line-height: 18.12px;
  margin-bottom: 17px;
`

export const StyledHr = styled.hr`
  margin: 0 58px;
  border: 1px solid rgba(214, 204, 202, 0.69);
`
