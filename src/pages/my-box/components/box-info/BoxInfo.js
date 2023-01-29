import React from 'react'
import PropTypes from 'prop-types'
import { BoxTitleInner, BoxTitleText } from './style'
import tree from '../../../../assets/images/elTree.svg'

const BoxInfo = ({ title, cover, userCount }) => {
  // eslint-disable-next-line array-callback-return
  console.log(userCount)

  return (
    <BoxTitleInner>
      <img src={cover && tree} alt="" width={70} height={70} />
      <BoxTitleText>
        <h4>Коробка: {title}</h4>
        <p>Участников: {userCount} </p>
      </BoxTitleText>
    </BoxTitleInner>
  )
}

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
