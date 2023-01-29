import styled from 'styled-components'

export const BoxUsersWrapper = styled.div`
  padding: 12px;
  margin: 70px 0 0 0;

  h2 {
    margin: 0 0 24px 0;
  }
`

export const UsersList = styled.ul`
  display: flex;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
`

export const UserItem = styled.li`
  border: 2px solid #ff5539;
  border-radius: 4px;
  margin: 0 24px 12px 0;
  width: 142px;
  height: 142px;
  text-align: center;
`

export const UserCover = styled.div`
  height: inherit;
  display: grid;
  place-content: center;
  margin: 0 0 7px 0;
  font-family: 'Amatic SC', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 121px;
  color: #ff5539;
  cursor: pointer;
`

export const AddUsersBtn = styled(UserItem)`
  display: grid;
  place-content: center;
  cursor: pointer;
  box-shadow: none;
  border: 2px dashed #ff5539;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #ff5539;
  transition: background-color 0.2s ease-in, scale 0.2s ease-in-out;

  &:hover {
    background-color: #ff5539;
    color: #fff;
  }
  &:active {
    transform: scale(0.98);
  }
`
