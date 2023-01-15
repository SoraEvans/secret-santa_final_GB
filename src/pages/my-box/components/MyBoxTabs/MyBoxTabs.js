import React, { useState } from 'react'
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'
import MyCard from '../MyCard/MyCard'
import WardCard from '../WardCard/WardCard'
import MyBoxSettings from '../MyBoxSettings/MyBoxSettings'

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx)
  }

  return (
    <>
      <TabsWrapper>
        <MyBoxSettings />
        <TabsInner
          orientation="vertical"
          value={activeIdx}
          onChange={handlerChangeTab}
        >
          <TabItem label={<div>Участники</div>} />
          <TabItem label={<div>Моя карточка</div>} />
          <TabItem label={<div>Мой подопечный</div>} />
        </TabsInner>
      </TabsWrapper>
      <TabBody>{activeIdx === 0 && <BoxUsers />}</TabBody>
      <TabBody>{activeIdx === 1 && <MyCard />}</TabBody>
      <TabBody>{activeIdx === 2 && <WardCard />}</TabBody>
    </>
  )
}

export default MyBoxTabs
