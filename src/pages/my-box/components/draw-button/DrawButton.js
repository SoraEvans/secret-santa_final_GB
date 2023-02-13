import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBlock, ButtonText, StartDrawButton } from './style'

const DrawButton = ({ onClick, userCount }) => {
  if (userCount < 3) {
    return (
      <ButtonBlock>
        <StartDrawButton disabled>Провести жеребьёвку</StartDrawButton>
        <ButtonText>
          Сейчас нельзя провести жеребьевку.<br/> Для проведения жеребьевки в коробке
          должно быть как минимум три участника
        </ButtonText>
      </ButtonBlock>
    )
  }

  return (
    <ButtonBlock>
      <StartDrawButton onClick={onClick}>Провести жеребьёвку</StartDrawButton>
      <ButtonText>
        {' '}
        Можно провести жеребьевку. Обратите внимание, что после проведения
        жеребьевки добавить новых участников будет нельзя.
      </ButtonText>
    </ButtonBlock>
  )
}

DrawButton.defaultProps = {
  onClick: () => {},
  userCount: 0
}

DrawButton.propTypes = {
  onClick: PropTypes.func,
  userCount: PropTypes.number
}

export default DrawButton
