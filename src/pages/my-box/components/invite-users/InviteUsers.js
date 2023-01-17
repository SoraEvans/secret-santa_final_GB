import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { AddSharp, RemoveSharp } from '@mui/icons-material'
import { CarouselButton } from '../../../home/components/carousel/style'
import { InputWrapper, Form, Input, AddBtn, RemoveBtn } from './style'

const InviteUsers = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const [formDetails, setFormDetails] = useState([
    {
      name: '',
      email: '',
      id: 1
    }
  ])

  const handleChange = e => {
    const { name, value, id: targetId } = e.target
    setFormDetails(
      formDetails.map(item => {
        if (+item.id === +targetId) {
          item[name] = value
          return item
        }
        return item
      })
    )
  }

  const handleAddInputs = () => {
    setFormDetails([
      ...formDetails,
      { name: '', email: '', id: formDetails.length + 1 }
    ])
  }

  const handleRemoveInputs = index => {
    const newFormDetails = formDetails.filter((item, idx) => idx !== index)
    setFormDetails(newFormDetails)
  }

  const onSubmitHandle = e => {
    e.preventDefault()
    setFormDetails([{ name: '', email: '', id: 1 }])
    handleClick()
    console.log(formDetails)
  }

  return (
    <Form onSubmit={onSubmitHandle}>
      {/* todo Сделать уведомление по макету (сейчас заглушка) */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Приглашения успешно отправлены!
        </Alert>
      </Snackbar>
      {formDetails.map((item, index) => (
        <InputWrapper>
          <Input
            name="name"
            placeholder="Имя участника"
            value={item.name || ''}
            // size="small"
            // sx={{ marginRight: '12px' }}
            onChange={handleChange}
            id={item.id}
          />
          <Input
            name="email"
            placeholder="Email"
            value={item.email || ''}
            // size="small"
            type="email"
            onChange={handleChange}
            id={item.id}
          />
          {index === formDetails.length - 1 ? (
            <AddBtn onClick={handleAddInputs}>
              <AddSharp />
            </AddBtn>
          ) : (
            <RemoveBtn onClick={() => handleRemoveInputs(index)}>
              <RemoveSharp />
            </RemoveBtn>
          )}
        </InputWrapper>
      ))}
      <CarouselButton
        type="submit"
        style={{ margin: 0, width: 186, height: 45, fontSize: 13 }}
      >
        Отправить приглашение
      </CarouselButton>
    </Form>
  )
}

export default InviteUsers
