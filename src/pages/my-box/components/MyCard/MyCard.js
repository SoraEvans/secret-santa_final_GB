import React from 'react'
import { CarouselButton } from '../../../home/components/carousel/style'
import { ButtonBlock, TextBlock } from './style'

const MyCard = () => (
  <TextBlock>
    <ButtonBlock>
      Упс! У вас еще нет карточки участника.
      Создайте свою карточку участника,
      если вы хотите принимать участие в игре.
    </ButtonBlock>
    <CarouselButton>Создать карточку</CarouselButton>
  </TextBlock>
)

export default MyCard
