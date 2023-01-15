import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { SettingsContainer, SettingsTrigger, DropdownMenu } from './style'


const MyBoxSettings = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <SettingsContainer>
      <SettingsTrigger onClick={() => {
        setOpenMenu(!openMenu)
      }}>
        <SettingsIcon />
      </SettingsTrigger>
      <DropdownMenu openMenu={openMenu}>
        <h4>Настройки коробки</h4>
        <ul>
          <li>
            <span>Кто чей санта?</span>
          </li>
          <li>
            <a href='/'>Удалить коробку</a>
          </li>
        </ul>
      </DropdownMenu>
    </SettingsContainer>
  )
}

export default MyBoxSettings