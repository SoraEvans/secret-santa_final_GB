import { useEffect, useState } from 'react'

const CustomBoxesHook = () => {
  const [boxes, setBoxes] = useState([])

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

  return boxes
}

export default CustomBoxesHook