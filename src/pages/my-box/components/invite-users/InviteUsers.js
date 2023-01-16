import React, { useState } from 'react'
import { TextField, Box, Button, Snackbar, Alert } from '@mui/material'
import { AddSharp } from '@mui/icons-material'
import { CarouselButton } from '../../../home/components/carousel/style'

const InviteUsers = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const [formDetails, setFormDetails] = useState([
    {
      name: '',
      email: '',
      id: 1
    }
  ])

  const handleChange = e => {
    const { name, value, id: targetId } = e.target
    setFormDetails(formDetails.map((item) => {
      if (+item.id === +targetId) {
        item[name] = value
        return item
      }
      return item
    }))
  }

  const handleAddInputs = () => {
    setFormDetails([...formDetails, { name: "", email: "", id: formDetails.length + 1 }])
  }

  const onSubmitHandle = e => {
    e.preventDefault()
    handleClick()
    console.log(formDetails)
  }

  return (
    <form onSubmit={onSubmitHandle}>
      {/* todo Сделать уведомление по макету (сейчас заглушка) */}
      <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Приглашения успешно отправлены!
        </Alert>
      </Snackbar>
      {formDetails.map(item => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            name="name"
            label="Имя участника"
            value={item.name || ''}
            size="small"
            sx={{ marginRight: '12px' }}
            margin="normal"
            onChange={handleChange}
            id={item.id}
          />
          <TextField
            name="email"
            label="Email"
            value={item.email || ''}
            size="small"
            type="email"
            margin="normal"
            onChange={handleChange}
            id={item.id}
          />
          <Button type="submit" sx={{ minWidth: "40px", height: "40px" }} onClick={handleAddInputs}>
            <AddSharp />
          </Button>
        </Box>
      ))}
      <CarouselButton type="submit" style={{ margin: 0, width: 186, height: 45, fontSize: 13 }}>
        Отправить приглашение
      </CarouselButton>
    </form>
  )
}

export default InviteUsers
