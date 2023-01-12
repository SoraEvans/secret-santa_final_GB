import React from 'react'
import PropTypes from 'prop-types'
import { NotificationBox, NotifiactioList } from './style'

const UserNotification = ({ active }) => (
  <NotificationBox active={active}>
    <NotifiactioList>
      <span>У вас нет новых уведомлений</span>
    </NotifiactioList>
  </NotificationBox>
)

UserNotification.defaultProps = {
  active: false
}

UserNotification.propTypes = {
  active: PropTypes.bool
}

export default UserNotification
