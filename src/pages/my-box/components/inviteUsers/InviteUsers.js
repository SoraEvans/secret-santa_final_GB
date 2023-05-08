import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddSharp, RemoveSharp } from '@mui/icons-material'
import { CarouselButton } from '../../../home/components/carousel/style'
import { InputWrapper, Form, AddBtn, RemoveBtn } from './style'
import { CustomInput } from '../../../../components/inputs/Inputs'
import { ModalSubTitle, ModalTitle } from '../../../../components/modal/style'
import SchemaValidation from '../../../../helpers/schemas/SchemaValidation'
import sendInvites from '../../../../API/sendInvites'
import getBoxInfo from '../../../../API/boxInfo'

// eslint-disable-next-line react/prop-types
const InviteUsers = ({ id, setUserData }) => {
  const [open, setOpen] = useState(false)
  const {
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
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
    }
  ])

  const handleChange = e => {
    const { name, value, id: targetId } = e.target
    setFormDetails(
      formDetails.map(item => {
        if (+item.id === +targetId.split('-').at(-2)) {
          item[name.split('-')[0]] = value
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

  const onSubmitHandle = async e => {
    e.preventDefault()
    if (Object.keys(errors).length) {
      return
    }
    await sendInvites(formDetails, setFormDetails, handleClick, id)
    await getBoxInfo(setUserData, id)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitHandle)}>
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
      <div style={{
        maxHeight: '300px',
        overflowY: 'auto',
        paddingTop: '15px'
      }}>
        {formDetails.map((item, index) => ( // количество отправляемых приглашений
          // eslint-disable-next-line react/no-array-index-key
          <InputWrapper key={index}>
            <CustomInput
              label="Имя участника"
              name={`name-${item.id}-${index}`}
              value={item.name || ''}
              onChange={handleChange}
              id={`name-${item.id}-${index}`}
              margin="0 23px 16px 0"
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
            <CustomInput
              label="Email"
              value={item.email || ''}
              name={`email-${item.id}-${index}`}
              type="email"
              onChange={handleChange}
              id={`email-${item.id}-${index}`}
              margin="0 0 16px"
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
            {index === formDetails.length - 1
              ? (
                <AddBtn onClick={handleAddInputs}>
                  <AddSharp fontSize="large" />
                </AddBtn>
              )
              : (
                <RemoveBtn onClick={() => handleRemoveInputs(index)}>
                  <RemoveSharp fontSize="large" />
                </RemoveBtn>
              )}
          </InputWrapper>
        ))}
      </div>
      <CarouselButton
        onClick={onSubmitHandle}
        type="submit"
        style={{
          margin: '22px auto 0',
          width: '235px',
          height: '56px',
          fontSize: '16px',
        }}
      >
        Отправить приглашение
      </CarouselButton>
    </Form>
  )
}

export default InviteUsers
