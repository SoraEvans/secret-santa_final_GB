import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ModalCandyTop,
  ModalCandyBot,
  CopyrightText,
  FooterEl,
  FooterText,
  Wrapper,
  ModalInput,
  ModalForm,
  ModalSend,
  ModalHead,
  ModalCredits
} from './style'
import Container from '../style_cont'
import Modal from '../modal/modal'
import candy from '../../assets/images/candy.svg'
import btnBranch from '../../assets/images/regBranch.svg'

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <FooterEl>
      <Container>
        <Wrapper>
          <FooterText>Помочь проекту</FooterText>
          <FooterText onClick={openModal}>Обратная связь</FooterText>
          <CopyrightText>©Copyright 2022</CopyrightText>
          <Modal
            padding="85px 110px 54px 110px"
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <div style={{ position: 'relative' }}>
              <ModalCandyTop src={candy} alt="" />
              <ModalHead>
                <h1>Напишите нам</h1>
                <p>
                  Есть вопросы, пожелания, предложения?
                  <br />
                  Расскажите нам, заполнив форму ниже
                </p>
              </ModalHead>
              <ModalForm>
                <ModalInput label="Имя" />
                <ModalInput label="E-mail" />
                <ModalInput multiline rows={5} label="Ваше сообщение" />
              </ModalForm>
              <div style={{ position: 'relative' }}>
                <img className="reg-branch" src={btnBranch} alt="" />
                <ModalSend type="button">Отправить</ModalSend>
              </div>
              <ModalCredits>
                Нажимая &ldquo;Отправить&rdquo;, вы даете согласие на&nbsp;
                <Link to="/www">
                  обработку
                  <br /> персональных данных.
                </Link>
              </ModalCredits>
              <ModalCandyBot src={candy} alt="" />
            </div>
          </Modal>
        </Wrapper>
      </Container>
    </FooterEl>
  )
}

export default Footer
