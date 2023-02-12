import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import BoxInfo from '../box-info/BoxInfo';
import {Table, Thead, Tbody, Td, Tr, Th} from './style';
import getBoxInfo from '../../../../API/boxInfo';

const DrawResult = () => {
	const [boxInfo, setBoxino] = useState({});
	const id = useParams();

	useEffect(() => {
		getBoxInfo(setBoxino, id);
	}, []);

	const tableData = boxInfo?.secret_santas?.map((item, idx) => (
		<Tr key={item.id}>
			<Td>{idx + 1}</Td>
			<Td>{item.name}</Td>
			<Td>{item.email}</Td>
			<Td>{item.phone}</Td>
			<Td>{item.ward_name}</Td>
			<Td>{item.your_secret_santa_name}</Td>
			<Td>{item.presentSent === '1' ? 'Да' : 'Нет'}</Td>
			<Td>{item.presentReceived === '1' ? 'Да' : 'Нет'}</Td>
		</Tr>
	));

	console.log(boxInfo);
	return (
		<>
			<BoxInfo />
			<Table>
				<Thead>
					<Tr>
						<Th>№</Th>
						<Th>Имя участника</Th>
						<Th>E-mail</Th>
						<Th>Телефон</Th>
						<Th>Подопечный</Th>
						<Th>Тайный Санта участника</Th>
						<Th>Подарок отправлен подопечному</Th>
						<Th>Подарок получен участником</Th>
					</Tr>
				</Thead>
				<Tbody>{tableData}</Tbody>
			</Table>
		</>
	);
};

export default DrawResult;
