import React, { useState } from 'react'
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'
import MyCard from '../MyCard/MyCard'
import WardCard from '../WardCard/WardCard'
import MyBoxSettings from '../MyBoxSettings/MyBoxSettings'
import MembersAdding from '../MembersAdding/MembersAdding'

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx)
  }

  return (
    <>
      <TabsWrapper>
        <MyBoxSettings setActiveIdx={setActiveIdx} />
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
      <TabBody>{activeIdx === 0 && <BoxUsers setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody>{activeIdx === 1 && <MyCard setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody>{activeIdx === 2 && <WardCard setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody>{activeIdx === 3 && <MembersAdding />}</TabBody>
    </>
  )
}

export default MyBoxTabs
