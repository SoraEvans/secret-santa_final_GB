import React, { useState } from 'react'

import santa from '../../../../assets/images/santa.svg'
import { Price, PriceAmount, UserInfo, UserInfoBlock, UserName } from '../MyCard/style'
import { AvatarImg } from "../../../../components/WardCard/style";
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
} from "./style";
import ContactDetails from "../ContactDetails/ContactDetails";
import Chat from "../Chat/Chat";


const MyWardDetails = () => {

  const price = 1000;

  const [activeIndex, setActiveIndex] = useState(0)

  const handlerChangeTab = (event, newIndex) => {
    setActiveIndex(newIndex)
  }

  return (
    <MyWardPage>
      <MyWardInfo>
        <UserInfoBlock>
          <AvatarImg style={{ width: '70px', height: '70px' }} />
          <UserInfo>
            <UserName>Имя Участника</UserName>
            <Price>Ваш подопечный</Price>
            <Price>Стоимость подарка:
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
              <TabItem label={<div>Чат с подопечным</div>} />
              <TabItem label={<div>Контакты подопечного</div>} />

            </TabsInner>
          </TabsWrapper>
          <BodyWrapper>
            <TabBody>{activeIndex === 0 && <Chat setActiveIndex={setActiveIndex} />}</TabBody>
            <TabBody>{activeIndex === 1 && <ContactDetails setActiveIndex={setActiveIndex} />}</TabBody>
          </BodyWrapper>


        </BodyInner>
      </MyWardInfo>
      <hr width="1" size="100%" />
      <SantaImg>
        <img alt="santa" src={santa} width="100%" />
      </SantaImg>
    </MyWardPage>
  )
}

export default MyWardDetails
