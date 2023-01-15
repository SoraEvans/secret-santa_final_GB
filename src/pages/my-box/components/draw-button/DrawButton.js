import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBlock, ButtonText, StartDrawButton } from './style'
import DB from '../../../../constants/db'

const DrawButton = ({ onClick }) => {
  const participantsCount = DB.users.length; // Здесь будет подсчёт пользователей

  if (participantsCount < 3) {
    return (
      <ButtonBlock>
        <StartDrawButton disabled>Провести жеребьёвку</StartDrawButton>
        <ButtonText>Сейчас нельзя провести жеребьевку. Для проведения жеребьевки в коробке должно быть как минимум три
          участника</ButtonText>
      </ButtonBlock>
    )
  }

  return (
    <ButtonBlock>
      <StartDrawButton onClick={onClick}>Провести жеребьёвку</StartDrawButton>
      <ButtonText> Можно провести жеребьевку. Обратите внимание, что после проведения жеребьевки добавить новых
        участников будет нельзя.</ButtonText>
    </ButtonBlock>
  )
}

DrawButton.defaultProps = {
  onClick: () => { }
}

DrawButton.propTypes = {
  onClick: PropTypes.func,
}

export default DrawButton