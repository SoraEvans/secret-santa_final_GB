import React from 'react'
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from './style'

// eslint-disable-next-line react/prop-types
const MyCard = ({ setActiveIdx }) => (
  <TextBlock>
    <ButtonBlock>
      Упс! У вас еще нет карточки участника.
      Создайте свою карточку участника,
      если вы хотите принимать участие в игре.
    </ButtonBlock>
    <CarouselButton onClick={() => setActiveIdx(3)}>Создать карточку</CarouselButton>
  </TextBlock>
)

export default MyCard
