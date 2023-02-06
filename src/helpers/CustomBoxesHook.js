import { useEffect, useState } from 'react'
import getAllBoxes from '../API/boxGet'
import getOtherPublicBoxes from '../API/otherPublicBoxes'

const CustomBoxesHook = () => {
  const [boxes, setBoxes] = useState([])
  const [publicBoxes, setPublicBoxes] = useState([])

  useEffect(() => {
    getAllBoxes(setBoxes)
  }, [])

  useEffect(() => {
    getOtherPublicBoxes(setPublicBoxes)
  }, [])

  return { boxes, publicBoxes }
}

export default CustomBoxesHook
