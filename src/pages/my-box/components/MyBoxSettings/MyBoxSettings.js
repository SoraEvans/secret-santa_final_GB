import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Popover } from '@mui/material';
import {
  SettingsContainer,
  SettingsTrigger,
  ModalButtons,
  CancelButton,
  DeleteButton,
  DropdownMenu,
} from './style';
import boxImg from '../../../../assets/images/box.svg';
import Modal from '../../../../components/modal/modal';
import { ModalTitle } from '../../../../components/modal/style';
import SettingsIcon from './components/SettingsIcon';
import getBoxInfo from "../../../../API/boxInfo";

// eslint-disable-next-line react/prop-types
const MyBoxSettings = ({ setActiveIdx, isAdmin, currentUserId, card, setUserData, wardId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const { id } = useParams();

  const deleteBox = async (id) => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/box/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    openModal();
    navigate(`/boxes`);
  };

  const reverseDraw = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/box/reverseDraw', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id
      })
    })
      .then(() => {
        getBoxInfo(setUserData, id)
      })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SettingsContainer>
      <SettingsTrigger
        onClick={handleClick}
        active={anchorEl}
      >
        <SettingsIcon active={anchorEl} />
      </SettingsTrigger>
      <Popover
        anchorEl={anchorEl}
        onClose={handleClose}
        open={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <DropdownMenu>
          <p onClick={() => {
            if (card) {
              localStorage.setItem('chosenUser', JSON.stringify(card))
            } else if (!localStorage.getItem('chosenUser')) {
              localStorage.setItem('chosenUser', JSON.stringify({ email: '', name: '', id: currentUserId }))
            }
            setActiveIdx(3)
          }}
          >
            Настройки карточки
          </p>
          {isAdmin && <p
            onClick={() => {
              navigate(`/box/${id}/settings`)
            }}
          >Настройки коробки</p>}
          <p onClick={() => setActiveIdx(4)}>Кто чей санта?</p>
          {wardId && <p onClick={reverseDraw}>Отменить жеребьевку</p>}
          <p onClick={openModal}>Удалить коробку</p>
        </DropdownMenu>
      </Popover>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalTitle>Вы уверены, что хотите удалить текущую коробку?</ModalTitle>
        <ModalButtons>
          <CancelButton onClick={() => setShowModal(prev => !prev)}>
            Отмена
          </CancelButton>
          <DeleteButton onClick={() => deleteBox(id)}>Удалить</DeleteButton>
        </ModalButtons>
        <img src={boxImg} alt="box" />
      </Modal>
    </SettingsContainer>
  )
}

export default MyBoxSettings;
