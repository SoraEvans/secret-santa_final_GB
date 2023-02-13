import React from 'react'
import PropTypes from "prop-types";
import { NotificationBox, NotificationIcon, NotificationItem } from './style'
import noticeIcon from '../../assets/images/notice.svg'
import closeIcon from '../../assets/images/close_btn.svg'

// eslint-disable-next-line react/prop-types
const UserNotification = ({ delNotification, notification }) => {
  const getMessage = (title) => {
    switch (title) {
      case 'Жеребьевка проведена!':
        return 'Вам назначен подопечный. Перейдите на вкладку “Мой подопечный”, чтобы узнать, кто это.'
      case 'Ваш подопечный обновил пожелания!':
        return 'Проверьте “Досье подопечного” на вкладке “Мой подопечный”!'
      case 'Ваш подопечный добавил контакты!':
        return 'Проверьте “Досье подопечного” на вкладке “Мой подопечный”!'
      case 'Ваш тайный санта отправил подарок!':
        return 'Проверьте чат с Сантой.'
      case 'Ваш подопечный получил ваш подарок!':
        return 'Проверьте чат с подопечным.'
      default:
        return 'Ошибка'
    }
  }

  const noticeData = notification.length ? notification?.map((item) => (
    <NotificationItem key={item.created_at}>
      <NotificationIcon>
        <img src={noticeIcon} alt="Обложка" />
      </NotificationIcon>
      <span style={{ flex: 1 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>{item.text}</div>
          <img src={closeIcon} alt="close" style={{ cursor: 'pointer' }} onClick={() => delNotification(item.id)} />
        </div>
        <div>Коробка: {item.box_title}</div>
        {getMessage(item.text)}
			</span>
    </NotificationItem>
  )) : <div
    style={{ width: 410, textAlign: 'center', fontFamily: 'Raleway', color: '#665959', marginTop: 15 }}
  >
    Нет уведомлений
  </div>;

  return <NotificationBox>{noticeData}</NotificationBox>
};

UserNotification.propTypes = {
  notification: PropTypes.object
}

export default UserNotification;
