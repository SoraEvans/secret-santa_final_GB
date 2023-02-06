import React from 'react'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Container from '../../components/style_cont'
import {
  PageBackground,
  StyledLink,
  InputSection,
  InputSectionTitle,
  ProfileButton,
  ProfileForm,
  ProfileSwitch,
  ProfileTop,
  SwitchSection,
  SwitchText,
  RemoveDesc
} from './styles'
import { CustomInput } from '../../components/Inputs/Inputs'
import SchemaValidation from '../../helpers/schemas/SchemaValidation'

function Profile() {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.clear()
    navigate('/')
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SchemaValidation)
  })

  const onSubmit = data => {
    console.log('submit', data)
  }

  console.log(watch(['name', 'email']))
  return (
    <PageBackground>
      <Container>
        <div style={{ padding: '57px 220px 0' }}>
          <ProfileTop>
            <h2>Настройки профиля</h2>
            <StyledLink onClick={() => logOut()}>Выйти с сайта</StyledLink>
          </ProfileTop>
          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <Divider />
            <InputSectionTitle>Личные данные</InputSectionTitle>
            <InputSection>
              <CustomInput
                {...register('name')}
                id="first"
                type="text"
                label="Ваше имя или никнейм"
                margin="0 0 24px"
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
              <CustomInput
                {...register('email')}
                id="second"
                type="email"
                label="Ваш e-mail"
                margin="0 0 24px"
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            </InputSection>
            <Divider />
            <InputSectionTitle>Уведомления</InputSectionTitle>
            <SwitchSection>
              <SwitchText>
                <h4>E-mail</h4>
                <p>
                  При включенной опции уведомления будут приходить на email
                  адрес, указанный выше
                </p>
              </SwitchText>
              <ProfileSwitch />
            </SwitchSection>
            <Divider />
            <InputSectionTitle>Смена пароля</InputSectionTitle>
            <InputSection>
              <CustomInput
                {...register('password')}
                id="pass"
                type="password"
                label="Новый пароль"
                margin="0 0 24px"
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
              <CustomInput
                {...register('confirmPassword')}
                id="confirmPassword"
                type="password"
                label="Подтвердите пароль"
                margin="0 0 24px"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            </InputSection>
            <ProfileButton type="submit">Сохранить изменения</ProfileButton>
            <Divider />
            <InputSectionTitle>Удаление профиля</InputSectionTitle>
            <RemoveDesc>
              ВАЖНО: После удаления профиля, ваши карточки во всех коробках
              будут удалены
            </RemoveDesc>
          </ProfileForm>
          <ProfileButton type="submit">Удалить профиль</ProfileButton>
        </div>
      </Container>
    </PageBackground>
  )
}

export default Profile
