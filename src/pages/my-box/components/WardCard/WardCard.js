import React from 'react'
import { Link } from "@mui/material";
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from '../MyCard/style'

// eslint-disable-next-line react/prop-types
const WardCard = ({ setActiveIdx }) => {

  const myWard = null;
  const myCard = null;


  if (myCard) {
    return (
      <TextBlock>
        {myWard
          ?
          <div>{myWard}</div>
          :
          <div>
            <ButtonBlock>
              Вам еще не назначен Подопечный(
            </ButtonBlock>
            <ButtonBlock>
              Дождитесь проведения жеребьевки, чтобы узнать,
              кому вы будете дарить подарок
            </ButtonBlock>
          </div>
        }

      </TextBlock>
    )
  }
  return (
    <TextBlock>
      <ButtonBlock>
        Вам еще не назначен Подопечный(
      </ButtonBlock>
      <ButtonBlock>
        Вам нужно создать свою карточку участника,
        чтобы принимать участие в игре
      </ButtonBlock>
      <Link to="/box" style={{ textDecoration: 'none' }}>
        <CarouselButton onClick={() => setActiveIdx(3)}>Создать карточку</CarouselButton>
      </Link>
    </TextBlock>
  )

}

export default WardCard
