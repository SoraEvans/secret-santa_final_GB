import { Box, Button } from '@mui/material'
import styled from 'styled-components'
import { styled as st } from '@mui/material/styles'

export const Form = styled.form`
  scroll-behavior: smooth;
  padding-right: 30px;
`

export const InputWrapper = st(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
})

export const AddBtn = st(Button)({
  border: '1px solid #FF5539',
  color: '#FF5539',
  fontSize: 32,
  minWidth: '56px',
  height: '56px',
  margin: '0 0 6px 16px'
})

export const RemoveBtn = st(Button)({
  border: '1px solid #D6CCCA',
  color: '#D6CCCA',
  minWidth: '56px',
  height: '56px',
  margin: '0 0 6px 16px'
})
