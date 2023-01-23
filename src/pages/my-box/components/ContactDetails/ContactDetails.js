import React from 'react'
import { InfoBox, InfoLabel, NoInfoText } from "./style";

const ContactDetails = () => {

  const cardCreated = true;


  return (
    <div>
      {cardCreated
        ?
        <div>
          <InfoLabel>Адрес, на который присылать подарок</InfoLabel>
          <InfoBox>МО, г. Иваново, ул. Новосельская, 34. Индекс 412902</InfoBox>
          <InfoLabel>Номер телефона </InfoLabel>
          <InfoBox>+79008070601</InfoBox>
        </div>
        :
        <NoInfoText>
          Ваш подопечный не указал контактные данные.
          Можете связаться с ним в чате, чтобы
          узнать их
        </NoInfoText>
      }
    </div>
  )
}

export default ContactDetails
