import React from 'react'
import {
  BoxItem,
  BoxItemText,
  BoxTextDate,
  BoxTextHeading,
  JoinBtn
} from './style'

const AvailableBoxes = () => (
  <BoxItem>
    <BoxItemText>
      <BoxTextHeading>Название коробки</BoxTextHeading>
      <p>Колличиство участников: 25/30</p>
      <BoxTextDate>Дата жеребьевки: 23.12.22</BoxTextDate>
      <JoinBtn type="submit">Присоединиться</JoinBtn>
    </BoxItemText>
    <div>
      <img src="https://place-hold.it/100x100/666" alt="" />
    </div>
  </BoxItem>
)

export default AvailableBoxes
