import styled from 'styled-components'

export const InstrSec = styled.section`
  max-width: 1200px;
  margin: 112px auto 120px;
  border-top: 1px solid #E2E2E2;
`

export const InstrHeader = styled.p`
  font-family: "Amatic SC bold";
  font-weight: 600;
  font-size: 56px;
  line-height: 44px;
  text-align: center;
  margin: 94px 0 0;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const InstrList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: 120px;
  margin-top: 35px;
`

export const InstrNum = styled.li`
  margin: 10px 40px 70px 0;
  width: 100%;
  text-align: center;
  max-width: 82px;
  list-style-type: none;
`

export const InstrTextLine = styled.li`
  font-family: Raleway;
  font-size: 24px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 70px;
  list-style-type: none;
`

export const InstrIllustr = styled.div`
  position: absolute;
  left: 730px;
  bottom: 70px;

  img {
    width: 38vw;
    max-width: 700px;
  }
`
