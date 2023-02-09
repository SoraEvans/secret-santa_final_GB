import styled from 'styled-components';
import { styled as st } from '@mui/material/styles';
import { Tabs, Tab, Box } from '@mui/material'

import { CardInfo, GiftButton, MyCardPage } from "../MyCard/style";

export const MyWardPage = styled(MyCardPage)`
`

export const MyWardInfo = styled(CardInfo)`
`

export const GiftSentButton = styled(GiftButton)`
    align-self: flex-end;
    margin: 50px 0 5px;
   
`

export const SantaImg = styled.div`
  width: 50%;
  display: flex;
`

export const TabsWrapper = st(Box)`


`

export const BodyInner = styled.div`
  display: flex;
  margin-bottom: 43px;
  height: 466px;
`

export const TabsInner = st(Tabs)`

  border-radius: 3px 0px 0px 3px;
  padding: 0;
  

  button {
  padding: 0;
  min-width: 70px;
  }


  .MuiTabs-indicator {
    display: none;
  }

  button:hover,
  button:focus {
    background-color: #E4E4E4;
    
  }

  button.Mui-selected {
    color: #444444;
    background-color: #F6F3F3;
    min-width: 87px;
    border: 2px solid #E4E4E4;
    border-left: none;
    
  }
`

export const TabItem = st(Tab)`
  writing-mode: vertical-rl;
  transform:scale(-1);
  font-size: 16px;
  align-self: center;
  background-color: #E8E8E8;
  text-transform: none;
  height: 181px;
  color: #AAA9A9;
  

  & div {
    writing-mode: tb;
    
  }
`
export const BodyWrapper = styled.div`
  background-color: #F6F3F3;
  border: 2px solid #E4E4E4;
  border-radius: 0 4px 4px 0;
  margin-left: -2px;
  width: 100%;
`


export const TabBody = st(Box)`

`