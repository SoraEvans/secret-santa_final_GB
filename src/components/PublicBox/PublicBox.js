import React, { useEffect, useState } from 'react'
import AvailableBoxes from '../AvailableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftItem,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  BoxInner
} from './style'

const PublicBox = () => {
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
          setBoxs(response.publicBoxes)
        }
      })
  }, [])

  return (
    <PublicWrapper>
      <div>
        <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
        <PublicLeftItem>
          {boxs.map(box => (
            <BoxInner url={box.cover}>
              <img style={{ width: '120px' }} src={box.cover} alt="Обложка" />
            </BoxInner>
          ))}
        </PublicLeftItem>
      </div>
      <PublicRightBox>
        <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
        <div>
          <AvailableBoxes />
        </div>
      </PublicRightBox>
    </PublicWrapper>
  )
}

export default PublicBox
