import styled from 'styled-components'

export const PublicWrapper = styled.div`
  font-family: Raleway;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const PublicLeftItem = styled.div`
  display: flex;
  column-gap: 30px;
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