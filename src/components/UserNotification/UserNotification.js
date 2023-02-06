import React from 'react'
import { NotificationBox, NotificationIcon } from './style'
import noticeIcon from '../../assets/images/notice.svg'

const UserNotification = () => (
  <NotificationBox>
    <div style={{ display: 'flex', margin: '0 0 20px' }}>
      <NotificationIcon>
        <img src={noticeIcon} alt="Обложка" />
      </NotificationIcon>
      <span>
        <div>Жеребьевка проведена!</div>
        Вам назначен подопечный. Перейдите на вкладку “Мой подопечный”, чтобы узнать, кто это.
      </span>
    </div>
    <div style={{ display: 'flex', margin: '20px 0 0' }}>
      <NotificationIcon>
        <img src={noticeIcon} alt="Обложка" />
      </NotificationIcon>
      <span>
        <div>Ваш подопечный добавил пожелания!</div>
        Проверьте чат с подопечным.
      </span>
    </div>
  </NotificationBox>
)

export default UserNotification
