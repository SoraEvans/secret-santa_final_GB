import React from 'react'
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from '../MyCard/style'

const WardCard = () => (
  <TextBlock>
    <ButtonBlock>
      Вам еще не назначен Подопечный(
    </ButtonBlock>
    <ButtonBlock>
      Дождитесь проведения жеребьевки, чтобы узнать,
      кому вы будете дарить подарок
    </ButtonBlock>
    <CarouselButton>Создать карточку</CarouselButton>
  </TextBlock>
)

export default WardCard
