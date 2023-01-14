import React, { useState } from 'react'
import { AccordionSummary } from '@mui/material'
import DATA_FAQ from '../../constants'
import {
  AccordionSection,
  AccordionWrapper,
  Container,
  QuestionText,
  StyledAccordion,
  StyledAccordionDetails,
  Title
} from './style'
import arrowColor from '../../assets/images/accord_arrow_color.svg'
import arrowGray from '../../assets/images/accord_arrow_gray.svg'

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
              expanded={expanded === `panel${n + 1}`}
              onChange={(_, isExpanded) => handleChange(isExpanded, `panel${n + 1}`)}
              style={{ borderRadius: '4px', boxShadow: "none" }}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={n % 2 ? <img src={arrowGray} alt='' /> : <img src={arrowColor} alt='' />}
                style={{ outline: '1px solid #D9D2CD', borderRadius: 4, background: 'white' }}
              >
                <QuestionText>{item.question}</QuestionText>
              </AccordionSummary>
              <StyledAccordionDetails>{item.answer}</StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </AccordionWrapper>
      </Container>
    </AccordionSection>
  )
}

export default AccordionFaq
