import React from 'react'
import PropTypes from 'prop-types'
import { Div, Img, CarouselElement, CarouselWrapper } from './style'
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_right.svg'

// eslint-disable-next-line react/prop-types
const Item = ({ item, alt }) => (
  <Div>
    <Img src={item} alt={alt} style={{ marginLeft: '110px' }} />
  </Div>
)

const Cover = ({ img }) => {
  const imgArr = img
console.log('imgArr', imgArr)
  return (
    <CarouselWrapper>
      <CarouselElement
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
            backgroundColor: 'white'
          }
        }}
        NextIcon={<Img src={ArrowRight} data-next-btn alt="next" />}
        PrevIcon={<Img src={ArrowLeft} data-prev-btn alt="prev" />}
      >
        {imgArr.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item key={i} item={item.path} alt={item.alt} />
        ))}
      </CarouselElement>
    </CarouselWrapper>
  )
}

Cover.defaultProps = {
  img: null
}

Cover.propTypes = {
  img: PropTypes.array
}

export default Cover
