import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 1287px;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-radius: 4px;
`

export const Thead = styled.thead``

export const Th = styled.th`
  padding: 16px;
  background: #f2e7e7;
  border-right: 1px solid #dddddd;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;

  :last-child {
    border-right: none;
  }
`

export const Tbody = styled.tbody`
  background: rgba(246, 243, 243, 0.5);
  border-radius: 4px;
`

export const Tr = styled.tr`
  border-bottom: 1px solid #dbdbdb;
  padding: 5px;

  :last-child {
    border-bottom: none;
  }
`

export const Td = styled.td`
  padding: 16px;
  font-size: 15px;
  border-right: 1px solid #dbdbdb;
  text-align: center;

  :nth-child(8) {
    border-right: none;
  }
`
