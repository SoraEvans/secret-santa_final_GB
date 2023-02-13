import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Divider, Slide, Snackbar } from '@mui/material'
import PropTypes from 'prop-types'
import SchemaValidation from '../../../../helpers/schemas/SchemaValidation'
import santa_with_children from '../../../../assets/images/santa_with_children.svg'
import snowman from '../../../../assets/images/snowman.svg'
import {
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
import { CoverDiv } from '../../../box-create/style'
import Cover from '../../../../components/CoverCarousel/Cover'
import USER_CREATE_IMG from "../../../../constants/user-create-img"
import getBoxInfo from "../../../../API/boxInfo";

const TransitionLeft = (props) => <Slide {...props} direction="right" />

const MyCardCreate = ({ userData, isAdmin, setUserData, setActiveIdx }) => {
  const [showModal, setShowModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [userValues, setUserValues] = useState({})

  const { secret_santas_ward, box, secret_santas, card } = userData
  const choosenUser = JSON.parse(localStorage.getItem('chosenUser'))
  const {
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(SchemaValidation),
    defaultValues: {
      name: '',
      email: '',
      image: null
    }
  })
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    setUserValues(typeof card !== 'object' ? { name: '', email: '' } : choosenUser)
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onCreateCard = async () => {
    if (isAdmin) {
      await fetch('https://backsecsanta.alwaysdata.net/api/box/createCard', {
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          box_id: id,
          user_id: box.creator_id,
          image: userValues?.cover || choosenUser.image,
        })
      })
        .then(() => {
          setOpen(true)
          getBoxInfo(setUserData, id)
        })
    }
  }

  const deleteCard = async () => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/card/delete/${choosenUser?.card_id || card?.id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify()
    })
      .then(() => {
        getBoxInfo(setUserData, id)
        if (choosenUser?.card_id === card?.id && !isAdmin) {
          navigate('/boxes')
        } else setActiveIdx(0)
      })
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
        image: userValues?.cover || choosenUser.image,
        box_id: id,
        user_id: choosenUser.id,
      })
    })
      .then(() => {
        setOpen(true)
        getBoxInfo(setUserData, id)
      })
  }

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const validCard = Object.keys(card || {}).length || choosenUser?.card_id

  if (!card && secret_santas_ward.length) {
    return (
      <>
        {userData && box?.title ? (
          <BoxInfo
            title={box.title}
            cover={box.cover}
            userCount={secret_santas.length}
            isAdmin={isAdmin}
          />
        ) : (
          <p>Моя коробка</p>
        )}
        <ErrorWrapper>
          <ErrorText>
            Вы не можете создать карточку участника, так как жеребьевка уже была
            проведена(
          </ErrorText>
          <ErrorImg>
            <img src={santa_with_children} alt="santa" />
          </ErrorImg>
        </ErrorWrapper>
      </>
    )
  }

  return (
    <>
      {userData && box?.title ? (
        <BoxInfo
          title={box.title}
          cover={box.cover}
          userCount={secret_santas.length}
          isAdmin={isAdmin}
        />
      ) : (
        <p>Моя коробка</p>
      )}
      <CreateCardWrapper>
        <h3>Настройки карточки участника</h3>
        {isAdmin && (validCard
          ?
          <FormLabel style={{ marginBottom: 10 }}>
            Ваша карточка участника создана. Можете перейти в коробку для проведения жеребьевки или удалить свою
            карточку
          </FormLabel>
          :
          <FormLabel style={{ marginBottom: 10 }}>
            Создайте карточку участника для себя, если хотите принимать участие в
            жеребьевке
          </FormLabel>)}
        <form onSubmit={handleSubmit(onCreateCard)}>
          <InputSection>
            <CustomInput
              type="text"
              label="Ваше имя или никнейм"
              value={userValues.name}
              margin="16px 0"
              onChange={(e) => {
                setUserValues(prevState => ({ ...prevState, name: e.target.value }))
              }}
            />
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
            <CustomInput
              type="text"
              label="Ваш e-mail"
              value={userValues.email}
              onChange={(e) => {
                setUserValues(prevState => ({ ...prevState, email: e.target.value }))
              }}
            />
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          </InputSection>
          <CoverDiv style={{ margin: 0 }}>
            <FormLabel style={{ marginBottom: 10 }}>Выберите аватар</FormLabel>
            <Cover fu={setUserValues} state={userValues} img={USER_CREATE_IMG} avatar />
          </CoverDiv>
          {validCard
            ?
            <div style={{ position: 'relative', width: 300 }}>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                TransitionComponent={TransitionLeft}
              >
                <Alert severity="success" sx={{ width: '100%' }}>
                  Информация успешно обновлена!
                </Alert>
              </Snackbar>
              <CarouselButton
                type='button'
                onClick={updateCard}
                style={{ margin: 0, width: 182, height: 45, fontSize: 14 }}
              >
                Сохранить изменения
              </CarouselButton>
              <Divider style={{ marginTop: 28 }} />
              {!secret_santas_ward.length &&
              <DeleteCardBtn type="button" onClick={openModal}>Удалить карточку участника</DeleteCardBtn>}
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <ModalTitle>Вы уверены, что хотите удалить карточку участника?</ModalTitle>
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
  isAdmin: PropTypes.bool,
  setUserData: PropTypes.func,
  setActiveIdx: PropTypes.func
}