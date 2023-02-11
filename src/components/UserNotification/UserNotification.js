import React, {useState, useEffect} from 'react';
import getNotification from '../../API/getNotification';
import {NotificationBox, NotificationIcon} from './style';
import noticeIcon from '../../assets/images/notice.svg';

const UserNotification = () => {
	const [notification, setNotification] = useState({});
	const id = localStorage.getItem('userId');
	useEffect(() => {
		getNotification(setNotification, id);
	}, []);

	const noticeData = notification.notifications?.map((item) => (
		<div style={{display: 'flex', margin: '0 0 20px'}} key={item.created_at}>
			<NotificationIcon>
				<img src={noticeIcon} alt="Обложка" />
			</NotificationIcon>
			<span>
				<div>{item.box_title}</div>
				{item.text}
			</span>
		</div>
	));

	return <NotificationBox>{noticeData}</NotificationBox>;
};

export default UserNotification;
