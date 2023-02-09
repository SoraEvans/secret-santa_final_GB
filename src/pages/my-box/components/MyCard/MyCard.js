import React, { useEffect, useState } from 'react'
import { InputAdornment } from '@mui/material'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { CarouselButton } from '../../../home/components/carousel/style'
import Chat from '../ChatBox/Chat'
import {
  ButtonBlock,
  CardForm,
  CardFormLabel,
  CardInfo,
  ChatBlock,
  ChatSubTitle,
  ChatTitle,
  GiftButton,
  Input,
  MyCardPage,
  Price,
  PriceAmount,
  StyledHr,
  TextBlock,
  UserInfo,
  UserInfoBlock,
  UserName
} from './style'
import { UserItem } from '../BoxUsers/style'
import { ChatWrapper } from '../ChatBox/style'

const MyCard = ({ setActiveIdx, santaId, id }) => {
  const [text, setText] = useState('')
  const [formValues, setFormValues] = useState({})
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    setFormValues({
      wishlist: '',
      address: '',
      phone: ''
    })
  }, [])

  console.log('santaId, id', santaId, id, userId)

  const cardCreated = true
  const price = 1000
  const {
    handleSubmit
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      wishlist: '',
      address: '',
      phone: ''
    }
  })


  const onUpdateInfo = async data => {

    await fetch('https://backsecsanta.alwaysdata.net/api/card/addAdditionalInfo', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        card_id: id,
        phone: formValues.phone,
        wishlist: formValues.wishlist,
        address: formValues.address,

      })
    })

    console.log(data)
  }

  const onPresentReceived = async data => {

    await fetch('https://backsecsanta.alwaysdata.net/api/card/addAdditionalInfo', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        card_id: id,
        presentReceived: true,

      })
    })

    console.log(data)
  }

  return (
    <div>
      {cardCreated ? (
        <MyCardPage>
          <CardInfo>
            <UserInfoBlock>
              <UserItem style={{
                flex: '1 0 auto',
                aspectRatio: '1 / 1',
                fontSize: '48px',
                maxWidth: '70px',
                maxHeight: '70px',
                cursor: 'default'
              }}>
                И
              </UserItem>

              <UserInfo>
                <UserName>Имя участника</UserName>
                <Price>
                  Стоимость подарка:
                  <PriceAmount>до {price} руб.</PriceAmount>
                </Price>
              </UserInfo>
            </UserInfoBlock>
            <CardForm onSubmit={handleSubmit(onUpdateInfo)}>
              <CardFormLabel>
                <div>Вишлист</div>
                <GiftButton type="button" onClick={onPresentReceived}>Я получил подарок!</GiftButton>
              </CardFormLabel>
              <Input
                value={formValues.wishlist}

                onChange={(e) => {
                  setFormValues(prevState => ({ ...prevState, wishlist: e.target.value }))
                  setText(e.target.value)
                }}
                fullWidth
                placeholder="Это ваш вишлист. Здесь можно оставить для своего Санты пожелания о том, какой подарок вы хотели бы получить"
                multiline
                InputProps={{
                  inputProps: { maxLength: 1000 },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{
                        alignSelf: 'end',
                        height: '20px'
                      }}
                    >
                      {text.length}/1000
                    </InputAdornment>
                  )
                }}
                rows={8}
              />
              <CardFormLabel>Куда присылать подарок?</CardFormLabel>
              <Input fullWidth
                     value={formValues.address}

                     onChange={(e) => {
                       setFormValues(prevState => ({ ...prevState, address: e.target.value }))

                     }}
              />
              <CardFormLabel>Номер телефона</CardFormLabel>
              <Input fullWidth
                     value={formValues.phone}

                     onChange={(e) => {
                       setFormValues(prevState => ({ ...prevState, phone: e.target.value }))

                     }}
              />
              <CarouselButton type="submit"
                              onClick={onUpdateInfo}
                              style={{
                                margin: '22px 0',
                                width: '143px',
                                height: '44px',
                                fontWeight: '500',
                                fontSize: '15px'
                              }}>
                Сохранить
              </CarouselButton>
            </CardForm>
          </CardInfo>
          <StyledHr width="1" size="100%" />
          <ChatBlock>
            <div>
              <ChatTitle>Чат с Сантой</ChatTitle>
              <ChatSubTitle>
                Это анонимный чат с вашим Сантой.
                <br /> Здесь вы можете обсудить желаемый подарок, обменяться
                контактами или просто поболтать
              </ChatSubTitle>
            </div>
            <ChatWrapper>
              <Chat receiverId={santaId} cardId={id} />
            </ChatWrapper>
          </ChatBlock>
        </MyCardPage>
      ) : (
        <div>
          <TextBlock>
            <ButtonBlock>
              Упс! У вас еще нет карточки участника. Создайте свою карточку
              участника, если вы хотите принимать участие в игре.
            </ButtonBlock>
            <CarouselButton onClick={() => setActiveIdx(3)}>
              Создать карточку
            </CarouselButton>
          </TextBlock>
        </div>
      )}
    </div>
  )
}

export default MyCard

MyCard.defaultProps = {
  santaId: null,
  setActiveIdx: () => {
  }
}

MyCard.propTypes = {
  santaId: PropTypes.number,
  setActiveIdx: PropTypes.func,
  id: PropTypes.number
}