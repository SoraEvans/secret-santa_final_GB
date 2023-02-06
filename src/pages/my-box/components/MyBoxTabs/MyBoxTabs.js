import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'
import MyCard from '../MyCard/MyCard'
import WardCard from '../WardCard/WardCard'
import MyBoxSettings from '../MyBoxSettings/MyBoxSettings'
import MembersAdding from '../MembersAdding/MembersAdding'
import getBoxInfo from '../../../../API/boxInfo'

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [userData, setUserData] = useState({})

  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx)
  }

  const { id } = useParams()
  useEffect(() => {
    getBoxInfo(setUserData, id)
  }, [])

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
      <TabBody>{activeIdx === 0 && <BoxUsers userData={userData} setActiveIdx={setActiveIdx} setUserData={setUserData} />}</TabBody>
      <TabBody>{activeIdx === 1 && <MyCard setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody>{activeIdx === 2 && <WardCard setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody>{activeIdx === 3 && <MembersAdding userData={userData} />}</TabBody>
    </>
  )
}

export default MyBoxTabs
