import { Tabs, Tab, Box, styled } from '@mui/material'

export const TabsWrapper = styled(Box)`
  position: absolute;
  top: 170px;
  right: 0;
`

export const TabsInner = styled(Tabs)`
  width: 50px;
  border-radius: 4px;

  .MuiTabs-indicator {
    background-color: #FF5539;
  }

  button:hover,
  button:focus {
    background-color: rgba(255, 125, 104, 0.52);
  }

  button.Mui-selected {
    color: #000;
    background-color: #FF7D68;
  }
`

export const TabItem = styled(Tab)`
  writing-mode: vertical-lr;
  font-size: 16px;
  align-self: center;
  background-color: #f2eeee;
  text-transform: none;
  height: 181px;

  & div {
    writing-mode: tb;
  }
`

export const TabBody = styled(Box)`
`
