import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '../../../../components/styleContainer'
import {
  InstrHeader,
  InstrIllustr,
  InstrList,
  InstrNum,
  InstrSec,
  InstrTextLine,
  Wrapper
} from './style'
import Santa from '../../../../assets/images/santaTube.svg'
import Leaves from '../../../../assets/images/leaves.svg'
import oneIcon from '../../../../assets/images/ONE.svg'
import twoIcon from '../../../../assets/images/TWO.svg'
import threeIcon from '../../../../assets/images/THREE.svg'

const arr = [
  { text: "Создайте коробку для жеребьевки, настройте её по желанию и пригласите своих друзей.", icon: oneIcon },
  { text: "Когда все участники будут в сборе, проведите тайную жеребьевку, чтобы распределить Сант.", icon: twoIcon },
  {
    text: "Составьте список желаний для своего Санты, ознакомьтесь с пожеланиями своего Подопечного и отправляйте подарки!",
    icon: threeIcon
  },
]

const Instructions = () => (
  <InstrSec>
    <Container>
      <InstrHeader>
        <div style={{ marginRight: 32 }}>Инструкция по применению</div>
        <img src={Leaves} alt='' />
      </InstrHeader>
      <Wrapper>
        <InstrList>
          <Grid container rowSpacing={1}>
            {arr.map(item => (
              <Grid style={{ display: 'flex', alignItems: 'center' }}>
                <InstrNum>
                  <img src={item.icon} alt='' />
                </InstrNum>
                <InstrTextLine>
                  {item.text}
                </InstrTextLine>
              </Grid>
            ))}
          </Grid>
        </InstrList>
        <InstrIllustr>
          <img src={Santa} alt='' />
        </InstrIllustr>
      </Wrapper>
    </Container>
  </InstrSec>
);

export default Instructions;
