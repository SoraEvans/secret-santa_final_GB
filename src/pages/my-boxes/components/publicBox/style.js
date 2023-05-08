import styled from 'styled-components'
import { BtnAdd } from '../privateBox/style'

export const PublicWrapper = styled.div`
  font-family: Raleway;
  display: flex;
`

export const PublicLeftItem = styled.div`
  display: flex;
  column-gap: 30px;
  flex-flow: wrap;
  max-height: 440px;
  overflow: auto;
`

export const PublicLeftTitle = styled.h4`
  text-align: center;
  margin: 0 0 19px 0;
`

export const PublicRightBox = styled.div`
  display: flex;
  padding-left: 60px;
  flex-direction: column;
  width: fit-content;
  align-items: center;
`

export const PublicBoxList = styled.div`
  padding: 3px 15px 3px 3px;
  max-height: 440px;
  width: 570px;
  overflow: auto;
`

export const PublicRightTitle = styled.h4`
  margin: 0 0 19px 0;
`

export const StyledIcon = styled.button`
  width: 97px;
  height: 97px;
  background-color: #FF5539;
  border-radius: 4px;
  border: none;
`

export const StyledBoxElement = styled.div`
  :hover {
    font-weight: bold;
  }
`

export const StyledBoxItem = styled(StyledIcon)`
  width: 112px;
  height: 112px;
  cursor: pointer;
  
  &:hover {
    background-color: #f53e20;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const AddPrBox = styled(BtnAdd)`
  width: 112px;
  height: 112px;
`