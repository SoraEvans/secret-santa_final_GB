import { TextField } from '@mui/material'
import styled from '@emotion/styled'

export const StyledAuthInput = styled(TextField)`
  margin-bottom: 24px;

  & label {
    font-family: Raleway;
    font-weight: 600;
  }

  & label.Mui-focused {
    color: #FF5539;
  }

  & .MuiOutlinedInput-root {
    background-color: #F6F3F3;

    :hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: #c0b6b4;
      }
    }

    &.Mui-focused fieldset {
      border-color: #FF5539;
    }
  }
`

export const StyledInput = styled(StyledAuthInput)`
  margin: ${({ margin }) => (margin || "0")};

  .MuiOutlinedInput-notchedOutline {
    border: 2px solid #D6CCCA;
    border-radius: 3px;
  }
`