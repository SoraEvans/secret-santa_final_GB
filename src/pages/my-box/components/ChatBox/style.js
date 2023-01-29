import styled from 'styled-components'

export const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 435px;
  width: 100%;
  height: 399px;
  background-color: #f6f3f3;
  overflow-y: auto;
  padding: 20px;
  border: 1px solid #d6ccca;
  border-radius: 3px;
`

export const ChatInput = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f3f3;
  max-width: 434px;
  width: 100%;
`

export const MessageDiv = styled.div`
  max-width: 70%;
  width: fit-content;
  align-self: ${({ props }) => (props ? 'flex-end' : 'flex-start')};
  background: ${({ props }) => (props ? '#EEE5E3' : '#FCE4E1')};
  border-radius: ${({ props }) =>
    props ? '4px 4px 0px 4px' : '4px 4px 4px 0px'};
  padding: 10px;
  margin-bottom: 20px;
  position: relative;

  &:before {
    top: 100%;
    ${({ props }) => (props ? 'right: 0' : 'left: auto;')};
    border-top: 100px solid transparent;
    ${({ props }) =>
      props
        ? 'border-left: 100px solid transparent;'
        : 'border-right: 100px solid transparent;'};
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: ${({ props }) => (props ? '#EEE5E3' : '#FCE4E1')};
    border-width: 8px;
    margin-left: -10px;
  }
`

export const MessageText = styled.h3`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 100.02%;
  color: #8b8b8b;
`
