import React from 'react'
import { InputAdornment } from '@mui/material'
import { CarouselButton } from '../../../home/components/carousel/style'
import Chat from '../ChatBox/Chat'
import {
  ButtonBlock,
  CardForm,
  CardFormLabel,
  CardInfo,
  ChatBlock,
  ChatTitle,
  ChatSubTitle,
  Input,
  MyCardPage,
  Price,
  PriceAmount,
  TextBlock,
  UserInfo,
  UserInfoBlock,
  UserName, StyledHr
} from './style'

import { UserItem } from "../BoxUsers/style";
import { ChatWrapper } from "../ChatBox/style";

// eslint-disable-next-line react/prop-types
const MyCard = ({ setActiveIdx }) => {
  const [text, setText] = React.useState('')

  const cardCreated = true
  const price = 1000

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
                maxWidth:'70px',
                maxHeight:'70px',
                cursor: 'default' }}>
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
            <CardForm>
              <CardFormLabel>
                <div>Вишлист</div>
                <a href="/">Я получил подарок!</a>
              </CardFormLabel>
              <Input
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
                onChange={event => setText(event.target.value)}
                rows={8}
              />
              <CardFormLabel>Куда присылать подарок?</CardFormLabel>
              <Input fullWidth />
              <CardFormLabel>Номер телефона</CardFormLabel>
              <Input fullWidth />
              <CarouselButton type="submit" style={{ margin: '22px 0', width: '143px',  height: '44px', fontWeight: '500', fontSize: '15px' }}>
                Сохранить
              </CarouselButton>
            </CardForm>
          </CardInfo>
          <StyledHr width="1" size="100%"/>
          <ChatBlock>
            <div>
              <ChatTitle>Чат с Сантой</ChatTitle>
              <ChatSubTitle>
                Это анонимный чат с вашим Сантой.
                <br /> Здесь вы можете обсудить желаемый подарок, обменяться
                контактами или просто поболтать
              </ChatSubTitle>
            </div>
            {/* убрать хардкод */}
            <ChatWrapper>
              <Chat receiverId={57} cardId={19} />
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
