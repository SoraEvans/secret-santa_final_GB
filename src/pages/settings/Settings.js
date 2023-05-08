import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Cover from '../../components/coverCarousel/Cover'
import BOX_CREATE_IMG from '../../constants/boxCreateImg'
import {
  Head,
  Title,
  Container,
  Input,
  Div,
  Label,
  P,
  // CoverButton,
  DivInput,
  CoverDiv,
  CancellButton,
  CreateButton,
  ButtonsDiv,
  Select,
  CostDiv,
  CostInput,
  AntSwitch,
  SubTitleBoxCreated,
  Hr
} from './style'
import { BackImage } from "../boxCreate/style";

const Settings = () => {
  const [state, setState] = useState({
    title: '',
    cover: null,
    isAnonym: false,
    email: false,
    max_people_in_box: '',
    draw_starts_at: '',
    isLimit: false,
    cost: null,
    currency: 'RUB'
  })
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://backsecsanta.alwaysdata.net/api/box/onlyBoxInfo`, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        box_id: id
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          setState({
            ...state,
            title: res.box.title,
            cover: res.box.cover,
            isAnonym: res.box.isAnonym,
            email: res.box.email,
            max_people_in_box: res.box.max_people_in_box,
            draw_starts_at: res.box.draw_starts_at,
            isLimit: res.box.isLimit,
            cost: res.box.cost,
            currency: res.box.currency
          })
        }
      })
  }, [])

  const onSubmit = async state => {
    await fetch(`https://backsecsanta.alwaysdata.net/api/box/update/${id}`, {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        title: state.title,
        cover: state.cover,
        isAnonym: state.isAnonym,
        email: state.email,
        max_people_in_box: state.max_people_in_box,
        draw_starts_at: state.draw_starts_at,
        isLimit: state.isLimit,
        cost: state.cost,
        creator_id: localStorage.getItem('userId'),
        currency: state.currency
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          localStorage.setItem('isBoxCreated', true)
          navigate(`/box/${id}`) // id коробки
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
    <BackImage>
      <Container>
        <Head>
          <Title>Настройки коробки</Title>
          <Hr />
        </Head>
        <div>
          <DivInput>
            <Input
              required
              data-name="title"
              id="title"
              type="text"
              value={state.title}
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
                  value={state.cost}
                  type="number"
                  min="0"
                  onChange={handleChangeForm}
                />
                <Select
                  value={state.currency}
                  data-name="currency"
                  onChange={handleChangeForm}
                >
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                </Select>
              </CostDiv>
            ) : null}
          </div>
          <ButtonsDiv>
            <CancellButton type="button" onClick={() => navigate(`/box/${id}`)}>
              Отмена
            </CancellButton>
            <CreateButton type="button" onClick={() => onSubmit(state)}>
              Сохранить
            </CreateButton>
          </ButtonsDiv>
        </div>
      </Container>
    </BackImage>
  )
}

export default Settings
