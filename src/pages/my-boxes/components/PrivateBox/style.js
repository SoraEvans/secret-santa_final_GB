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
  width: 142px;
  height: 142px;
  background-color: #FF5539;
  border-radius: 4px;
  border: none;
`

export const StyledName = styled.div`
  margin-top: 7px;
  font-size: 13px;
  font-family: Raleway;
  color: #8F8F8F;
`

export const BtnAdd = styled(BoxInner)`
  border: 2px dashed #FF5539;
  color: #FF5539;
  padding: 10px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  font-family: Raleway;
  font-size: 14px;
`
