import styled from 'styled-components';
import {StyledIcon} from '../../pages/my-boxes/components/PublicBox/style';

export const NotificationBox = styled.div`
	background-color: #f2e7e7bf;
	min-height: 100px;
	width: 100%;
	min-width: 481px;
	padding: 25px;
	border-radius: 0 0 4px 4px;

	span {
		font-size: 16px;
		line-height: 18.7px;
		color: #665959;

		div {
			font-weight: bold;
		}
	}
`;

export const NotificationIcon = styled(StyledIcon)`
	width: 100%;
	max-width: 77px;
	height: 77px;
	margin-right: 19px;
`;
