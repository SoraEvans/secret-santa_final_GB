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
  width: 750px;
  height: 522px;
  background-color: #f5f5f5;
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`
export const ModalSubTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150.02%;
  text-align: center;
  color: #979797;
  max-width: 478px;
`
export const ModalLink = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150.02%;
  color: #fd9797;
`
