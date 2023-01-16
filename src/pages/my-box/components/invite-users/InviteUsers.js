import React, { useState } from 'react'
import { TextField, Box, Button} from '@mui/material'
import { AddSharp} from "@mui/icons-material";

const InviteUsers = () => {
  const [formDetails, setFormDetails] = useState([
    {
      name: '',
      email: ''
    }
  ])

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleAddInputs = () => {
    setFormDetails([...formDetails, {name: "", email: ""}])
  }

  const onSubmitHandle = e => {
    e.preventDefault()
    console.log(formDetails)
  }

  return (
    <form onSubmit={onSubmitHandle}>
      {formDetails.map(item => (
        <Box sx={{display: "flex", alignItems: "center"}} >
          <TextField
            name="name"
            label="Имя участника"
            value={item.name || ''}
            size="small"
            sx={{ marginRight: '12px' }}
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            value={item.email || ''}
            size="small"
            type="email"
            margin="normal"
            onChange={handleChange}
          />
          <Button type="submit"  sx={{minWidth: "40px", height:  "40px"}}  onClick={handleAddInputs}>
            <AddSharp/>
          </Button>
        </Box>
      ))}
      <Button
        type="submit"
        variant="contained"
        sx={{ textTransform: 'none', backgroundColor: '#FF5539' }}
      >
        Отправить приглашение
      </Button>
    </form>
  )
}

export default InviteUsers
