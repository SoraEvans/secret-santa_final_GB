import React from 'react'
import MyBoxMain from './style'
import MyBoxTabs from './components/MyBoxTabs/MyBoxTabs'
import BoxInfo from './components/box-info/BoxInfo'

const MyBox = () => {
  console.log('')
  return (
    <MyBoxMain>
      <BoxInfo />
      <MyBoxTabs />
    </MyBoxMain>
  )
}

export default MyBox
