import React from 'react'
import PropTypes from 'prop-types'
import AvailableBoxes from '../AvailableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  PublicBoxList,
} from './style'

const PublicBox = ({ boxes }) => (
  <PublicWrapper>
    <div>
      <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
    </div>
    <PublicRightBox>
      <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
      <PublicBoxList>
        {boxes.map(({ title, draw_starts_at, max_people_in_box, email }) => (
          <AvailableBoxes title={title} start={draw_starts_at} max_people={max_people_in_box} now_people={email} />
        ))}
      </PublicBoxList>
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
