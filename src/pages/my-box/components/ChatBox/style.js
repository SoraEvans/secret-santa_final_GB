import styled from 'styled-components'


export const ChatWrapper = styled.div`
background-color: #f6f3f3;
  border: 1px solid #d6ccca;
  border-radius: 3px;
  width: 100%;
  height: 450px;
`
export const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 100%;
  overflow-y: auto;
  padding: 20px 20px 20px 34px;
`

export const ChatInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  margin: 16px 34px 22px;
  min-height: 49px;
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
