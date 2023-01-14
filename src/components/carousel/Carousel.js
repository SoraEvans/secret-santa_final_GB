import React from 'react'
import { Link } from 'react-router-dom'
import {
  CarouselButton,
  CarouselHeader,
  CarouselSection,
  CarouselElement,
  CarouselWrapper
} from './style'
import Leaves from '../../assets/images/leaves2.svg'
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_right.svg'

import daniaItem from '../../assets/images/carouselBlocks/dania.svg'
import estoniaItem from '../../assets/images/carouselBlocks/estonia.svg'
import italyItem from '../../assets/images/carouselBlocks/Italy.svg'
import shwedenItem from '../../assets/images/carouselBlocks/shweden.svg'
import tailandItem from '../../assets/images/carouselBlocks/Tailand.svg'

// eslint-disable-next-line react/prop-types
const Item = ({ item }) => (
  <div>
    {/* eslint-disable-next-line react/prop-types */}
    <img src={item} alt='' style={{ marginLeft: '110px' }} />
  </div>
)

const slides = [
  daniaItem, estoniaItem, italyItem, shwedenItem, tailandItem
]

const Carousel = () => {
  const isLogged = localStorage.getItem('isLoggedIn');

  return (
    <CarouselSection>
      <Link to={isLogged ? '/create-box' : '/register'} style={{ textDecoration: 'none' }}>
        <CarouselButton>Создать коробку</CarouselButton>
      </Link>
      <CarouselHeader>
        <div style={{ marginRight: 32 }}>Новогодние традиции в разных странах</div>
        <img src={Leaves} alt='' />
      </CarouselHeader>
      <CarouselWrapper>
        <CarouselElement
          height={400}
          animation="slide"
          autoPlay={false}
          IndicatorIcon={null}
          navButtonsAlwaysVisible
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              borderRadius: 0
            }
          }}
          navButtonsWrapperProps={{
            style: {
              bottom: '0',
              top: 'unset',
              backgroundColor: 'white',
            }
          }}
          NextIcon={<img src={ArrowRight} alt='' />}
          PrevIcon={<img src={ArrowLeft} alt='' />}
        >
          {
            // eslint-disable-next-line react/no-array-index-key
            slides.map((item, i) => <Item key={i} item={item} />)
          }
        </CarouselElement>
      </CarouselWrapper>
    </CarouselSection>
  )
}

export default Carousel
