import styled from 'styled-components'

export const BoxTitleInner = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
  margin: 70px 0;

  img {
    background-color: #ff5539;
    object-fit: contain;
    border-radius: 4px;
  }
`

export const BoxTitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  row-gap: 5px;
  font-family: 'Raleway', sans-serif;

  h4 {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }

  p {
    font-size: 15px;
    line-height: 18px;
    color: #c1c1c1;
  }
`
