import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, InputAdornment } from '@mui/material'
import { Send } from '@mui/icons-material'
import { ChatDiv, ChatInput, MessageDiv, MessageText } from './style'

const Chat = ({ receiverId, cardId }) => {
  const ref = useRef(null)
  const userId = parseInt(localStorage.getItem('userId'), 10)
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  async function getMessages() {
    await fetch('https://backsecsanta.alwaysdata.net/api/chat/get', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        first_chatter: localStorage.getItem('userId'),
        second_chatter: receiverId,
        card_id: cardId
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setMessages(response.message)
        }
      })
  }

  const sendMessage = async msg => {
    await fetch('https://backsecsanta.alwaysdata.net/api/chat/send', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        writer_id: localStorage.getItem('userId'),
        receiver_id: receiverId,
        card_id: cardId,
        text: msg
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          getMessages()
        }
      })
  }

  // setInterval(() => {
  //   getMessages()
  // }, 9000)

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight)
    }
  }, [])

  const handleSendMessage = () => {
    getMessages()
    sendMessage(value)
    setValue('')
  }

  const handlePressInput = ({ code }) => {
    if (code === 'Enter' && value !== '') {
      sendMessage(value)
      setValue('')
    }
  }

  useEffect(() => {
    handleScrollBottom()
  }, [messages, handleScrollBottom])

  return (
    <>
      <ChatDiv ref={ref}>
        {messages.map(message => (
          <MessageDiv key={message.id} props={message.writer_id === userId}>
            <MessageText>{message.text}</MessageText>
          </MessageDiv>
        ))}
      </ChatDiv>
      <ChatInput>
        <Input
          fullWidth
          onKeyPress={handlePressInput}
          placeholder="Введите сообщение"
          value={value}
          onChange={event => setValue(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {value && <Send onClick={() => handleSendMessage()} />}
            </InputAdornment>
          }
        />
      </ChatInput>
    </>
  )
}

Chat.defaultProps = {
  receiverId: null,
  cardId: null
}

Chat.propTypes = {
  receiverId: PropTypes.number,
  cardId: PropTypes.number
}

export default Chat
