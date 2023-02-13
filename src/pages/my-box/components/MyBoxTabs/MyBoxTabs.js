import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style';
import BoxUsers from '../BoxUsers/BoxUsers';
import MyCard from '../MyCard/MyCard';
import WardCard from '../WardCard/WardCard';
import MyBoxSettings from '../MyBoxSettings/MyBoxSettings';
import MyCardCreate from '../MembersAdding/MyCardCreate';
import getBoxInfo from '../../../../API/boxInfo';
import DrawResult from '../draw-result/DrawResult';

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [userData, setUserData] = useState({})
  const [santaId, setSantaId] = useState(null)
  const [cardId, setCardId] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [wardId, setWardId] = useState(null)
  const currentUserId = +localStorage.getItem('userId')
  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx);
  };
  const { id } = useParams();
  useEffect(() => {
    getBoxInfo(setUserData, id);
  }, []);

  useEffect(() => {
    if (userData?.box?.creator_id === currentUserId) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false)
    }
    setCardId(userData?.card?.id);
    userData?.secret_santas?.forEach((item) => {
      if (currentUserId === item.id) {
        setSantaId(item.your_secret_santa_id);
        setWardId(item.secret_santa_to_id);
      }
    });
  }, [userData]);

  return (
    <>
      <TabsWrapper>
        {isAdmin && <MyBoxSettings setActiveIdx={setActiveIdx} isAdmin={isAdmin} currentUserId={currentUserId} card={userData?.card} />}
        <TabsInner
          orientation="vertical"
          value={activeIdx}
          onChange={handlerChangeTab}
        >
          <TabItem label={<div>Участники</div>} />
          <TabItem label={<div>Моя карточка</div>} style={{ border: '1px solid #FF5539' }} />
          <TabItem label={<div>Мой подопечный</div>} />
        </TabsInner>
      </TabsWrapper>
      <TabBody style={{ marginLeft: 340 }}>
        {activeIdx === 0 && (
          <BoxUsers
            currentUserId={currentUserId}
            userData={userData}
            setActiveIdx={setActiveIdx}
            setUserData={setUserData}
            isAdmin={isAdmin}
            wardId={wardId}
          />
        )}</TabBody>
      <TabBody>
        {activeIdx === 1 &&
        (
          <MyCard userData={userData} santaId={santaId} setActiveIdx={setActiveIdx} id={cardId} />
        )}
      </TabBody>
      <TabBody style={{ alignSelf: 'center' }}>
        {activeIdx === 2 &&
        (
          <WardCard userData={userData} wardId={wardId} setActiveIdx={setActiveIdx} id={cardId} />
        )}
      </TabBody>
      <TabBody style={{ marginLeft: 340 }}>{activeIdx === 3 &&
      <MyCardCreate setUserData={setUserData} isAdmin={isAdmin} userData={userData} />}</TabBody>
      <TabBody style={{ marginLeft: 340 }}>
        {activeIdx === 4 && (
          <DrawResult isAdmin={isAdmin} setActiveIdx={setActiveIdx} userData={userData} />
        )}
      </TabBody>
    </>
  );
};

export default MyBoxTabs;
