import { styled as st } from "@mui/material/styles";
import styled from 'styled-components'
import { Button } from "@mui/material";

export const ButtonBlock = styled.div`
  display: block;
`

export const StartDrawButton = st(Button)({
  fontFamily: 'Raleway',
  display: 'block',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '20px',
  margin: '0 0 17px 0',
  height: '68px',
  width: '280px',
  backgroundColor: '#FF5539',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
  textTransform: 'inherit',

  '&:hover': {
    backgroundColor: '#ff4f32',
  },
  '&:disabled': {
    color: '#A3A3A3',
    backgroundColor: '#EAEAEA'
  }
})

export const ButtonText = styled.div`
  font-family: Raleway;
  font-size: 14px;
  line-height: 1.2;
  width: 291px;
  color: #979797;
`