import React from 'react'
import { Link } from "@mui/material";
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from '../MyCard/style'
import MyWardDetails from "../MyWardDetails/MyWardDetails";

// eslint-disable-next-line react/prop-types
const WardCard = ({ setActiveIdx, wardId, id }) => {
  console.log('wardId, id', wardId, id)
  const myWard = true;
  const cardCreated = true;

  if (cardCreated) {
    return (
      <div>
        {myWard
          ? <MyWardDetails wardId={wardId} id={id}/>
          :
          <TextBlock>
            <ButtonBlock>
              Вам еще не назначен Подопечный(
            </ButtonBlock>
            <ButtonBlock>
              Дождитесь проведения жеребьевки, чтобы узнать,
              кому вы будете дарить подарок
            </ButtonBlock>
          </TextBlock>
        }

      </div>
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
