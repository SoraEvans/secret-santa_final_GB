import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import AvailableBoxes from '../AvailableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  PublicBoxList, PublicLeftItem, AddPrBox, StyledBoxItem,
} from './style'
import { StyledName } from '../PrivateBox/style'
import tree from '../../../../assets/images/elTree.svg'
import getOtherPublicBoxes from '../../../../API/otherPublicBoxes'
import getAllBoxes from '../../../../API/boxGet'

const PublicBox = ({ boxes, publicBoxes: startedPublicBoxes }) => {
  const navigate = useNavigate()
  const [alignedBoxes, setAlignedBoxes] = useState(boxes)
  const [nonAlignedBoxes, setNonAlignedBoxes] = useState(startedPublicBoxes)
  const userId = localStorage.getItem('userId')
  const onSubscribe = async box_id => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/box/join/?user_id=${userId}&id=${box_id}`, {
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
      <div style={{ padding: '0 110px 0 0' }}>
        <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
        <PublicLeftItem>
          {alignedBoxes?.publicBoxes.map(box =>
            <div style={{ textAlign: 'center', margin: '0 0 19px' }}>
              <StyledBoxItem onClick={() => navigate(`/box/${box.id}`)}>
                <img src={tree} alt="Обложка" />
              </StyledBoxItem>
              <StyledName size={12}>{box.title}</StyledName>
            </div>
          )}
          <AddPrBox onClick={() => navigate('/create-box')}>Добавить коробку</AddPrBox>
        </PublicLeftItem>
      </div>
      <PublicRightBox>
        <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
        <PublicBoxList>
          {nonAlignedBoxes.map(({ title, draw_starts_at, max_people_in_box, email, id }) => (
            <AvailableBoxes
              onClick={onSubscribe}
              title={title}
              start={draw_starts_at}
              max_people={max_people_in_box}
              now_people={email}
              id={id}
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
