import { useEffect, useState } from 'react'

const CustomBoxesHook = () => {
  const [boxes, setBoxes] = useState([])
  const [publicBoxes, setPublicBoxes] = useState([])

  useEffect(() => {
    fetch('https://backsecsanta.alwaysdata.net/api/box/get', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        id: localStorage.getItem('userId')
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setBoxes(response)
        }
      })
  }, [])

  useEffect(() => {
    fetch('https://backsecsanta.alwaysdata.net/api/box/othersPublicBoxes', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        user_id: localStorage.getItem('userId')
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setPublicBoxes(response.allOtherBoxes)
        }
      })
  }, [])

  return { boxes, publicBoxes }
}

export default CustomBoxesHook
