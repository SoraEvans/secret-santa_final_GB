import styled from 'styled-components'

export const NotificationBox = styled.div`
  position: absolute;
  top: 90px;
  right: 166px;
  background-color: #f2eeee;
  min-height: ${({ active }) => (active ? '100px' : '0')};
  width: 100%;
  max-width: 400px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  padding: 20px;
  text-align: center;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 14px;
    line-height: 17px;
    color: #979797;
  }
`

export const NotifiactioList = styled.div``
