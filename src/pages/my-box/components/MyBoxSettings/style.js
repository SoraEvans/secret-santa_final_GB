import styled from 'styled-components'

export const SettingsContainer = styled.div`
  width: 300px;
  display: grid;
  place-items: center;
  background-color: antiquewhite;
`

export const SettingsTrigger = styled.div`
  display: grid;
  place-content: center;
  height: 40px;
  width: 48px;
  border-radius: 0 6px 6px 0;
  overflow: hidden;
  cursor: pointer;
  background-color: #f2eeee;
  margin: 0 0 12px 0;
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 0;
  right: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  background-color: #f2eeee;
  width: ${({ openMenu }) => (openMenu ? '200px' : '0')};
  padding: 14px;
  height: 120px;
  border-radius: 6px;
  visibility: ${({ openMenu }) => (openMenu ? 'visible' : 'hidden')};
  transition: all 0.1s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -15px;
    width: 20px;
    height: 40px;
    background-color: #f2eeee;
  }

  div {
    opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
    text-align: center;
  }

  h4 {
    text-align: center;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 0 12px 0;
    }
  }

  a {
    text-decoration: none;
    color: red;
  }
`
