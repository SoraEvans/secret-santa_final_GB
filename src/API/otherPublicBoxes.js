const getOtherPublicBoxes = async setNonAlignedBoxes => {
  await fetch('https://backsecsanta.alwaysdata.net/api/box/othersPublicBoxes', {
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
        setNonAlignedBoxes(response.allOtherBoxes)
      }
    })
}

export default getOtherPublicBoxes