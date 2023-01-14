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
  margin-top: -65px;
`

export const SantaBtn = styled.button`
  font-family: "Amatic SC bold";
  font-size: 24px;
  background-color: #ff5539;
  border: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fc482c;
    outline: 5px solid #fc482c;
    outline-offset: 5px;
  }
`
