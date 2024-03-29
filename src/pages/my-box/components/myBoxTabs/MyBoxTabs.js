import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style';
import BoxUsers from '../boxUsers/BoxUsers';
import MyCard from '../myCard/MyCard';
import WardCard from '../wardCard/WardCard';
import MyBoxSettings from '../myBoxSettings/MyBoxSettings';
import MyCardCreate from '../membersAdding/MyCardCreate';
import getBoxInfo from '../../../../API/boxInfo';
import DrawResult from '../drawResult/DrawResult';

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
    setCardId(userData?.card?.id);  // Записываем в стейт id карточки текущего юзера
    userData?.secret_santas?.forEach((item) => {
      if (currentUserId === item.id) {
        setSantaId(item.your_secret_santa_id); // Записываем в стейт секретного Санту текущего юзера
        setWardId(item.secret_santa_to_id); // Записываем в стейт подопечного текущего юзера
      }
    });
  }, [userData]);

  return (
    <>
      <TabsWrapper>
        {isAdmin && <MyBoxSettings // Если организатор, отображает настройки коробки
          setUserData={setUserData}
          setActiveIdx={setActiveIdx}
          isAdmin={isAdmin}
          currentUserId={currentUserId}
          wardId={wardId}
          card={userData?.card}
        />}
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
      <MyCardCreate setUserData={setUserData} isAdmin={isAdmin} userData={userData} setActiveIdx={setActiveIdx} />}</TabBody>
      <TabBody style={{ marginLeft: 340 }}>
        {activeIdx === 4 && (
          <DrawResult isAdmin={isAdmin} setActiveIdx={setActiveIdx} userData={userData} />
        )}
      </TabBody>
    </>
  );
};

export default MyBoxTabs;
