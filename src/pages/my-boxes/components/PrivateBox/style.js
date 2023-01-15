import styled from 'styled-components'

export const PrivateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  column-gap: 30px;
  row-gap: 30px;
`

export const BoxInner = styled.button`
  width: 140px;
  height: 140px;
  background-color: #ffbfbf;
`

export const BtnAdd = styled(BoxInner)`
  border: none;
  cursor: pointer;
`
