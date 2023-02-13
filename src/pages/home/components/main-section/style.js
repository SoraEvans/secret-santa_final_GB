import styled from 'styled-components'

export const Hero = styled.section`
  background: linear-gradient(0deg, #FFF 55%, #FF5539 100%);
  position: relative;
  overflow: hidden;
  padding: 125px 0 60px 0;
  font-family: "Amatic SC bold";
  min-height: 80vh;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem 0 0;
  align-items: flex-start;
`

export const Timer = styled.div`
  min-height: 300px;
  text-align: center;
  margin: 0 0 20px 0;
`

export const LeftTextBlock = styled.div`
  max-width: 0;
  text-align: left;
`

export const RightTextBlock = styled.div`
  text-align: right;
  width: 311px;
  height: 135px;
`

export const Paragraph = styled.span`
  font-weight: 700;
  font-size: 96px;
  line-height: 109px;
`

export const Text = styled.span`
  font-weight: 500;
  font-size: 48px;
  line-height: 68.17px;
  white-space: nowrap;
`

export const SantaBoxBtn = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
  width: max-content;
  position: relative;
  margin: -65px;
  transition: transform 0.5s ease-in-out;
  
  :hover {
    svg {
      fill: #FF5539;
    }
    transform: scale(1.1);
  }
`

export const SantaBoxText = styled.div`
  animation-name: rotation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  svg {
    fill: black;
    width: 183px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

