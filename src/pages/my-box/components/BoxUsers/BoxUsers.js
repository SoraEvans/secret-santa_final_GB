import React, { useState } from 'react'
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom'
import DrawButton from '../draw-button/DrawButton'
import Modal from '../../../../components/modal/modal'
import NoBoxUsers from '../no-box-users/NoBoxUsers'
import { BoxUsersWrapper, UserBox, UserItem, UsersList } from './style'
import { ModalLink, ModalSubTitle, ModalTitle } from '../../../../components/modal/style'
import BoxInfo from '../box-info/BoxInfo'
import InviteUsers from '../invite-users/InviteUsers'
import { BtnAdd } from '../../../my-boxes/components/PrivateBox/style'
import getBoxInfo from "../../../../API/boxInfo"

const BoxUsers = ({ setActiveIdx, userData, setUserData, currentUserId, isAdmin, wardId }) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalUsers, setShowModalUsers] = useState(false)
  const { secret_santas, box, invitedUsers, secret_santas_ward } = userData

  const clickOnUser = (user) => {
    if (currentUserId === user.id || isAdmin) {
      localStorage.setItem('chosenUser', JSON.stringify(user))
      setActiveIdx(3)
    }
  }

  const getUserName = (user) => {
    if (!isAdmin && box?.isAnonym && !secret_santas_ward?.length) { // Проверка на организатора, анонимность внутри коробки и проведенную жеребьевку для отображения имен
      return currentUserId === user.id ? `${user?.name} (Вы)` : ''
    }
    if (!isAdmin && box?.isAnonym && secret_santas_ward?.length) {
      return (currentUserId === user?.id || wardId === user?.id) ? `${user?.name} ${currentUserId === user?.id ? '(Вы)' : ''}` : ''
    }
    return `${user?.name} ${currentUserId === user?.id ? '(Вы)' : ''}`
  }

  const { id } = useParams()
  const userItem = secret_santas?.map(user => (
    <UserBox outline={isAdmin || currentUserId === user.id} onClick={() => clickOnUser(user)}>
      {user?.image
        ? // Отображение либо аватарки (если она выбрана), либо первой буквы имени на карточке
        <UserItem key={user.id} outline={isAdmin || currentUserId === user.id}>
          <img src={user.image} alt="avatar" style={{ height: 110, cursor: 'pointer' }} />
        </UserItem>
        : <UserItem
          outline={isAdmin || currentUserId === user.id}
          key={user.id}
        >
          {user.name[0]?.toUpperCase()}
        </UserItem>
      }
      {/* eslint-disable-next-line no-nested-ternary */}
      {getUserName(user)}
    </UserBox>
  ))

  const invitedItem = invitedUsers?.map(user => (
    <UserBox>
      <UserItem
        style={{
          border: '4px solid #D6CCCA',
          color: '#D6CCCA',
          cursor: 'default'
        }}
      >
        {user.name[0]?.toUpperCase()}
      </UserItem>
      {!box?.isAnonym ? `${user.name} (Ждем ответа)` : '(Ждем ответа)'}
    </UserBox>
  ))

  const draw = async () => { // ЖЕРЕБЬЕВКА (логика на бэке)
    await fetch('https://backsecsanta.alwaysdata.net/api/box/draw', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id
      })
    })
      .then(() => {
        setShowModal(prev => !prev)
        getBoxInfo(setUserData, id)
      })
  }

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
        setShowModal(prev => !prev)
        getBoxInfo(setUserData, id)
      })
  }

  return (
    <BoxUsersWrapper>
      {userData && box && box.title
        ? (<BoxInfo
          title={box.title}
          cover={box.cover}
          userCount={secret_santas.length}
          isAdmin={isAdmin}
        />)
        : (
          <p>Моя коробка</p>
        )}
      {userData // проверка на наличие участников в коробке
        ? (
          <UsersList>
            {userItem}
            {invitedItem}
            {secret_santas_ward?.length || !isAdmin
              ? null
              : (
                <BtnAdd
                  type="submit"
                  onClick={() => setShowModalUsers(prevState => !prevState)}
                >
                  Добавить участника
                </BtnAdd>
              )}
          </UsersList>
        )
        : (
          <NoBoxUsers />
        )}
      {secret_santas_ward?.length || !isAdmin
        ? null
        : (
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
          <ModalLink onClick={() => {
            setShowModal(false)
            setActiveIdx(4)
          }}>Кто чей Санта.</ModalLink>
          <br /> Или <ModalLink onClick={reverseDraw}>сбросить</ModalLink> результаты
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
  setActiveIdx: () => {
  },
  setUserData: () => {
  },
  currentUserId: () => {
  }
}

BoxUsers.propTypes = {
  userData: PropTypes.object,
  setActiveIdx: PropTypes.func,
  setUserData: PropTypes.func,
  currentUserId: PropTypes.number,
  isAdmin: PropTypes.bool,
  wardId: PropTypes.number
}