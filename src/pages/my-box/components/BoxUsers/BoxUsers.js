import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DrawButton from '../draw-button/DrawButton'
import Modal from '../../../../components/modal/modal'
import NoBoxUsers from '../no-box-users/NoBoxUsers'
import {
  BoxUsersWrapper,
  UserItem,
  UsersList,
  UserCover,
  AddUsersBtn
} from './style'
import {
  ModalLink,
  ModalSubTitle,
  ModalTitle
} from '../../../../components/modal/style'

// eslint-disable-next-line react/prop-types
const BoxUsers = ({ setActiveIdx }) => {
  const [showModal, setShowModal] = useState(false)
  const [drawDone, setDrawDone] = useState(false)
  const [userData, setUserData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    fetch('https://backsecsanta.alwaysdata.net/api/box/info', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id,
        user_id: localStorage.getItem('userId')
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setUserData(response)
        }
      })
  }, [])

  const userItem =
    userData.secret_santas &&
    userData.secret_santas.map(user => (
      <UserItem key={user.id}>
        <UserCover>{user.name.charAt(0)}</UserCover>
        <span>{user.name}</span>
      </UserItem>
    ))

  const draw = () => {
    setDrawDone(true)
    setShowModal(prev => !prev)
  }

  return (
    <BoxUsersWrapper>
      <h2>Участники</h2>
      {userData ? (
        <UsersList>
          {userItem}
          {drawDone ? null : (
            <AddUsersBtn type="submit" onClick={() => setActiveIdx(3)}>
              Добавить участников
            </AddUsersBtn>
          )}
        </UsersList>
      ) : (
        <NoBoxUsers />
      )}
      {drawDone ? null : <DrawButton onClick={draw} />}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalTitle>Жеребьевка проведена!</ModalTitle>
        <ModalSubTitle>
          Проведена круговая жеребьевка, которая исключает ситуации,
          <br /> когда два участника дарят подарки друг другу.
          <br /> Теперь вы можете посмотреть{' '}
          <ModalLink to="/boxes">Кто чей Санта.</ModalLink>
          <br /> Или <ModalLink to="/boxes">сбросить</ModalLink> результаты
          жеребьевки.
        </ModalSubTitle>
      </Modal>
    </BoxUsersWrapper>
  )
}

export default BoxUsers
