import API_URL from '../constants/base-api-url';

const getNotification = async (setNotification, id) => {
	await fetch(`${API_URL}/user/notifications/${id}`, {
		method: 'GET',
		header: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'success') {
				setNotification(response.notifications);
			}
		});
};

export default getNotification;
