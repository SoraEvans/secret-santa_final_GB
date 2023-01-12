import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrivateWrapper, BtnAdd, BoxInner } from './style'

const PrivateBox = () => {
  const navigate = useNavigate()
  const [boxs, setBoxs] = useState([])

  useEffect(() => {
    fetch('https://backsecsanta.alwaysdata.net/api/box/get', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        id: localStorage.getItem('userId')
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setBoxs(response.privateBoxes)
        }
      })
  }, [])

  return (
    <PrivateWrapper>
      {boxs.map(box => (
        <BoxInner url={box.cover} onClick={() => navigate('/box')}>
          <img style={{ width: '120px' }} src={box.cover} alt="Обложка" />
        </BoxInner>
      ))}
      <BtnAdd onClick={() => navigate('/create-box')}>+</BtnAdd>
    </PrivateWrapper>
  )
}

export default PrivateBox
