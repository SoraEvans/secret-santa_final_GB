import React from 'react'
import { BoxTitleInner, BoxTitleText, MyBoxMain } from './style'
import MyBoxTabs from './components/MyBoxTabs/MyBoxTabs'
import DB from '../../constants/db'

const MyBox = () => (
  <MyBoxMain>
    <BoxTitleInner>
      <img src={DB.boxes[0].cover} alt="" />
      <BoxTitleText>
        <h4>{DB.boxes[0].title}</h4>
        <span>{`${DB.users.length} участников`}</span>
      </BoxTitleText>
    </BoxTitleInner>
    <MyBoxTabs />
  </MyBoxMain>
)

export default MyBox
