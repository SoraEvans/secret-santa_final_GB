import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Divider } from '@mui/material'
import PropTypes from 'prop-types'
import SchemaValidation from '../../../../helpers/schemas/SchemaValidation'
import avatar_1 from '../../../../assets/images/avatar_1.svg'
import avatar_2 from '../../../../assets/images/avatar_2.svg'
import avatar_3 from '../../../../assets/images/avatar_3.svg'
import santa_with_children from '../../../../assets/images/santa_with_children.svg'
import snowman from '../../../../assets/images/snowman.svg'
import {
  AvatarImg,
  AvatarList,
  CreateCardWrapper,
  DeleteCardBtn,
  ErrorImg,
  ErrorText,
  ErrorWrapper,
  FormLabel,
  InputSection
} from './style'
import BoxInfo from '../box-info/BoxInfo'
import { CustomInput } from '../../../../components/Inputs/Inputs'
import { CarouselButton } from '../../../home/components/carousel/style'
import Modal from '../../../../components/modal/modal'
import { ModalTitle } from '../../../../components/modal/style'
import { CancelButton, DeleteButton, ModalButtons } from '../MyBoxSettings/style'

const MyCardCreate = ({ userData, isAdmin }) => {
  const [cardCreated, setCardCreated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userValues, setUserValues] = useState({})
  const [avatar, setAvatar] = useState('')
  const { secret_santas_ward, box, secret_santas, card } = userData
  const choosenUser = JSON.parse(localStorage.getItem('chosenUser'))
  console.log('card', card)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SchemaValidation),
    defaultValues: {
      name: '',
      email: ''
    }
  })
  const { id } = useParams()

  useEffect(() => {
    setUserValues(isAdmin ? { name: '', email: '' } : { name: '', email: '' })
  }, [])

  const onCreateCard = async data => {
    data.preventDefault()
    if (isAdmin) {
      await fetch('https://backsecsanta.alwaysdata.net/api/box/createCard', {
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          box_id: id,
          user_id: box.creator_id,
        })
      })
    }
    setCardCreated(true)
    console.log(data, errors)
  }

  const deleteCard = () => {
    setCardCreated(false)
  }

  const updateCard = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/api/card/update', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: userValues.name,
        email: userValues.email,
        image: avatar,
        box_id: id,
        user_id: choosenUser.id,
      })
    })
  }
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const drawDone = Object.keys(secret_santas_ward || {}).length;

  if (drawDone) {
    return (
      <ErrorWrapper>
        <ErrorText>
          Вы не можете создать карточку участника, так как жеребьевка уже была
          проведена(
        </ErrorText>
        <ErrorImg>
          <img src={santa_with_children} alt="santa" />
        </ErrorImg>
      </ErrorWrapper>
    )
  }

  return (
    <>
      {userData && box?.title ? (
        <BoxInfo
          title={box.title}
          cover={box.cover}
          userCount={secret_santas.length}
        />
      ) : (
        <p>Моя коробка</p>
      )}
      <CreateCardWrapper>
        <h3>Настройки карточки участника</h3>
        {cardCreated
          ?
          <FormLabel>
            Ваша карточка участника создана. Можете перейти в коробку для проведения жеребьевки или удалить свою
            карточку
          </FormLabel>
          :
          <FormLabel>
            Создайте карточку участника для себя, если хотите принимать участие в
            жеребьевке
          </FormLabel>}
        <form onSubmit={handleSubmit(onCreateCard)}>
          <InputSection>
            <CustomInput
              type="text"
              label="Ваше имя или никнейм"
              value={userValues.name}
              margin="16px 0"
              {...register('name')}
              onChange={(e) => {
                setUserValues(prevState => ({ ...prevState, name: e.target.value }))
              }}
            />
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
            <CustomInput
              type="text"
              label="Ваш e-mail"
              value={userValues.email}
              {...register('email')}
              onChange={(e) => {
                setUserValues(prevState => ({ ...prevState, email: e.target.value }))
              }}
            />
            <p style={{color: 'red'}}>{errors.email?.message}</p>
          </InputSection>
          <FormLabel>Выберите аватар</FormLabel>
          <AvatarList>
            <AvatarImg onClick={() => setAvatar(avatar_1)}>
              <img src={avatar_1} alt='avatar1' />
            </AvatarImg>
            <AvatarImg onClick={() => setAvatar(avatar_2)}>
              <img src={avatar_2} alt='avatar2' />
            </AvatarImg>
            <AvatarImg onClick={() => setAvatar(avatar_3)}>
              <img src={avatar_3} alt='avatar3' />
            </AvatarImg>
          </AvatarList>
          {cardCreated || !isAdmin
            ?
            <div>
              <CarouselButton
                type='button'
                onClick={updateCard}
                style={{ margin: 0, width: 150, height: 45, fontSize: 13 }}
              >
                Сохранить изменения
              </CarouselButton>
              <Divider style={{ marginTop: 40 }} />
              <DeleteCardBtn type="button" onClick={openModal}>Удалить мою карточку участника</DeleteCardBtn>
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <ModalTitle>Вы уверены, что хотите удалить свою карточку участника?</ModalTitle>
                <ModalButtons>
                  <CancelButton onClick={() => setShowModal(prev => !prev)}>
                    Отмена
                  </CancelButton>
                  <DeleteButton onClick={deleteCard}>Удалить</DeleteButton>
                </ModalButtons>
                <img src={snowman} alt="box" />
              </Modal>
            </div>
            :
            <CarouselButton
              type='submit'
              onClick={onCreateCard}
              style={{ margin: 0, width: 150, height: 45, fontSize: 13 }}
            >
              Создать карточку
            </CarouselButton>
          }
        </form>
      </CreateCardWrapper>
    </>
  )
}

export default MyCardCreate

MyCardCreate.defaultProps = {
  userData: {},
}

MyCardCreate.propTypes = {
  userData: PropTypes.object,
  isAdmin: PropTypes.bool
}