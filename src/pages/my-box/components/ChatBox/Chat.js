import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, InputAdornment, SvgIcon } from '@mui/material'
// import { Send } from '@mui/icons-material'
import { ChatDiv, ChatInput, MessageDiv, MessageText } from './style'
// import SendIcon from '../../../../assets/images/chat-send-icon.svg'


const Chat = ({ receiverId, cardId }) => {
  const ref = useRef(null)
  const userId = parseInt(localStorage.getItem('userId'), 10)
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  const getMessages = async () => {
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

  const intervalMessage = () => {
    setTimeout(function go() {
      getMessages()
      setTimeout(go, 9000);
    }, 9000);
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

  useEffect(() => {
    getMessages()
    intervalMessage()
  }, [])

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight)
    }
  }, [])

  const handleSendMessage = () => {
    getMessages()
      .then(() => sendMessage(value))
    setValue('')
  }

  const handlePressInput = ({ code }) => {
    if (code === 'Enter' && value !== '') {
      sendMessage(value)
        .then(() => setValue(''))
    }
  }

  useEffect(() => {
    handleScrollBottom()
  }, [messages, handleScrollBottom])

  return (

    <>
      <ChatDiv ref={ref}>
      {messages.slice(0).reverse().map(message => (
        <MessageDiv key={message.id} props={message.writer_id === userId}>
          <MessageText>{message.text}</MessageText>
        </MessageDiv>
      ))}

    </ChatDiv>
      <ChatInput>
        <Input
          disableUnderline
          fullWidth
          onKeyPress={handlePressInput}
          placeholder="Введите сообщение"
          value={value}
          onChange={event => setValue(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {value && <SvgIcon sx={{ fontSize: 33 }} inheritViewBox onClick={() => handleSendMessage()}>
                <rect width="33" height="33" rx="16.5" fill="#FF5539" />
                <path d="M12.6898 10.0154C12.173 10.2082 11.8039 10.6594 11.7013 11.2172C11.6152 11.6684 11.6439 11.7381 12.8785 14.2113L14.0187 16.5L12.8785 18.7846C12.0212 20.5031 11.73 21.1307 11.6972 21.3111C11.5865 21.9387 11.9556 22.6318 12.5626 22.9313C12.7636 23.0297 12.8333 23.042 13.2066 23.042H13.6291L18.8667 20.4211C21.7501 18.9814 24.1783 17.7469 24.2644 17.6813C24.5843 17.427 24.8263 16.9225 24.8263 16.5C24.8263 16.0775 24.5843 15.573 24.2644 15.3188C24.1783 15.2531 21.7542 14.0186 18.8749 12.5789L13.6373 9.96211L13.2763 9.94981C12.9892 9.9375 12.8662 9.95391 12.6898 10.0154ZM17.8947 13.5469L22.4679 15.8396H18.8052L15.1466 15.8438L14.0515 13.6535C12.9605 11.4715 12.9564 11.4633 13.0261 11.3566C13.0753 11.2828 13.1328 11.25 13.2107 11.2541C13.2722 11.2541 15.3435 12.2672 17.8947 13.5469ZM17.8947 19.4531C15.3435 20.7328 13.2722 21.7459 13.2107 21.7459C13.1328 21.75 13.0753 21.7172 13.0261 21.6434C12.9564 21.5367 12.9605 21.5285 14.0515 19.3465L15.1466 17.1563L18.8052 17.1604H22.4679L17.8947 19.4531Z" fill="white" />
                <path d="M7.51761 13.2639C7.46019 13.2885 7.36996 13.3459 7.32074 13.3951C7.00082 13.6904 7.04183 14.1539 7.40687 14.4246C7.51761 14.5067 7.57504 14.5108 9.01468 14.5231C10.442 14.5354 10.5159 14.5313 10.6717 14.4533C11.1311 14.2154 11.1352 13.5346 10.6717 13.3008C10.5241 13.2229 10.4297 13.2188 9.068 13.2229C8.20668 13.2229 7.57914 13.2393 7.51761 13.2639Z" fill="white" />
                <path d="M8.35842 15.9012C7.97287 16.0693 7.84983 16.5902 8.12053 16.9143C8.3133 17.1398 8.39944 17.1562 9.50686 17.1562C10.4297 17.1562 10.5281 17.148 10.6717 17.0742C11.1352 16.8404 11.1352 16.1596 10.6717 15.9258C10.5281 15.852 10.4297 15.8438 9.49865 15.8438C8.74397 15.8479 8.44865 15.8602 8.35842 15.9012Z" fill="white" />
                <path d="M9.18273 18.5631C8.73566 18.8133 8.74796 19.4695 9.20324 19.6992C9.33859 19.7689 9.44523 19.7812 9.93742 19.7812C10.4296 19.7812 10.5362 19.7689 10.6716 19.6992C11.1351 19.4654 11.1351 18.7846 10.6716 18.5508C10.5362 18.4811 10.4337 18.4688 9.92921 18.4688C9.40011 18.4688 9.32628 18.477 9.18273 18.5631Z" fill="white" />
              </SvgIcon>}
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
