import styled from '@emotion/styled'
import Carousel from 'react-material-ui-carousel'

export const CarouselSection = styled.section`
  margin: 65px auto 88px auto;
  padding: 0 1rem;
  max-width: 1200px;
  width: 100%;
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

export const CarouselButton = styled.button`
  font-family: Raleway;
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 24px;
  margin: 0 auto 136px auto;
  height: 81px;
  width: 291px;
  background-color: #FF5539;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ff4f32;
  }
`

export const CarouselHeader = styled.h2`
  font-family: "Amatic SC bold";
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-align: center;
  font-weight: 700;
  font-size: 56px;
  line-height: 63px;
  margin-bottom: 0;
`

export const CarouselWrapper = styled.div`
  margin: 42px auto 0 auto;
`
