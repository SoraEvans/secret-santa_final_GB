const getBoxInfo = async (setBoxInfo, id) => {
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
}

export default getBoxInfo