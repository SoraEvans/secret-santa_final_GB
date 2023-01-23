import React from 'react'
import moment from 'moment'
import {
  BoxItem,
  BoxItemText,
  BoxTextDate,
  BoxTextHeading
} from './style'
import { StyledLink } from '../../../../components/header/style'
import tree from '../../../../assets/images/elTree.svg'
import { StyledIcon } from '../PublicBox/style'

// eslint-disable-next-line react/prop-types
const AvailableBoxes = ({ title, start, max_people, now_people }) => (
  <BoxItem>
    <BoxItemText>
      <div>
        <BoxTextHeading>{title}</BoxTextHeading>
        <p>Колличиство участников: {now_people}/{max_people}</p>
        <BoxTextDate>Дата жеребьевки: {moment(start).format('DD.MM.YY')}</BoxTextDate>
      </div>
      <StyledLink padding="4px" width="118px" colorState="white" type="submit" fontsize="11px">Присоединиться</StyledLink>
    </BoxItemText>
    <StyledIcon>
      <img src={tree} alt="Обложка" />
    </StyledIcon>
  </BoxItem>
)

export default AvailableBoxes
