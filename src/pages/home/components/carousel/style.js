import styled from '@emotion/styled'
import Carousel from 'react-material-ui-carousel'
import { AccordionSummary } from "@mui/material";

export const CarouselSection = styled.section`
  margin: 65px auto 88px auto;

  max-width: 1200px;
  width: 100%;
`

export const CarouselElement = styled(Carousel)`
  padding: 0 1rem;
  height: 396px;

  button[aria-label='Previous'] {
    width: 90px;
    :hover {
      opacity: 0.8 !important;
    }
  }

  button[aria-label='Next'] {
    width: 84px;
    :hover {
      opacity: 0.8 !important;
    }
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
    background-color: #f53e20;
  }
`

export const StyledAccordionSummary = styled(AccordionSummary)`
  outline: 1px solid #D9D2CD;
  border-radius: 4px;
  background: white;

  &:hover {
    background-color: rgb(245, 240, 240)
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
