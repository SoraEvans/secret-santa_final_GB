import React from 'react'
import PropTypes from 'prop-types'
import AvailableBoxes from '../AvailableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftItem,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  BoxInner
} from './style'

const PublicBox = ({ boxes }) => (
  <PublicWrapper>
    <div>
      <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
      <PublicLeftItem>
        {boxes.map(box => (
          <BoxInner url={box.cover}>
            <img style={{ width: '120px' }} src={box.cover} alt="Обложка" />
          </BoxInner>
        ))}
      </PublicLeftItem>
    </div>
    <PublicRightBox>
      <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
      <div>
        <AvailableBoxes />
      </div>
    </PublicRightBox>
  </PublicWrapper>
)

PublicBox.defaultProps = {
  boxes: []
}

PublicBox.propTypes = {
  boxes: PropTypes.array
}

export default PublicBox
