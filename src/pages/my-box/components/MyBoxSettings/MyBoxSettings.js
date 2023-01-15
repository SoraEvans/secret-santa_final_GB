import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { SettingsTrigger, DropdownMenu } from './style'

const MyBoxSettings = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <SettingsTrigger
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        <SettingsIcon />
      </SettingsTrigger>
      <DropdownMenu openMenu={openMenu}>
        <div>
          <h4>Настройки коробки</h4>
          <ul>
            <li>
              <span>Кто чей санта?</span>
            </li>
            <li>
              <a href="/">Удалить коробку</a>
            </li>
          </ul>
        </div>
      </DropdownMenu>
    </>
  )
}

export default MyBoxSettings
