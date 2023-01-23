import styled from 'styled-components';
import { styled as st } from '@mui/material/styles';
import { Tabs, Tab, Box } from '@mui/material'

import { CardInfo, MyCardPage } from "../MyCard/style";

export const MyWardPage = styled(MyCardPage)`
`

export const MyWardInfo = styled(CardInfo)`
`
export const SantaImg = styled.div`
  width: 50%;
  `

export const TabsWrapper = st(Box)`
border: 2px solid #E4E4E4;
`

export const BodyInner = styled.div`
display: flex;
margin: 10px 0;
`

export const TabsInner = st(Tabs)`
  width: 50px;
  border-radius: 4px;

  .MuiTabs-indicator {
    background-color: #F6F3F3;
  }

  button:hover,
  button:focus {
    background-color: #E4E4E4;
    
  }

  button.Mui-selected {
    color: #444444;
    background-color: #F6F3F3;
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
padding: 20px;
margin-right: 20px;
background-color: #F6F3F3;
border: 2px solid #E4E4E4;
border-left: none;
width: 100%;
`


export const TabBody = st(Box)`

`