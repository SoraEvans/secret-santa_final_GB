import React from 'react'
import Container from '../../../../components/style_cont'
import CountdownTimer from '../timer/CountdownTimer'
import HeroSectionBtn from './HeroSectionBtn'
import Snow from '../../../../components/animation/SnowFall'
import { Hero, LeftTextBlock, Paragraph, RightTextBlock, Text, Timer, Wrapper } from './style'

const HeroSection = () => (
  <Hero>
    <Snow />
    <Container>
      <Timer>
        <CountdownTimer />
      </Timer>
      <Wrapper>
        <LeftTextBlock>
          <Paragraph>Тайный Санта</Paragraph>
        </LeftTextBlock>
        <RightTextBlock>
          <Text>
            Создай новогоднее <br/>
            настроение себе <br/>
            и друзьям
          </Text>
        </RightTextBlock>
      </Wrapper>
      <HeroSectionBtn />
    </Container>
  </Hero>
)

export default HeroSection
