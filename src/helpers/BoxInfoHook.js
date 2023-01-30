import { useEffect, useState } from 'react'

const BoxInfoHook = (id) => {

  const [boxInfo, setBoxInfo] = useState([])

  useEffect(() => {
    fetch('https://backsecsanta.alwaysdata.net/api/box/info', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id,
        user_id: localStorage.getItem('userId')
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setBoxInfo(response)
        }
      })
  }, [])

  return boxInfo
}

export default BoxInfoHook