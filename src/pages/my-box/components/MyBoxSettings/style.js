import styled from 'styled-components'

export const SettingsContainer = styled.div`
  display: grid;
  place-items: center;
`

export const SettingsTrigger = styled.div`
  display: grid;
  place-content: center;
  height: 57px;
  width: 57px;
  border-radius: ${({ active }) => (active ? "0" : "3px 0 0 3px")};
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#F6F3F3" : "#D6CCCA")};
  margin: 0 0 12px 0;
`

export const DropdownMenu = styled.div`
  font-family: Raleway;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  background-color: #F6F3F3;
  padding: 20px 26px;
  height: 177px;
  justify-content: space-between;
  
  p {
    cursor: pointer;
    font-size: 14px;
    
    &:last-child {
      color: #FF5539;
    }
  }
`

export const ModalButtons = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  width: 155px;
  height: 44px;
  margin: 30px 13px;
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  color: #FF5539;
  background-color: white;
  border: 1px solid #FF5539;
  cursor: pointer;
  border-radius: 3px;
`

export const DeleteButton = styled(CancelButton)`
  background-color: #FF5539;
  color: white;
`
