import React, { forwardRef } from 'react'
import { StyledAuthInput, StyledInput } from './style'

export const AuthInput = forwardRef((props, ref) => (
  <StyledAuthInput fullWidth {...props} inputRef={ref} />
))

export const CustomInput = forwardRef((props, ref) => (
  <StyledInput fullWidth {...props} inputRef={ref} />
))
