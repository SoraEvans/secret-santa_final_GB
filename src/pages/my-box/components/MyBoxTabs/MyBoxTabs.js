import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'
import MyCard from '../MyCard/MyCard'
import WardCard from '../WardCard/WardCard'
import MyBoxSettings from '../MyBoxSettings/MyBoxSettings'
import MyCardCreate from '../MembersAdding/MyCardCreate'
import getBoxInfo from '../../../../API/boxInfo'

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [userData, setUserData] = useState({})
  const [santaId, setSantaId] = useState(null)
  const [cardId, setCardId] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [wardId, setWardId] = useState(null)
  const currentUserId = +localStorage.getItem('userId')
  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx)
  }
  const { id } = useParams()
  useEffect(() => {
    getBoxInfo(setUserData, id)
  }, [])

  useEffect(() => {
    if (userData?.box?.creator_id === currentUserId) {
      setIsAdmin(true)
    }
    setCardId(userData?.card?.id)
    userData?.secret_santas?.forEach(item => {
      if (currentUserId === item.id) {
        setSantaId(item.your_secret_santa_id)
        setWardId(item.secret_santa_to_id)
      }
    })
  }, [userData])

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
      <TabBody>
        {activeIdx === 0 && <BoxUsers
          currentUserId={currentUserId}
          userData={userData}
          setActiveIdx={setActiveIdx}
          setUserData={setUserData}
          isAdmin={isAdmin}
        />}
      </TabBody>
      <TabBody>{activeIdx === 1 && <MyCard santaId={santaId} setActiveIdx={setActiveIdx} id={cardId} />}</TabBody>
      <TabBody>{activeIdx === 2 && <WardCard wardId={wardId} setActiveIdx={setActiveIdx} id={cardId} />}</TabBody>
      <TabBody>{activeIdx === 3 && <MyCardCreate isAdmin={isAdmin} userData={userData} />}</TabBody>
    </>
  )
}

export default MyBoxTabs
