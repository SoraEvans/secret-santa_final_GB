import React, { useState, useEffect } from 'react'
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

// eslint-disable-next-line react/prop-types
const BoxUsers = ({ setActiveIdx }) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalUsers, setShowModalUsers] = useState(false)
  const [drawDone, setDrawDone] = useState(false)
  const [userData, setUserData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://backsecsanta.alwaysdata.net/api/box/info',
          {
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
              box_id: id,
              user_id: localStorage.getItem('userId')
            })
          }
        )
        const data = await response.json()

        if (data.status === 'success') {
          setUserData(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const userItem =
    userData.secret_santas &&
    userData.secret_santas.map(user => (
      <UserBox onClick={() => setActiveIdx(3)}>
        <UserItem key={user.id}>{user.name[0]}</UserItem>
        {user.name}
      </UserBox>
    ))

  const draw = () => {
    setDrawDone(true)
    setShowModal(prev => !prev)
  }

  return (
    <BoxUsersWrapper>
      {userData && userData.box && userData.box.title ? (
        <BoxInfo
          title={userData.box.title}
          cover={userData.box.cover}
          userCount={userData.secret_santas.length}
        />
      ) : (
        <p>Моя коробка</p>
      )}
      {userData ? (
        <UsersList>
          {userItem}
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
            userData.secret_santas && userData.secret_santas.length
              ? userData.secret_santas.length
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
        <InviteUsers />
      </Modal>
    </BoxUsersWrapper>
  )
}

export default BoxUsers
