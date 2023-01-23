import { Box, Button } from '@mui/material'
import styled from 'styled-components'
import { styled as st } from '@mui/material/styles'

export const Form = styled.form`
  padding: 30px 4px;
  max-height: 300px;
  overflow: auto;
  scroll-behavior: smooth;
`
export const InputWrapper = st(Box)({
  display: 'flex',
  alignItems: 'center',
  rowGap: '8px',
  padding: '8px 0'
})

export const Input = styled.input`
  width: 299px;
  height: 44px;
  background-color: #f6f3f3;
  border: 2px solid #cdcccc;
  font-size: 15px;
  color: #979797;
  padding: 10px;
  margin: 0 8px 0 0;
`
export const AddBtn = st(Button)({
  minWidth: '40px',
  height: '40px'
})

export const RemoveBtn = st(Button)({
  minWidth: '40px',
  height: '40px',
  color: 'red'
})
