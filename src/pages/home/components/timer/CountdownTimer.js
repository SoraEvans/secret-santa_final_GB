import React, { useState } from 'react'
import { Box } from '@mui/material'
import moment from 'moment'
import { BoxInner, BoxWrapper, CircularProgressStyle, TimerItem, TimerTitle, TimerWrapper } from './style'

const interval = 1000
const actualYear = moment().year()
const eventTime = moment(`${actualYear}-12-31T23:59:59`)

const CountdownTimer = () => {
  const [duration, setDuration] = useState(moment())

  setInterval(() => {
    const currentTime = moment()
    const diffTime = eventTime - currentTime
    setDuration(moment.duration(diffTime - interval))
  }, interval)

  const days = duration.asDays && duration?.asDays().toFixed(0)

  return (
    <Box>
      <TimerTitle>До нового года осталось:</TimerTitle>
      <TimerWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(days * 100) / (365)}
            variant="determinate"
            size={158}
          />
          <BoxInner>
            <TimerItem>{days}</TimerItem>
            <span>Дней</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(duration.hours() * 100) / (24)}
            variant="determinate"
            size={158}
          />
          <BoxInner>
            <TimerItem>{duration.hours()}</TimerItem>
            <span>Часов</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(duration.minutes() * 100) / (60)}
            variant="determinate"
            size={158}
          />
          <BoxInner>
            <TimerItem>{duration.minutes()}</TimerItem>
            <span>Минут</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(duration.seconds() * 100) / (60)}
            variant="determinate"
            size={158}
          />
          <BoxInner>
            <TimerItem>{duration.seconds()}</TimerItem>
            <span>Секунд</span>
          </BoxInner>
        </BoxWrapper>
      </TimerWrapper>
    </Box>
  )
}

export default CountdownTimer
