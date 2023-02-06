import styled from 'styled-components'

export const BoxUsersWrapper = styled.div`
  margin: 70px 0 0 0;

  h2 {
    margin: 0 0 24px 0;
  }
`

export const UsersList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  padding-right: 60px;
`

export const UserItem = styled.div`
  margin-bottom: 7px;
  padding: 12px;
  height: 142px;
  background-color: white;
  border-radius: 4px;
  border: 2px solid #FF5539;
  color: #FF5539;
  font-family: "Amatic SC bold";
  font-size: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 16.3333%;
  cursor: pointer;
`

export const UserBox = styled.div`
  max-width: 142px;
  width: 100%;
  text-align: center;
  margin: 0 58px 44px 0;
  font-size: 13px;
  color: #8F8F8F;
  font-family: Raleway;
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
  padding: 20px;
  transition: background-color 0.2s ease-in, scale 0.2s ease-in-out;

  &:hover {
    background-color: #ff5539;
    color: #fff;
  }
  &:active {
    transform: scale(0.98);
  }
`
