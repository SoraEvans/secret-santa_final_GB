const sendInvites = async (formDetails, setFormDetails, handleClick, id) => {
  await fetch('https://backsecsanta.alwaysdata.net/api/box/sendInvites', {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify({
      emails: formDetails.map(item => ({ ...item, id }))
    })
  })
    .then(() => {
      setFormDetails([{ name: '', email: '', id: 1 }])
      handleClick()
    })
}

export default sendInvites