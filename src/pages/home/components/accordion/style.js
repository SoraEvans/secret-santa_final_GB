import styled from 'styled-components'
import { AccordionDetails, Accordion } from '@mui/material'

export const AccordionSection = styled.section`
  background: linear-gradient(180deg, #D7D0CB 1.04%, #D7D0CB 21.35%,
  rgba(214, 208, 202, 0.78) 53.65%,
  rgba(217, 211, 205, 0.1) 84.37%,
  rgba(255, 255, 255, 0) 100%);
  padding: 91px 120px;
`

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
  margin-inline: auto;
`

export const Title = styled.div`
  font-family: "Amatic SC bold";
  font-size: 56px;
  line-height: 44px;
  margin: 0 0 43px 0;
`

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 124px;
  gap: 32px;
  position: relative;
`

export const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  &::before {
    background-color: transparent !important;
  }
`

export const StyledAccordionDetails = styled(AccordionDetails)`
  font-family: "Raleway Light";
  border-radius: 4px;
  border: 1px solid rgba(215, 208, 203, 0.44);
  font-size: 14px;
  font-weight: 300;
  line-height: 16.44px;
  background: rgba(255, 255, 255, 0.4);
  padding: 15px 23px 23px !important;
  white-space: pre-wrap;
`

export const QuestionText = styled.div`
  font-family: Raleway;
  font-size: 22px;
`

export const CandyImg = styled.img`
  width: 110px;
  position: absolute;
  bottom: -90px;
  right: -60px;
`
