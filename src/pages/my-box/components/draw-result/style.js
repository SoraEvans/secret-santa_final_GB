import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	max-width: 1244px;
	margin-bottom: 20px;
	border-collapse: collapse;
`;
export const Thead = styled.thead`
	border-radius: 4px 4px 0 0;
`;
export const Th = styled.th`
	padding: 16px;
	background: #f2e7e7;
	border-right: 1px solid #dddddd;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;

export const Tbody = styled.tbody`
	background: rgba(246, 243, 243, 0.5);
	border-radius: 4px;
`;

export const Tr = styled.tr`
	border-right: 1px solid #dbdbdb;
	padding: 5px;
`;
export const Td = styled.td`
	padding: 16px;
	border-right: 1px solid #dbdbdb;
	text-align: center;
`;
