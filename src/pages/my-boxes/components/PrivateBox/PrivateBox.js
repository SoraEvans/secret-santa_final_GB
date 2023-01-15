import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PrivateWrapper, BtnAdd, BoxInner } from './style'

const PrivateBox = ({ boxes }) => {
  const navigate = useNavigate()

  return (
    <PrivateWrapper>
      {boxes.map(box => (
        <BoxInner url={box.cover} onClick={() => navigate('/box')}>
          <img style={{ width: '120px' }} src={box.cover} alt="Обложка" />
        </BoxInner>
      ))}
      <BtnAdd onClick={() => navigate('/create-box')}>+</BtnAdd>
    </PrivateWrapper>
  )
}

PrivateBox.defaultProps = {
  boxes: []
}

PrivateBox.propTypes = {
  boxes: PropTypes.array
}

export default PrivateBox
