import styled from 'styled-components'
import { StyledIcon } from '../../../my-boxes/components/PublicBox/style'

export const BoxTitleInner = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
  margin: 70px 0;

  img {
    background-color: #ff5539;
    object-fit: contain;
    border-radius: 4px;
  }
`

export const BoxTitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  font-family: Raleway;
  font-size: 15px;
  height: 73px;
  justify-content: space-between;

  h3 {
    font-size: 15px;
    margin-bottom: 3px;
    font-weight: bold;
  }
  
  p {
    color: #C1C1C1;
  }
`

export const StyledBoxIcon = styled(StyledIcon)`
  width: 73px;
  height: 73px;
`