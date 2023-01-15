import styled from 'styled-components'

export const NotificationBox = styled.div`
  position: absolute;
  top: 90px;
  right: 200px;
  background-color: #f2eeee;
  min-height:100px;
  width: 100%;
  max-width: 400px;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transform: translateY(${({ active }) => (active ? "0" : "-15%")});
  padding: 20px;
  text-align: center;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  span {
    font-size: 14px;
    line-height: 17px;
    color: #979797;
  }


`

export const NotificationList = styled.div``
