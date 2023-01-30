import React from 'react'
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

const PublicBox = ({ boxes, publicBoxes }) => {
  const navigate = useNavigate()

  return (
    <PublicWrapper>
      {console.log('publicBoxes', boxes)}
      <div style={{ padding: '0 110px 0 0' }}>
        <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
        <PublicLeftItem>
          {publicBoxes.map((box) =>
            <div style={{ textAlign: 'center', margin: '0 0 19px' }}>
              <StyledBoxItem>
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
          {publicBoxes.map(({ title, draw_starts_at, max_people_in_box, email }) => (
            <AvailableBoxes title={title} start={draw_starts_at} max_people={max_people_in_box} now_people={email} />
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
