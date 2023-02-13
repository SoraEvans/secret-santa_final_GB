import React from 'react'
import { Link } from "@mui/material";
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from '../MyCard/style'
import MyWardDetails from "../MyWardDetails/MyWardDetails";
import ward_image from '../../../../assets/images/ward_image.svg'

// eslint-disable-next-line react/prop-types
const WardCard = ({ setActiveIdx, wardId, id, userData }) => {
  if (id) {
    return (
      wardId
        ? <MyWardDetails wardId={wardId} id={id} userData={userData} />
        :
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
            Вам еще не назначен Подопечный( <br />
            Дождитесь проведения жеребьевки, чтобы узнать,
            кому вы будете дарить подарок
          </ButtonBlock>
          <img src={ward_image} alt="img" />
        </TextBlock>
    )
  }
  return (
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
        Вам еще не назначен Подопечный( <br />
        Вам нужно создать свою карточку участника,
        чтобы принимать участие в игре
      </ButtonBlock>
      <Link to="/box" style={{ textDecoration: 'none' }}>
        <CarouselButton style={{
          margin: 0,
          height: 70,
          width: 253,
          fontSize: 22
        }} onClick={() => setActiveIdx(3)}>Создать карточку</CarouselButton>
      </Link>
    </TextBlock>
  )

}

export default WardCard
