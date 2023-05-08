import React from 'react'
import PropTypes from "prop-types";
import { Details, InfoBox, InfoLabel, NoInfoText } from "./style";

const ContactDetails = ({ test: { address, phone, wishlist } }) => {
  const cardCreated = true;

  return (
    <div>
      {cardCreated
        ?
        <Details>
          <InfoLabel>Пожелания подопечного</InfoLabel>
          <InfoBox>{wishlist || 'Не указано'}</InfoBox>
          <InfoLabel>Адрес, на который присылать подарок</InfoLabel>
          <InfoBox>{address || 'Не указан'}</InfoBox>
          <InfoLabel>Номер телефона </InfoLabel>
          <InfoBox>{phone || 'Не указан'}</InfoBox>
        </Details>
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

ContactDetails.propTypes = {
  test: PropTypes.object,
}

export default ContactDetails
