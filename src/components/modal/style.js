import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalForm = styled.div`
  padding: ${({ padding }) => (padding || "85px 113px 90px 103px")};
  max-width: 841px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
  z-index: 10;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalCloseButton = styled.img`
  width: 33.5px;
  height: 33.5px;
  position: absolute;
  top: 5px;
  right: 5px;
`

export const ModalTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-bottom: 9px;
`

export const ModalSubTitle = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150.02%;
  text-align: center;
  color: #979797;
  margin-bottom: 14px;
`

export const ModalLink = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150.02%;
  color: #fd9797;
`
