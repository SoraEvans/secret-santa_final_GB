import React, { useState } from 'react'
import DATA_FAQ from '../../../../constants'
import {
  AccordionSection,
  AccordionWrapper, CandyImg,
  Container,
  QuestionText,
  StyledAccordion,
  StyledAccordionDetails,
  Title
} from './style'
import arrowColor from '../../../../assets/images/accord_arrow_color.svg'
import arrowGray from '../../../../assets/images/accord_arrow_gray.svg'
import candy from '../../../../assets/images/candy.svg'
import { StyledAccordionSummary } from '../carousel/style'

const AccordionFaq = () => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionSection>
      <Container>
        <Title>Вопросы о сервисе</Title>
        <AccordionWrapper>
          {DATA_FAQ.map((item, n) => (
            <StyledAccordion
              expanded={expanded === `panel${n + 1}`} // Отслеживание открытого элемента аккордеона
              onChange={(_, isExpanded) => handleChange(isExpanded, `panel${n + 1}`)}
              style={{ borderRadius: '4px', boxShadow: "none" }}
            >
              <StyledAccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={n % 2 ? <img src={arrowGray} alt='' /> : <img src={arrowColor} alt='' />}
              >
                <QuestionText>{item.question}</QuestionText>
              </StyledAccordionSummary>
              <StyledAccordionDetails>{item.answer}</StyledAccordionDetails>
            </StyledAccordion>
          ))}
          <CandyImg src={candy} alt='' />
        </AccordionWrapper>
      </Container>
    </AccordionSection>
  )
}

export default AccordionFaq
