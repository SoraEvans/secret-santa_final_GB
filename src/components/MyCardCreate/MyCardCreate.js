import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Divider } from '@mui/material'
import PropTypes from 'prop-types'
import SchemaValidation from '../../helpers/schemas/SchemaValidation'
import avatar_1 from '../../assets/images/avatar_1.svg'
import avatar_2 from '../../assets/images/avatar_2.svg'
import avatar_3 from '../../assets/images/avatar_3.svg'
import avatar_4 from '../../assets/images/avatar_4.svg'
import santa_with_children from '../../assets/images/santa_with_children.svg'
import snowman from '../../assets/images/snowman.svg'

import {
  AddAvatarButton,
  AvatarImg,
  AvatarList,
  CreateCardWrapper,
  DeleteCardBtn,
  ErrorImg,
  ErrorText,
  ErrorWrapper,
  FormLabel,
  Input,
  InputSection
} from './style'
import { CarouselButton } from '../../pages/home/components/carousel/style'
import BoxInfoHook from '../../helpers/BoxInfoHook'
import Modal from '../modal/modal'
import { ModalTitle } from '../modal/style'
import {
  CancelButton,
  DeleteButton,
  ModalButtons
} from '../../pages/my-box/components/MyBoxSettings/style'

const MyCardCreate = ({ userData }) => {
  const [cardCreated, setCardCreated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userValues, setUserValues] = useState({})
  const [avatar, setAvatar] = useState('')
  const { secret_santas_ward, box, secret_santas } = userData
  const choosenUser = JSON.parse(localStorage.getItem('chosenUser'))
  const isAdmin = box.creator_id === choosenUser.id
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
  const boxInfo = BoxInfoHook(id)
  let adminId
  let isAdmin = true
  if (boxInfo.box && boxInfo.box.creator_id) {
    adminId = boxInfo.box.creator_id
    isAdmin = Boolean(adminId.toString() === localStorage.getItem('userId'))
  }

  const onCreateCard = data => {
    data.preventDefault()
    setCardCreated(true)
    console.log(data, errors)
  }
  const deleteCard = () => {
    setCardCreated(false)
  }

  const updateCard = async () => {
    console.log('Данные обновлены')
  }

  /*
  const updateCard = async () => {
    await fetch('https://backsecsanta.alwaysdata.net/card/update', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: 'Test',
        email: 'test@test.com',
        image: 'random.image.ru',
        user_id: 20,
        box_id: 92,
      })
    })
  }
*/

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const fileRef = useRef(null)
  const secretSantasWards = boxInfo.secret_santas_ward
  const drawDone = Object.keys(secretSantasWards || {}).length

  const user = {
    name: 'Имя',
    email: 'blabla@mail.ru'
  }

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
            <Input
              type="text"
              placeholder="Ваше имя или никнейм"
              {...register('name')}
            />
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
            <Input
              type="text"
              placeholder="Ваш e-mail"
              {...register('email')}
            />
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          </InputSection>
        ) : (
          <InputSection>
            <Input
              type="text"
              placeholder="Ваше имя или никнейм"
              value={user.name}
            />
            <Input type="text" placeholder="Ваш e-mail" value={user.email} />
          </InputSection>
        )}
        <FormLabel>Выберите аватар</FormLabel>
        <AvatarList>
          <AvatarImg>
            <img src={avatar_1} alt="avatar1" />
          </AvatarImg>
          <AvatarImg>
            <img src={avatar_2} alt="avatar2" />
          </AvatarImg>
          <AvatarImg>
            <img src={avatar_3} alt="avatar3" />
          </AvatarImg>
          <input
            type="file"
            accept="image/png,image/jpeg,image/gif"
            style={{ display: 'none' }}
            ref={fileRef}
          />
          <AddAvatarButton onClick={() => fileRef.current?.click()}>
            <img src={avatar_4} alt="avatar4" />
          </AddAvatarButton>
        </AvatarList>
        {cardCreated ? (
          <div>
            <CarouselButton
              type="button"
              onClick={updateCard}
              style={{ margin: 0, width: 150, height: 45, fontSize: 13 }}
            >
              Сохранить изменения
            </CarouselButton>

            <Divider style={{ marginTop: 40 }} />

            <DeleteCardBtn type="button" onClick={openModal}>
              Удалить мою карточку участника
            </DeleteCardBtn>
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <ModalTitle>
                Вы уверены, что хотите удалить свою карточку участника?
              </ModalTitle>
              <ModalButtons>
                <CancelButton onClick={() => setShowModal(prev => !prev)}>
                  Отмена
                </CancelButton>
                <DeleteButton onClick={deleteCard}>Удалить</DeleteButton>
              </ModalButtons>
              <img src={snowman} alt="box" />
            </Modal>
          </div>
        ) : (
          <CarouselButton
            type="submit"
            onClick={onCreateCard}
            style={{ margin: 0, width: 150, height: 45, fontSize: 13 }}
          >
            Создать карточку
          </CarouselButton>
        )}
      </form>
    </CreateCardWrapper>
  )
}

export default MyCardCreate

MyCardCreate.defaultProps = {
  userData: {},
}

MyCardCreate.propTypes = {
  userData: PropTypes.object,
}