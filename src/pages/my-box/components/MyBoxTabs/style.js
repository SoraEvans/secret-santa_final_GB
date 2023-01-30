import { Box, styled, Tab, Tabs } from '@mui/material'

export const TabsWrapper = styled(Box)`
  position: absolute;
  top: 170px;
  right: -4px;
`

export const TabsInner = styled(Tabs)`
  width: 57px;
  border-radius: 4px;
  border: 1px solid #FF5539;
  background-color: white;

  .MuiTabs-indicator {
    background-color: #ff5539;
  }

  button:hover,
  button:focus {
    background-color: rgba(255, 125, 104, 0.52);
  }

  button.Mui-selected {
    color: white;
    background-color: #FF5539;
  }
`

export const TabItem = styled(Tab)`
  writing-mode: vertical-lr;
  font-family: Raleway;
  color: #FF5539;
  font-size: 18px;
  align-self: center;
  text-transform: none;
  height: 181px;

  & div {
    writing-mode: tb;
  }
`

export const TabBody = styled(Box)``
