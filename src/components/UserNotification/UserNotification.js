import React from 'react'
import PropTypes from 'prop-types'
import { NotificationBox, NotificationList } from './style'

const UserNotification = ({ active }) => (
  <NotificationBox active={active}>
    <NotificationList>
      <span>У вас нет новых уведомлений</span>
    </NotificationList>
  </NotificationBox>
)

UserNotification.defaultProps = {
  active: false
}

UserNotification.propTypes = {
  active: PropTypes.bool
}

export default UserNotification
