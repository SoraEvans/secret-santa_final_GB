import styled from 'styled-components'

export const BoxItem = styled.div`
  background-color: #ffbfbf;
  max-width: 544px;
  height: 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 33px;
`
export const BoxItemText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  max-width: 50%;

  font-size: 12px;
`
export const BoxTextDate = styled.p`
  margin: 0 0 18px 0;
`

export const BoxTextHeading = styled.h4`
  font-size: 18px;
`

export const JoinBtn = styled.button`
  font-size: 12px;
  background-color: #b8b8b8;
  padding: 8px;
  border: none;
  cursor: pointer;
`
