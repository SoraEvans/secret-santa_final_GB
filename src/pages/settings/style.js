import styled from 'styled-components'
import { Switch, styled as st } from '@mui/material'

export const Container = styled.div`
  background-image: url("/img/Snowflake-Background-PNG 1.svg");
  background-position: bottom -140px left 0;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  padding-bottom: 55px;
  padding-top: 140px;
`

export const Head = styled.div`
  max-width: 1328px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 70px;
`

export const Title = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 40px;
`

export const SubTitle = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 0 auto;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 633px;
  min-height: 94px;
  background: #f7f3f3;
  border: 2px solid #d6ccca;
  border-radius: 3px;
  margin-bottom: 25px;
  padding: 15px;
`

export const Input = styled.input`
  width: 633px;
  height: 57px;
  background: #f7f3f3;
  font-family: Raleway;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 22px;
  padding-left: 14px;
`

export const DivInput = styled.div`
  position: relative;
  margin-bottom: 13px;
`

export const Label = styled.label`
  font-family: Raleway;
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  top: -30px;
  left: 0;
`

export const P = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  padding-bottom: 7px;
`

export const CoverDiv = styled.div`
  margin-bottom: 30px;
`

export const CoverButton = styled.button`
  width: 81px;
  height: 81px;
  background: #ffd5d5;
  border-radius: 3px;
  font-size: 58px;
`

export const SmallInput = styled(Input)`
  height: 50px;
  margin-bottom: 46px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #a19593;
  background: #f7f3f3;
  border: 2px solid #d6ccca;
  border-radius: 3px;
`

export const SmallLabel = styled(Label)`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  top: -23px;
`

export const CreateButton = styled.button`
  width: 189px;
  height: 58px;
  background: #ff5539;
  border-radius: 4px;
  border: 2px solid #ff5539;
  font-family: Raleway;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;

  &:hover {
    background: #f53e20;
    color: #ffffff;
    transition: all 300ms;
  }
`

export const CancellButton = styled(CreateButton)`
  background: #ffffff;
  border: 2px solid #ff5539;
  cursor: pointer;
  color: #ff5539;
`

export const ButtonsDiv = styled.div`
  display: flex;
  column-gap: 25px;
  justify-content: center;
`

export const Select = styled.select`
  width: 304px;
  height: 55px;
  background: #f7f3f3;
  border: 2px solid #d6ccca;
  border-radius: 3px;
  font-family: Raleway;
  padding-left: 13px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`

export const CostDiv = styled(ButtonsDiv)`
  margin-bottom: 45px;
`

export const CostInput = styled.input`
  width: 304px;
  height: 55px;
  background: #f7f3f3;
  border: 2px solid #d6ccca;
  border-radius: 3px;
  padding-left: 13px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
`

export const Img = styled.img`
  margin-left: 320px;
`

export const Button = styled.button`
  font-family: Raleway;
  width: 266px;
  height: 81px;
  background: #ff5539;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  border: 0;
  border-radius: 4px;
`

export const AntSwitch = st(Switch)(() => ({
  width: 79,
  height: 36,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 25
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(43px)',
      '& .MuiSwitch-thumb': {
        opacity: 1,
        width: 30,
        height: 30,
        backgroundColor: '#FF5539',
        boxShadow: 'none'
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FF917E'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#C6BBB9',
    boxShadow: 'none'
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    opacity: 1,
    boxSizing: 'border-box',
    backgroundColor: '#D6CCCA'
  }
}))

export const ContainerBoxCreated = styled.div`
  display: flex;
  max-width: 750px;
  justify-content: space-around;
  margin: 0 auto;
`

export const TitleBoxCreated = styled.h1`
  font-family: 'Amatic SC bold';
  font-style: normal;
  font-weight: 600;
  font-size: 58px;
  margin: 0 0 12px;
  line-height: 77px;
  color: #000000;
`
export const SubTitleBoxCreated = styled.p`
  max-width: 499px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: justify;
  color: #a2a2a2;
`
export const Hr = styled.div`
  border-bottom: 1px solid #e2e2e2;
  max-width: 1328px;
  width: 100%;
`
