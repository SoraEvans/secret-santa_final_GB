import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 300px;
  position: absolute;
  top: 170px;
  right: 0;
`

export const SettingsTrigger = styled.div`
  position: absolute;
  top: -45px;
  right: 0;
  display: grid;
  place-content: center;
  height: 40px;
  width: 48px;
  border-radius: 0 6px 6px 0;
  overflow: hidden;
  cursor: pointer;
  background-color: #F2EEEE;
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: -45px;
  right: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  background-color: #F2EEEE;
  width: 200px;
  padding: 5px 12px;
  border-radius: 6px;
  opacity: ${({ openMenu }) => openMenu ? 1 : 0};
  transition: all 0.3s ease-in-out;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    right: -15px;
    width: 20px;
    height: 40px;
    background-color: #F2EEEE;



  }

  h4{
    text-align: center;
    margin: 0;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;

    li{
      margin: 0 0 12px 0;
    }

  }

  a{
    text-decoration: none;
    color: red;
  }

`

