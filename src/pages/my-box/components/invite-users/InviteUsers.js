import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddSharp, RemoveSharp } from '@mui/icons-material'
import { CarouselButton } from '../../../home/components/carousel/style'
import { InputWrapper, Form, AddBtn, RemoveBtn } from './style'
import { CustomInput } from '../../../../components/Inputs/Inputs'
import { ModalSubTitle, ModalTitle } from '../../../../components/modal/style'
import SchemaValidation from '../../../../helpers/schemas/SchemaValidation'

const InviteUsers = () => {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SchemaValidation)
  })

  const handleClick = () => {
    setOpen(true)
  }
  const [formDetails, setFormDetails] = useState([
    {
      name: '',
      email: '',
      id: 1
      // nameError: false,
      // emailError: false
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

  // const formValidate = () => {
  //   let nameError = false
  //   let emailError = false
  //
  //   formDetails.forEach(item => {
  //     if (!item.name) {
  //       nameError = true
  //     }
  //     if (!item.email || !/\S+@\S+\.\S+/.test(item.email)) {
  //       emailError = true
  //     }
  //   })
  //   setFormDetails(
  //     formDetails.map(item => ({
  //       ...item,
  //       nameError,
  //       emailError
  //     }))
  //   )
  //
  //   return !(nameError || emailError)
  // }

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

  const onSubmitHandle = async e => {
    e.preventDefault()
    if (!errors) {
      return
    }
    await fetch('https://backsecsanta.alwaysdata.net/api/box/sendInvites', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        emails: formDetails.map(item => ({ ...item, id: 1 }))
      })
    }).then(() => {
      setFormDetails([{ name: '', email: '', id: 1 }])
      handleClick()
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitHandle)}>
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
        <ModalTitle>Добавление участников</ModalTitle>
        <ModalSubTitle>
          Заполните данные участников, чтобы создать их карточки, и отправьте им
          на почту приглашения в игру
        </ModalSubTitle>
        <div>
          {formDetails.map((item, index) => (
            <InputWrapper>
              <CustomInput
                {...register('name')}
                label="Имя участника"
                value={item.name || ''}
                onChange={handleChange}
                id={item.id}
                margin="0 23px 16px 0"
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
              <CustomInput
                {...register('email')}
                label="Email"
                value={item.email || ''}
                type="email"
                onChange={handleChange}
                id={item.id}
                margin="0 0 16px"
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              {index === formDetails.length - 1 ? (
                <AddBtn onClick={handleAddInputs}>
                  <AddSharp fontSize="large" />
                </AddBtn>
              ) : (
                <RemoveBtn onClick={() => handleRemoveInputs(index)}>
                  <RemoveSharp fontSize="large" />
                </RemoveBtn>
              )}
            </InputWrapper>
          ))}
        </div>
      </Form>
      <CarouselButton
        onClick={onSubmitHandle}
        type="submit"
        style={{ margin: '0 80px 0 0', width: 186, height: 45, fontSize: 13 }}
      >
        Отправить приглашение
      </CarouselButton>
    </>
  )
}

export default InviteUsers
