import React, { useState } from 'react'
import { TabBox, TabItem, BoxWrapper, BoxItem } from './style'
import PrivateBox from './components/privateBox/PrivateBox'
import Container from '../../components/styleContainer'
import PublicBox from './components/publicBox/PublicBox'
import CustomBoxesHook from '../../helpers/CustomBoxesHook'

const MyBoxes = () => {
  const [tabIdx, setTabIdx] = useState(0)
  const { boxes, publicBoxes } = CustomBoxesHook() // кастомный хук для получения коробок

  const handlerChangeTab = (event, newTabIdx) => {
    setTabIdx(newTabIdx)
  }

  return (
    <Container>
      <BoxWrapper>
        <TabBox value={tabIdx} onChange={handlerChangeTab}>
          <TabItem label="Приватные коробки" />
          <TabItem label="Публичные коробки" />
        </TabBox>
        <BoxItem>{tabIdx === 0 && <PrivateBox boxes={boxes.privateBoxes} />}</BoxItem>
        <BoxItem>{tabIdx === 1 && <PublicBox boxes={boxes} publicBoxes={publicBoxes} />}</BoxItem>
      </BoxWrapper>
    </Container>
  )
}

export default MyBoxes
