import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
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
import wait_image from '../../../../assets/images/santa_image_wait.svg'

const MyCard = ({
                  setActiveIdx,
                  santaId,
                  id,
                  userData: {
                    card,
                    box: { cost }
                  }
                }) => {
  const [formValues, setFormValues] = useState({})
  const [disabled, setDisabled] = useState(false)
  const { wishlist, phone, address, image, name } = card || {}
  useEffect(() => {
    setFormValues({
      wishlist,
      address,
      phone
    })
  }, [])

  const {
    handleSubmit
  } = useForm({
    mode: 'all',
  })

  useEffect(() => {
    if (formValues.address === address
      && formValues.wishlist === wishlist
      && formValues.phone === phone) {
      setDisabled(true)
    } else (setDisabled(false))
  }, [formValues.address, formValues.wishlist, formValues.phone])

  const onUpdateInfo = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/card/addAdditionalInfo', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        card_id: id,
        ...(formValues.phone !== phone && { phone: formValues.phone }),
        ...(formValues.wishlist !== wishlist && { wishlist: formValues.wishlist }),
        ...(formValues.address !== address && { address: formValues.address }),
      })
    })
  }

  const onPresentReceived = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/card/addAdditionalInfo', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        card_id: id,
        presentReceived: true
      })
    })
  }

  return (
    // eslint-disable-next-line no-nested-ternary
    santaId ? (
      <MyCardPage>
        <CardInfo>
          <UserInfoBlock>
            <div style={{ display: 'flex' }}>
              <UserItem
                style={{
                  flex: '1 0 auto',
                  aspectRatio: '1 / 1',
                  fontSize: '48px',
                  maxWidth: '70px',
                  maxHeight: '70px',
                  cursor: 'default'
                }}
              >
                {image ?
                  <img src={image} alt="avatar" style={{ height: 53 }} />
                  : name[0]?.toUpperCase()}
              </UserItem>
              <UserInfo>
                <UserName>{name}</UserName>
                {cost ? <Price style={{ marginBottom: 4 }}>
                  Стоимость подарка:
                  <PriceAmount>до {cost} руб.</PriceAmount>
                </Price> : null}
              </UserInfo>
            </div>
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
              }}
              fullWidth
              placeholder="Это ваш вишлист. Здесь можно оставить для своего Санты пожелания о том, какой подарок вы хотели бы получить"
              multiline
              rows={9}
            />
            <CardFormLabel>Куда присылать подарок?</CardFormLabel>
            <Input
              fullWidth
              value={formValues.address}
              onChange={(e) => {
                setFormValues(prevState => ({ ...prevState, address: e.target.value }))
              }}
            />
            <CardFormLabel>Номер телефона</CardFormLabel>
            <Input
              fullWidth
              value={formValues.phone}
              onChange={(e) => {
                setFormValues(prevState => ({ ...prevState, phone: e.target.value }))
              }}
            />
            <CarouselButton
              disabled={disabled}
              offBtn={disabled}
              type="submit"
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
        <StyledHr size="100%" />
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
    ) : (!id ? (
      <TextBlock style={{
        position: 'absolute',
        height: 'fit-content',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
      }}>
        <ButtonBlock>
          Упс! У вас еще нет карточки участника. Создайте свою карточку
          участника, если вы хотите принимать участие в игре.
        </ButtonBlock>
        <CarouselButton style={{
          margin: 0,
          height: 70,
          width: 253,
          fontSize: 22
        }} onClick={() => setActiveIdx(3)}>
          Создать карточку
        </CarouselButton>
      </TextBlock>
    ) : <TextBlock style={{
      position: 'absolute',
      height: 'fit-content',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
    }}>
      <ButtonBlock style={{ marginTop: 180 }}>
        Ваша карточка участника будет доступна после проведения жеревьевки!
      </ButtonBlock>
      <img src={wait_image} alt="img" style={{ width: 350 }} />
    </TextBlock>)
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
  id: PropTypes.number,
  userData: PropTypes.object
}