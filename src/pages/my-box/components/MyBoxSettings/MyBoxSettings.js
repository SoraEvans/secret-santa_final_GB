import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'

import { useNavigate } from "react-router-dom";
import {
  SettingsContainer,
  SettingsTrigger,
  DropdownMenu,
  ModalButtons,
  CancelButton,
  DeleteButton
} from './style'
import Modal from "../../../../components/modal/modal";
import { ModalTitle } from "../../../../components/modal/style";



const MyBoxSettings = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  const openModal = () => {
    setShowModal(prev => !prev);
  }
  const deleteBox=() => {
    alert("коробка удалена"); // тут удаление коробки
    navigate(`/boxes`)
  }


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
            <button type="button" onClick={openModal}>Удалить коробку</button>
          </li>
        </ul>
      </DropdownMenu>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalTitle>Вы уверены, что хотите удалить свою карточку участника?</ModalTitle>
        <ModalButtons>
          <CancelButton onClick={() => setShowModal(prev => !prev)}>Отмена</CancelButton>
          <DeleteButton onClick={deleteBox}>Удалить</DeleteButton>
        </ModalButtons>
      </Modal>
    </SettingsContainer>
  )
}

export default MyBoxSettings