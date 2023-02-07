import React, { useState } from 'react'

import santa from '../../../../assets/images/santa.svg'
import {
  Price,
  PriceAmount, StyledHr,
  UserInfo,
  UserInfoBlock,
  UserName
} from '../MyCard/style'
import {
  BodyInner,
  BodyWrapper,
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

// eslint-disable-next-line react/prop-types
const MyWardDetails = ({ wardId, id }) => {
  const price = 1000

  const [activeIndex, setActiveIndex] = useState(0)

  const handlerChangeTab = (event, newIndex) => {
    setActiveIndex(newIndex)
  }

  return (
    <MyWardPage>
      <MyWardInfo>
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
            <UserName>Имя Участника</UserName>
            <Price>Ваш подопечный</Price>
            <Price>
              Стоимость подарка:
              <PriceAmount>до {price} руб.</PriceAmount>
            </Price>
          </UserInfo>
        </UserInfoBlock>
        <BodyInner>
          <TabsWrapper>
            <TabsInner
              orientation="vertical"
              value={activeIndex}
              onChange={handlerChangeTab}
            >
              <TabItem style={{ minHeight: "233px", alignSelf: "flex-start" }} label={<div>Чат с подопечным</div>} />
              <TabItem style={{ minHeight: "233px", alignSelf: "flex-start" }} label={<div>Контакты
                подопечного</div>} />
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
                <ContactDetails setActiveIndex={setActiveIndex} />
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

export default MyWardDetails
