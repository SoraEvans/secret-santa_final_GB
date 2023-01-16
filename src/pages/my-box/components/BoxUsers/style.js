import styled from 'styled-components'

export const BoxUsersWrapper = styled.div`
  padding: 12px;
  margin: 70px 0 0 0;

  h2 {
    margin: 0 0 24px 0;
  }
`

export const UsersList = styled.div`
  display: flex;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
`

export const UserItem = styled.div`
  padding: 12px;
  box-shadow: 0 5px 11px 2px rgba(34, 60, 80, 0.2);
  margin: 0 24px 12px 0;
  width: 150px;
  flex: 0 0 16.3333%;
`

export const AddUsersBtn = styled(UserItem)`
  cursor: pointer;
  box-shadow: none;
  background-color: rgba(163, 163, 163, 0.47);
  text-align: center;
  transition: background-color 0.2s ease-in, scale 0.2s ease-in-out;

  &:hover {
    background-color: rgba(163, 163, 163, 0.35);
  }
  &:active {
    transform: scale(0.98);
  }
  
`
