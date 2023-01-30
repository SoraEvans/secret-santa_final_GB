import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ContainerBoxCreated,
  SubTitle,
  TitleBoxCreated,
  Container, Img
} from './style'

function BoxDone() {
  return (
    <Container>
      <ContainerBoxCreated>
        <div>
          <TitleBoxCreated>Коробка создана!</TitleBoxCreated>
          <SubTitle style={{ marginBottom: '125px' }}>
            Теперь можно заглянуть внутрь и добавить новых участников, чтобы провести жеребьевку и распределить Сант.
          </SubTitle>
          {/* todo сделать навигацию в созданную коробку */}
          <Link to="/boxes" style={{ textDecoration: 'none' }}>
            <Button type="button">Заглянуть в коробку</Button>
          </Link>
        </div>
        <Img src="img/Group.png" alt="alt" />
      </ContainerBoxCreated>
    </Container>
  )
}

export default BoxDone
