import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ avatar }) => avatar ? '60px' : '83px'};
  height: ${({ avatar }) => avatar ? '60px' : '83px'};
  border: ${({ avatar }) => avatar ? '2px solid #FF5539' : 'null'};
  background: ${({ avatar }) => avatar ? 'transparent' : '#ff5539'};
  margin: ${({ avatar }) => avatar ? '0 0 19px' : '0'};
  color: black;
  border-radius: 3px;
  
  :hover {
    border: ${({ avatar }) => avatar ? '3px solid #FF5539' : 'null'};
  }
`
export const CarouselWrapper = styled.div`
  margin: 42px auto 0 auto;
`
export const Wrapper = styled.fieldset`
  display: flex;
  border: 0;
  column-gap: ${({ avatar }) => avatar ? '20px' : '26.91px'};
  width: ${({ avatar }) => avatar ? '350px' : 'auto'};
  flex-flow: wrap;

  [type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type='radio'] + div {
    cursor: pointer;
  }

  [type='radio']:checked + div {
    outline: 3px solid #ff5539;
    outline-offset: 4px;
    border-radius: 2px;
    border: 0;
  }
`

export const CoverImg = styled.img`
  align-self: center;
  height: 45px;
`
