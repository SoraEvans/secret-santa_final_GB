import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;
  background: #ff5539;
  color: black;
  border-radius: 3px;
`
export const CarouselWrapper = styled.div`
  margin: 42px auto 0 auto;
`
export const Wrapper = styled.fieldset`
  display: flex;
  border: 0;
  column-gap: 26.91px;

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
    outline: 2px solid #ff5539;
    outline-offset: 5px;
    border-radius: 2px;
    border: 0;
  }
`

export const CoverImg = styled.img`
  align-self: center;
`
