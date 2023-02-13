import styled from 'styled-components'

export const BoxItem = styled.div`
  font-family: Raleway;
  background-color: white;
  max-width: 544px;
  height: 133px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 33px 19px;
  margin-bottom: 20px;
  outline: 1px solid #FF5539;
  border-radius: 3px;
  
  :hover {
    outline: 3px solid #FF5539;
  }
`

export const BoxItemText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  max-width: 50%;
  font-size: 12px;
  justify-content: space-between;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    
    p {
      margin-bottom: 4px;
    }
  }
`

export const BoxTextDate = styled.p`
  margin: 0 0 6px 0;
`

export const BoxTextHeading = styled.h4`
  font-size: 15px;
  margin-bottom: 4px;
`
