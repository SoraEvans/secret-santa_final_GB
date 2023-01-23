import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PrivateWrapper, BtnAdd, BoxInner, StyledName } from './style'
import tree from '../../../../assets/images/elTree.svg'

const PrivateBox = ({ boxes }) => {
  const navigate = useNavigate()

  return (
    <PrivateWrapper>
      {boxes.map(box => (
        <div style={{ textAlign: 'center' }}>
          <BoxInner url={box.cover} onClick={() => navigate('/box')}>
            <img src={tree} alt="Обложка" />
          </BoxInner>
          <StyledName>{box.title}</StyledName>
        </div>
      ))}
      <BtnAdd onClick={() => navigate('/create-box')}>Добавить коробку</BtnAdd>
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
