import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;
  background: #ff5539;
  border-radius: 3px;
`
export const CarouselWrapper = styled.div`
  margin: 42px auto 0 auto;
`

export const CarouselElement = styled(Carousel)`
  button[aria-label='Previous'] {
    width: 90px;
  }

  button[aria-label='Next'] {
    width: 84px;
  }

  > div:first-child {
    //width: 81%;
    //margin: auto;
  }
`

export const Img = styled.img``
