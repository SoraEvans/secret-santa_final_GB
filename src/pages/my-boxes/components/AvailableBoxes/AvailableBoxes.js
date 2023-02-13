import React from 'react'
import moment from 'moment'
import {
  BoxItem,
  BoxItemText,
  BoxTextDate,
  BoxTextHeading
} from './style'
import { StyledLink } from '../../../../components/header/style'
import { StyledIcon } from '../PublicBox/style'

// eslint-disable-next-line react/prop-types
const AvailableBoxes = ({ title, start, max_people, now_people, onClick, id, cover }) => (
  <BoxItem>
    <BoxItemText>
      <div>
        <BoxTextHeading>{title}</BoxTextHeading>
        <p>Количество участников: {now_people}/{max_people}</p>
        <BoxTextDate>Дата жеребьевки: {moment(start).format('DD.MM.YY')}</BoxTextDate>
      </div>
      <StyledLink
        padding="4px"
        width="118px"
        colorState="white"
        type="submit"
        fontsize="11px"
        onClick={() => onClick(id)}
        disableRipple
      >
        Присоединиться
      </StyledLink>
    </BoxItemText>
    <StyledIcon>
      <img src={cover} alt="Обложка" />
    </StyledIcon>
  </BoxItem>
)

export default AvailableBoxes
