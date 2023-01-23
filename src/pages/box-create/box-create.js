import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Head,
  Title,
  Container,
  SubTitle,
  Input,
  Div,
  Label,
  P,
  CoverButton,
  DivInput,
  Cover,
  SmallInput,
  SmallLabel,
  CancellButton,
  CreateButton,
  ButtonsDiv,
  Select,
  CostDiv,
  CostInput,
  AntSwitch,
  SubTitleBoxCreated
} from './style'

const BoxCreate = () => {
  const [state, setState] = useState({
    title: '',
    cover: 'img',
    anonymous: false,
    email: false,
    isPublic: false,
    max_people_in_box: null,
    draw_starts_at: null,
    limit: false,
    cost: null,
    currency: 'RUB'
  })

  const navigate = useNavigate()

  const onSubmit = async state => {
    await fetch('https://backsecsanta.alwaysdata.net/api/box/create', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        title: state.title,
        cover: state.cover,
        // anonymous: state.anonymous, // отсутствует в бд
        email: state.email,
        isPublic: state.isPublic,
        max_people_in_box: state.max_people_in_box,
        draw_starts_at: state.draw_starts_at,
        cost: state.cost,
        creator_id: localStorage.getItem('userId')
        // currency: state.currency // отсутствует в бд
      })
    })
      // .then(response => response.text()) // Проверка ответа
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          localStorage.setItem('isBoxCreated', true)
          navigate('/box-created')
        }
      })
  }

  const handleChangeForm = event => {
    const field = event.target.getAttribute('data-name')
    setState({
      ...state,
      [field]: event.target.value
    })
  }
  const handleChangeSwitch = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }
  return (
    <Container>
      <Head>
        <Title>Создание коробки</Title>
        <SubTitle>Настройте свою коробку за несколько простых шагов</SubTitle>
      </Head>
      <div>
        <DivInput>
          <Input
            required
            data-name="title"
            id="title"
            type="text"
            onChange={handleChangeForm}
          />
          <Label for="title">Название коробки</Label>
        </DivInput>
        <Cover>
          <P>Обложка коробки</P>
          <CoverButton
            data-name="cover"
            onClick={handleChangeForm}
            type="button"
          >
            +
          </CoverButton>
        </Cover>
        <Div>
          <div>
            <P>Анонимность участников</P>
            <SubTitleBoxCreated>
              При включенной опции участники будут видеть имена других
              игроков. Когда опция выключена, участники будут видеть только
              аватарки игроков и имя своего подопечного. Организатор будет
              видеть имена игроков вне зависимости от состояния опции.
            </SubTitleBoxCreated>
          </div>
          <AntSwitch
            checked={state.anonymous}
            name="anonymous"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <Div>
          <div>
            <P>Добавить в карточку почтовый адрес</P>
            <SubTitleBoxCreated>
              При включенной опции участникам нужно будет указать свой
              почтовый адрес в карточке.
            </SubTitleBoxCreated>
          </div>

          <AntSwitch
            checked={state.email}
            name="email"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <Div
          style={
            state.isPublic
              ? { marginBottom: '38px' }
              : { marginBottom: '85px' }
          }
        >
          <div>
            <P>Сделать коробку публичной</P>
            <SubTitleBoxCreated>
              При включенной опции к вашей коробке смогут присоединиться
              случайные пользователи. Необходимо будет указать максимальное
              число участников для коробки, а также выбрать дату
              автомвтического проведения жеребьевки. Жеребьевка будет
              проведена независимо от достижения максимума участников.
            </SubTitleBoxCreated>
          </div>
          <AntSwitch
            checked={state.isPublic}
            name="isPublic"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        {state.isPublic ? (
          <div>
            <DivInput>
              <SmallInput
                required
                data-name="max_people_in_box"
                id="max_people_in_box"
                type="number"
                min="0"
                onChange={handleChangeForm}
              />
              <SmallLabel for="max_people_in_box">
                Введите максимальное количество участников
              </SmallLabel>
            </DivInput>
            <DivInput>
              <SmallInput
                required
                data-name="draw_starts_at"
                id="draw_starts_at"
                type="date"
                min="2022-12-01"
                onChange={handleChangeForm}
              />
              <SmallLabel for="draw_starts_at">
                Выберите дату проведения автоматической жеребьевки
              </SmallLabel>
            </DivInput>
          </div>
        ) : null}
        <div>
          <Div
            style={
              state.limit
                ? { marginBottom: '20px' }
                : { marginBottom: '85px' }
            }
          >
            <div>
              <P>Ограничить стоимость подарков</P>
              <SubTitleBoxCreated>
                При включенной опции участникам будет показано ограничение,
                которому они должны будут следовать. Ограничение будет
                показано на странице подопечного
              </SubTitleBoxCreated>
            </div>
            <AntSwitch
              checked={state.limit}
              name="limit"
              onChange={handleChangeSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Div>
          {state.limit ? (
            <CostDiv>
              <CostInput
                required
                data-name="cost"
                type="number"
                min="0"
                onChange={handleChangeForm}
              />
              <Select data-name="currency" onChange={handleChangeForm}>
                <option value="RUB">RUB</option>
                <option value="EUR">EUR</option>
              </Select>
            </CostDiv>
          ) : null}
        </div>
        <ButtonsDiv>
          <CancellButton type="button" onClick={() => navigate('/boxes')}>
            Отмена
          </CancellButton>
          <CreateButton
            type="button"
            onClick={() => onSubmit(state)}
          >
            Создать коробку
          </CreateButton>
        </ButtonsDiv>
      </div>
    </Container>
  )
}

export default BoxCreate
