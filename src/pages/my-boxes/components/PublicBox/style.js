import styled from 'styled-components'
import { BtnAdd } from '../PrivateBox/style'

export const PublicWrapper = styled.div`
  font-family: Raleway;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  flex-direction: column;
  width: fit-content;
  align-items: center;
`

export const PublicBoxList = styled.div`
  max-height: 440px;
  width: 570px;
  overflow: auto;
`

export const PublicRightTitle = styled.h4`
  margin: 0 0 19px 0;
`

export const StyledIcon = styled.button`
  width: 103px;
  height: 103px;
  background-color: #FF5539;
  border-radius: 4px;
  border: none;
`

export const StyledBoxItem = styled(StyledIcon)`
  width: 112px;
  height: 112px;

  transition: background-color 0.2s ease-in, scale 0.2s ease-in-out;

  &:hover {
    background-color: #de4832;
    color: #fff;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const AddPrBox = styled(BtnAdd)`
  width: 112px;
  height: 112px;
`