import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import AvailableBoxes from '../availableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  PublicBoxList, PublicLeftItem, AddPrBox, StyledBoxItem, StyledBoxElement,
} from './style'
import { StyledName } from '../privateBox/style'
import getOtherPublicBoxes from '../../../../API/otherPublicBoxes'
import getAllBoxes from '../../../../API/boxGet'

const PublicBox = ({ boxes, publicBoxes: startedPublicBoxes }) => {
  const navigate = useNavigate()
  const [alignedBoxes, setAlignedBoxes] = useState(boxes)
  const [nonAlignedBoxes, setNonAlignedBoxes] = useState(startedPublicBoxes)
  const userId = localStorage.getItem('userId')
  const onSubscribe = async box_id => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/box/join?user_id=${userId}&id=${box_id}`, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.json())
      .then(() => {
        getOtherPublicBoxes(setNonAlignedBoxes)
        getAllBoxes(setAlignedBoxes)
      })
  }

  return (
    <PublicWrapper>
      <div style={{ padding: '0 60px 0 0', width: 600, borderRight: '1px solid #EAE9E9' }}>
        <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
        <PublicLeftItem>
          {alignedBoxes?.publicBoxes.map(box =>
            <StyledBoxElement style={{ textAlign: 'center', margin: '0 0 19px', width: 'min-content' }}>
              <StyledBoxItem onClick={() => navigate(`/box/${box.id}`)}>
                <img src={box.cover} alt="Обложка" />
              </StyledBoxItem>
              <StyledName size={14}>{box.title} {+box.creator_id === +userId && `(Ваша)`}</StyledName>
            </StyledBoxElement>
          )}
          <AddPrBox onClick={() => navigate('/create-box')}>Добавить коробку</AddPrBox>
        </PublicLeftItem>
      </div>
      <PublicRightBox>
        <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
        <PublicBoxList>
          {nonAlignedBoxes.map(({ title, draw_starts_at, max_people_in_box, email, id, cover }) => (
            <AvailableBoxes
              onClick={onSubscribe}
              title={title}
              start={draw_starts_at}
              max_people={max_people_in_box}
              now_people={email}
              id={id}
              cover={cover}
            />
          ))}
        </PublicBoxList>
      </PublicRightBox>
    </PublicWrapper>
  )
}

PublicBox.defaultProps = {
  boxes: [],
  publicBoxes: [],
}

PublicBox.propTypes = {
  boxes: PropTypes.array,
  publicBoxes: PropTypes.array
}

export default PublicBox
