import React, { useState } from 'react';
import DB from '../../constants/db'
import { BoxUsersWrapper, UserItem, UsersList } from './style';
import DrawButton from "../draw-button/DrawButton";
import Modal from "../modal/modal";

const BoxUsers = () => {
  const [showModal, setShowModal] = useState(false);
  const [drawDone, setDrawDone] = useState(false);
  const userItem = DB.users.map((user) => <UserItem key={user.id}>{user.name}</UserItem>)
  const draw = () => {
    setDrawDone(true);
    setShowModal(prev => !prev);
  }


  return (
    <BoxUsersWrapper>
      <h2>Участники</h2>
      <UsersList>
        {userItem}
        {drawDone
          ? null
          : <UserItem style={{ background: 'rgba(163,163,163,0.47)' }}>+ Добавить участника</UserItem>
        }
      </UsersList>
      {drawDone
        ? null
        : <DrawButton onClick={draw} />
      }
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </BoxUsersWrapper>
  )
}

export default BoxUsers;