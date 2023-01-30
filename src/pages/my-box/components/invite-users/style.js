import { Box, Button } from '@mui/material'
import styled from 'styled-components'
import { styled as st } from '@mui/material/styles'

export const Form = styled.form`
  max-height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 80px;
`

export const InputWrapper = st(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '600px'
})

export const AddBtn = st(Button)({
  border: '1px solid #FF5539',
  color: '#FF5539',
  fontSize: 32,
  position: 'absolute',
  right: '-78px',
  top: 0,
  minWidth: '56px',
  height: '56px',
  margin: '0 0 6px'
})

export const RemoveBtn = st(Button)({
  border: '1px solid #D6CCCA',
  color: '#D6CCCA',
  position: 'absolute',
  right: '-78px',
  top: 0,
  minWidth: '56px',
  height: '56px',
  margin: '0 0 6px'
})
