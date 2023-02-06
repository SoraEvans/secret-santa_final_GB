const getAllBoxes = async setBoxes => {
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
}

export default getAllBoxes