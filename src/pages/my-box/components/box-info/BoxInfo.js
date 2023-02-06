import React from 'react'
import PropTypes from 'prop-types'
import { BoxTitleInner, BoxTitleText, StyledBoxIcon } from './style'
import tree from '../../../../assets/images/elTree.svg'

const BoxInfo = ({ title, cover, userCount }) => (
  <BoxTitleInner>
    {console.log(cover)}
    <StyledBoxIcon>
      <img src={cover} alt="tree" style={{ width: 34 }} width={70} height={70} />
    </StyledBoxIcon>
    <BoxTitleText>
      <div>
        <h3>Коробка: {title}</h3>
        <p>Участников: {userCount}</p>
      </div>
      <p>Вы организатор</p>
    </BoxTitleText>
  </BoxTitleInner>
)

BoxInfo.defaultProps = {
  title: '',
  cover: tree,
  userCount: 0
}

BoxInfo.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  userCount: PropTypes.number
}
export default BoxInfo
