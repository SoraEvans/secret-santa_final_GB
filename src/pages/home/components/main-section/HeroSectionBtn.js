import React from 'react'
import { Link } from 'react-router-dom'
import { SantaBoxBtn, SantaBtn } from './style'

const HeroSectionBtn = () => {
  const isLogged = localStorage.getItem('isLoggedIn');

  return <Link to={isLogged ? '/boxes' : '/register'} style={{ textDecoration: 'none' }}>
    <SantaBoxBtn>
      <SantaBtn>Стать Сантой</SantaBtn>
    </SantaBoxBtn>
  </Link>
}

export default HeroSectionBtn
