import React, { useState } from 'react'

import PropTypes from "prop-types";
import santa from '../../../../assets/images/santa.svg'
import { Price, PriceAmount, StyledHr, UserInfo, UserInfoBlock, UserName } from '../MyCard/style'
import {
  BodyInner,
  BodyWrapper,
  GiftSentButton,
  MyWardInfo,
  MyWardPage,
  SantaImg,
  TabBody,
  TabItem,
  TabsInner,
  TabsWrapper
} from './style'
import ContactDetails from '../ContactDetails/ContactDetails'
import Chat from '../ChatBox/Chat'
import { UserItem } from "../BoxUsers/style";

const MyWardDetails = ({ wardId, id, userData: { secret_santas_ward, secret_santas, box } }) => {
  const price = box.cost

  const [activeIndex, setActiveIndex] = useState(0)
  const currentWard = secret_santas_ward?.filter(item => item.id === wardId)[0]
  const currentWardAvatar = secret_santas?.filter(item => item.id === wardId)[0].image

  const handlerChangeTab = (event, newIndex) => {
    setActiveIndex(newIndex)
  }

  const onPresentSent = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/card/addAdditionalInfo', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        card_id: id,
        presentSent: true,
      })
    })
  }

  return (
    <MyWardPage>
      <MyWardInfo>
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
              {currentWardAvatar ?
                <img src={currentWardAvatar} alt="avatar" style={{ height: 53 }} />
                : currentWard?.name[0]?.toUpperCase()}
            </UserItem>
            <UserInfo>
              <UserName>{currentWard?.name}</UserName>
              <Price style={{ flex: 1, marginTop: 4 }}>Ваш подопечный</Price>
              {box.cost ? <Price style={{marginBottom: 4}}>
                Стоимость подарка:
                <PriceAmount>до {price} руб.</PriceAmount>
              </Price> : null}
            </UserInfo>
          </div>
          <UserInfo>
            <GiftSentButton type="button" onClick={onPresentSent}>Я отправил подарок!</GiftSentButton>
          </UserInfo>
        </UserInfoBlock>
        <BodyInner>
          <TabsWrapper>
            <TabsInner
              orientation="vertical"
              value={activeIndex}
              onChange={handlerChangeTab}
            >
              <TabItem disableRipple style={{ minHeight: "233px", alignSelf: "flex-start" }} label={<div>Чат с подопечным</div>} />
              <TabItem disableRipple style={{ minHeight: "233px", alignSelf: "flex-start" }} label={<div>Досье подопечного</div>} />
            </TabsInner>
          </TabsWrapper>
          <BodyWrapper>
            <TabBody style={{ margin: 0 }}>
              {activeIndex === 0 && (
                <Chat
                  receiverId={wardId}
                  cardId={id}
                  setActiveIndex={setActiveIndex}
                />
              )}
            </TabBody>
            <TabBody>
              {activeIndex === 1 && (
                <ContactDetails test={currentWard} />
              )}
            </TabBody>
          </BodyWrapper>
        </BodyInner>
      </MyWardInfo>
      <StyledHr width="1" size="100%" />
      <SantaImg>
        <img alt="santa" src={santa} width="100%" />
      </SantaImg>
    </MyWardPage>
  )
}

MyWardDetails.propTypes = {
  wardId: PropTypes.number,
  id: PropTypes.number,
  userData: PropTypes.object
}

export default MyWardDetails
