import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SantaBoxBtn, SantaBoxText } from './style'
import ButtonText from '../../../../assets/images/beSanta.svg'
import ButtonImg from '../../../../assets/images/boxBtn.svg'

const HeroSectionBtn = () => {
  const isLogged = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate()

  return (
    <div
      role="button"
      onClick={() => navigate(isLogged ? '/boxes' : '/register')}
      tabIndex={0}
      style={{
        width: 'max-content',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <SantaBoxBtn>
        <SantaBoxText src={ButtonText} alt='' />
        <img src={ButtonImg} alt='' style={{ position: 'absolute' }} />
      </SantaBoxBtn>
    </div>
  )
}

export default HeroSectionBtn
