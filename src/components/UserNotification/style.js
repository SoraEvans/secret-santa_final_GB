import styled from 'styled-components';
import { StyledIcon } from '../../pages/my-boxes/components/PublicBox/style';

export const NotificationBox = styled.div`
  background-color: #f2e7e7bf;
  min-height: 100px;
  width: 100%;
  max-width: 481px;
  padding: 21px;
  border-radius: 0 0 4px 4px;

  span {
    font-size: 14px;
    line-height: 18.7px;
    color: #665959;

    div:first-child {
      font-size: 16px;
      font-weight: bold;
    }

    div:nth-child(2) {
      color: rgba(102, 89, 89, 0.44);
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

export const NotificationItem = styled.div`
  display: flex;
  margin: 0 0 12px;
  border-bottom: 1px solid #E2E2E2;
  padding: 0 0 12px;

  :last-child {
    border-bottom: none;
    margin: 0;
    padding: 0;
  }
`