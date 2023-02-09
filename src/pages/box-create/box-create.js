import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cover from '../../components/CoverCarousel/Cover'
import BOX_CREATE_IMG from '../../constants/box-create-img'
import {
  Head,
  Title,
  Container,
  SubTitle,
  Input,
  Div,
  Label,
  P,
  // CoverButton,
  DivInput,
  CoverDiv,
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
import tree from '../../assets/images/elTree1.svg'

const BoxCreate = () => {
  const [state, setState] = useState({
    title: '',
    cover: 'img',
    isAnonym: false,
    email: false,
    isPublic: false,
    max_people_in_box: null,
    draw_starts_at: null,
    isLimit: false,
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
        cover: tree,
        isAnonym: state.isAnonym,
        email: state.email,
        isPublic: state.isPublic,
        max_people_in_box: state.max_people_in_box,
        draw_starts_at: state.draw_starts_at,
        isLimit: state.isLimit,
        cost: state.cost,
        creator_id: localStorage.getItem('userId'),
        currency: state.currency
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
        <CoverDiv>
          <P style={{ marginBottom: '11px' }}>Обложка коробки</P>
          <Cover fu={setState} state={state} img={BOX_CREATE_IMG} />
        </CoverDiv>
        <Div>
          <div>
            <P>Анонимность участников</P>
            <SubTitleBoxCreated>
              При включенной опции участники будут видеть имена других игроков.
              Когда опция выключена, участники будут видеть только аватарки
              игроков и имя своего подопечного. Организатор будет видеть имена
              игроков вне зависимости от состояния опции.
            </SubTitleBoxCreated>
          </div>
          <AntSwitch
            checked={state.isAnonym}
            name="isAnonym"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <Div>
          <div>
            <P>Добавить в карточку почтовый адрес</P>
            <SubTitleBoxCreated>
              При включенной опции участникам нужно будет указать свой почтовый
              адрес в карточке.
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
            state.isPublic ? { marginBottom: '38px' } : { marginBottom: '38px' }
          }
        >
          <div>
            <P>Сделать коробку публичной</P>
            <SubTitleBoxCreated>
              При включенной опции к вашей коробке смогут присоединиться
              случайные пользователи. Необходимо будет указать максимальное
              число участников для коробки, а также выбрать дату автомвтического
              проведения жеребьевки. Жеребьевка будет проведена независимо от
              достижения максимума участников.
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
            <DivInput style={{ marginBottom: '0' }}>
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
              state.isLimit
                ? { marginBottom: '20px' }
                : { marginBottom: '38px' }
            }
          >
            <div>
              <P>Ограничить стоимость подарков</P>
              <SubTitleBoxCreated>
                При включенной опции участникам будет показано ограничение,
                которому они должны будут следовать. Ограничение будет показано
                на странице подопечного
              </SubTitleBoxCreated>
            </div>
            <AntSwitch
              checked={state.isLimit}
              name="isLimit"
              onChange={handleChangeSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Div>
          {state.isLimit ? (
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
          <CreateButton type="button" onClick={() => onSubmit(state)}>
            Создать коробку
          </CreateButton>
        </ButtonsDiv>
      </div>
    </Container>
  )
}

export default BoxCreate
