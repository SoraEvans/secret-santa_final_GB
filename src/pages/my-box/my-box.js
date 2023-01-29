import React from 'react'
import MyBoxMain from './style'
import MyBoxTabs from './components/MyBoxTabs/MyBoxTabs'
import BoxInfo from './components/box-info/BoxInfo'

const MyBox = () => (
  <MyBoxMain>
    <BoxInfo />
    <MyBoxTabs />
  </MyBoxMain>
)

export default MyBox
