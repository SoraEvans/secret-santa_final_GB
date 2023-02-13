import API_URL from '../constants/base-api-url';
import getNotification from "./getNotification";

const deleteNotification = async (setNotification, userId, notificationId) => {
  await fetch(`${API_URL}/notification/delete/${notificationId}`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'success') {
        getNotification(setNotification, userId)
      }
    });
};

export default deleteNotification;
