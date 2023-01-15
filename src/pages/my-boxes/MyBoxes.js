import React, { useState } from 'react'
import { TabBox, TabItem, BoxWrapper, BoxItem } from './style'

import PrivateBox from './components/PrivateBox/PrivateBox'
import Container from '../../components/style_cont'
import PublicBox from './components/PublicBox/PublicBox'
import CustomBoxesHook from '../../helpers/CustomBoxesHook'

const MyBoxes = () => {
  const [tabIdx, setTabIdx] = useState(0)
  const boxes = CustomBoxesHook()

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
        <BoxItem>{tabIdx === 1 && <PublicBox boxes={boxes.publicBoxes} />}</BoxItem>
      </BoxWrapper>
    </Container>
  )
}

export default MyBoxes
