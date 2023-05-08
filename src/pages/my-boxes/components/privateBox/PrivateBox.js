import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PrivateWrapper, BtnAdd, BoxInner, StyledName } from './style'
import { StyledBoxElement } from "../publicBox/style"

const PrivateBox = ({ boxes }) => {
  const navigate = useNavigate()

  return (
    <PrivateWrapper>
      {boxes.map(box => (
        <StyledBoxElement style={{ textAlign: 'center' }}>
          <BoxInner onClick={() => navigate(`/box/${box.id}`)}>
            <img src={box.cover} alt="Обложка" style={{width: 60}} />
          </BoxInner>
          <StyledName size={15}>{box.title}</StyledName>
        </StyledBoxElement>
      ))}
      <BtnAdd onClick={() => navigate('/create-box')}>Добавить коробку</BtnAdd>
    </PrivateWrapper>
  )
}

// Дефолтное значение для props
PrivateBox.defaultProps = {
  boxes: []
}
// Типизация для props
PrivateBox.propTypes = {
  boxes: PropTypes.array
}

export default PrivateBox
