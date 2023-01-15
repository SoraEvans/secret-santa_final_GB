import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  ModalBackground,
  ModalCloseButton,
  ModalContent,
  ModalForm,
} from './style'

const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef()

  const closeModal = event => {
    if (modalRef.current === event.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    event => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  })

  if (showModal === true) {
    return (
      <ModalBackground onClick={closeModal} ref={modalRef}>
        <ModalForm>
          <ModalContent showModal={showModal}>
            {children}

            <ModalCloseButton
              src="/img/ModalCloseButton.svg"
              alt="Закрыть"
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalContent>
        </ModalForm>
      </ModalBackground>
    )
  }
  return null
}

Modal.defaultProps = {
  showModal: false,
  children: ""
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired,
  children: PropTypes.any
}

export default Modal
