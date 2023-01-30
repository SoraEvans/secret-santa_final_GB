import { Tabs, Tab, Box, styled } from '@mui/material'

export const BoxWrapper = styled(Box)`
  padding: 190px 0 0 384px;
`

export const TabBox = styled(Tabs)`
  height: 50px;
  margin: 0 0 48px 0;
  border: 1px solid #FF5539;
  border-radius: 3px;
  width: max-content;
  .MuiTabs-indicator {
    display: none;
  }
`

export const TabItem = styled(Tab)`
  font-family: Raleway;
  text-transform: none;
  background-color: white;
  color: #FF5539;
 
  &.Mui-selected {
    color: white;
    background-color: #FF5539;
  }
  
  &:hover {
    //color: white;
    //background-color: #ffbfbf;
  }
`

export const BoxItem = styled(Box)``
