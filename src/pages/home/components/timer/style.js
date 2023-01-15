import { Box, CircularProgress, styled } from '@mui/material'

export const TimerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 74px;
  margin: 43px 0;
`

export const BoxWrapper = styled(Box)`
  position: relative;
  display: inline-flex;
`

export const BoxInner = styled(Box)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    bottom: -50px;
    font-size: 24px;
  }
`

export const TimerItem = styled("div")`
  font-size: 48px;
  position: relative;
`

export const CircularProgressStyle = styled(CircularProgress)`
  color: #FF5539;
`

export const TimerTitle = styled("div")`
  margin: 0 0 40px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 39px;
`
