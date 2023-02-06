import React, { useState } from 'react'
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom'
import DrawButton from '../draw-button/DrawButton'
import Modal from '../../../../components/modal/modal'
import NoBoxUsers from '../no-box-users/NoBoxUsers'
import { BoxUsersWrapper, UserItem, UsersList, UserBox } from './style'
import {
  ModalLink,
  ModalSubTitle,
  ModalTitle
} from '../../../../components/modal/style'
import BoxInfo from '../box-info/BoxInfo'
import InviteUsers from '../invite-users/InviteUsers'
import { BtnAdd } from '../../../my-boxes/components/PrivateBox/style'

const BoxUsers = ({ setActiveIdx, userData, setUserData }) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalUsers, setShowModalUsers] = useState(false)
  const [drawDone, setDrawDone] = useState(false)
  const { secret_santas, box, invitedUsers } = userData

  const clickOnUser = (user) => {
    localStorage.setItem('chosenUser', JSON.stringify(user))
    setActiveIdx(3)
  }

  const { id } = useParams()
  const userItem = secret_santas?.map(user => (
    <UserBox onClick={() => clickOnUser(user)}>
      <UserItem key={user.id}>{user.name[0]}</UserItem>
      {user.name}
    </UserBox>
  ))

  const invitedItem = invitedUsers?.map(user => (
    <UserBox onClick={() => clickOnUser(user)}>
      <UserItem>{user.name[0]?.toUpperCase()}</UserItem>
      {user.name}
    </UserBox>
  ))

  const draw = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/box/draw', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id
      })
    }).then(() => {
      setDrawDone(true)
      setShowModal(prev => !prev)
    })
  }

  return (
    <BoxUsersWrapper>
      {userData && box && box.title ? (
        <BoxInfo
          title={box.title}
          cover={box.cover}
          userCount={secret_santas.length}
        />
      ) : (
        <p>Моя коробка</p>
      )}
      {userData ? (
        <UsersList>
          {userItem}
          {invitedItem}
          {drawDone ? null : (
            <BtnAdd
              type="submit"
              onClick={() => setShowModalUsers(prevState => !prevState)}
            >
              Добавить участника
            </BtnAdd>
          )}
        </UsersList>
      ) : (
        <NoBoxUsers />
      )}
      {drawDone ? null : (
        <DrawButton
          onClick={draw}
          userCount={
            secret_santas && secret_santas.length
              ? secret_santas.length
              : 0
          }
        />
      )}
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
      <Modal
        padding="85px 60px 90px 103px"
        showModal={showModalUsers}
        setShowModal={setShowModalUsers}
      >
        <InviteUsers id={id} setUserData={setUserData} />
      </Modal>
    </BoxUsersWrapper>
  )
}

export default BoxUsers

BoxUsers.defaultProps = {
  userData: {},
  setActiveIdx: () => {},
  setUserData: () => {}
}

BoxUsers.propTypes = {
  userData: PropTypes.object,
  setActiveIdx: PropTypes.func,
  setUserData: PropTypes.func
}