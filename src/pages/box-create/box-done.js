import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ContainerBoxCreated,
  SubTitle,
  TitleBoxCreated,
  Img, BoxCreated
} from './style'
import BoxImg from '../../assets/images/opening-box.svg'


function BoxDone() {
  return (

      <ContainerBoxCreated>
        <BoxCreated>
          <TitleBoxCreated>Коробка создана!</TitleBoxCreated>
          <SubTitle style={{
            marginBottom: '125px',
            fontSize: '24px',
            lineHeight: '34px',
            color: '#A19593'
          }}>
            Теперь можно заглянуть внутрь и добавить новых участников, чтобы провести жеребьевку и распределить Сант.
          </SubTitle>
          {/* todo сделать навигацию в созданную коробку */}
          <Link to="/boxes" style={{ textDecoration: 'none' }}>
            <Button type="button">Заглянуть в коробку</Button>
          </Link>
        </BoxCreated>
        <Img>
          <img alt="box" src={BoxImg}/>
        </Img>
      </ContainerBoxCreated>

  )
}

export default BoxDone
