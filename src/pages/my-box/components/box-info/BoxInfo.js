import React from 'react'
import PropTypes from 'prop-types'
import { BoxTitleInner, BoxTitleText } from './style'
import tree from '../../../../assets/images/elTree.svg'

const BoxInfo = ({ title, cover }) => {
  // eslint-disable-next-line array-callback-return
  console.log(title)

  return (
    <BoxTitleInner>
      <img src={cover} alt="" />
      <BoxTitleText>
        <h4>{title}</h4>
      </BoxTitleText>
    </BoxTitleInner>
  )
}

BoxInfo.defaultProps = {
  title: '',
  cover: tree
}

BoxInfo.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string
}
export default BoxInfo
