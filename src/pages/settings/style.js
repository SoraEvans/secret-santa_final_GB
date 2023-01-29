import styled from 'styled-components'
import { Switch, styled as st } from '@mui/material'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 87px;
  width: 100%;
  margin: auto;
  padding-bottom: 80px;
  padding-top: 100px;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 12px;
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
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 85px;
  padding: 20px;
`

export const Input = styled.input`
  width: 633px;
  height: 82px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
`

export const DivInput = styled.div`
  position: relative;
`

export const Label = styled.label`
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
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`

export const Cover = styled.div`
  margin-bottom: 85px;
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
`

export const SmallLabel = styled(Label)`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  top: -23px;
`

export const CreateButton = styled.button`
  width: 293px;
  height: 81px;
  background: #fd9797;
  border-radius: 2px;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`

export const CancellButton = styled(CreateButton)`
  background: #d9d9d9;
  color: #9b9b9b;
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Select = styled.select`
  width: 304px;
  height: 55px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`

export const CostDiv = styled(ButtonsDiv)`
  margin-bottom: 85px;
`

export const CostInput = styled.input`
  text-align: center;
  width: 304px;
  height: 55px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`

export const Img = styled.img`
  margin-left: 320px;
`

export const Button = styled.button`
  font-family: Raleway;
  width: 291px;
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
      color: '#FD9797',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FFBFBF'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    opacity: 1,
    boxSizing: 'border-box',
    backgroundColor: '#D9D9D9'
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
  max-width: 463px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: justify;
  color: #a2a2a2;
`
export const Hr = styled.hr`
  border: 1px solid #e2e2e2;
  width: 100%;
`
