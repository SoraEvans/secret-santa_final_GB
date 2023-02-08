import React from 'react'


import SupportImg from "../../assets/images/snowman_with_heart.svg";
import SberImg from "../../assets/images/sber.svg";
import QiwiImg from "../../assets/images/qiwi.svg";

import {
  LeftSide,
  LogoGroup, MainContainer,
  PaymentDetails,
  PaymentLogo,
  PaymentLogoDescription, PaymentName,
  SupportContainer,
  SupportText,
  SupportTitle
} from "./style";

function SupportPage () {
  return(

      <MainContainer>
        <SupportContainer>
          <LeftSide>
            <SupportTitle>Спасибо!</SupportTitle>
            <SupportText>
              Если вам понравился наш проект и вы хотите помочь его разработке и дальнейшему развитию, вы можете поблагодарить нас, воспользовавшись реквизитами ниже:
            </SupportText>
            <PaymentDetails>
              <LogoGroup>
                <PaymentLogo>
                  <img alt="Sber" src={SberImg} />
                </PaymentLogo>
                <PaymentLogoDescription>Сбер</PaymentLogoDescription>
              </LogoGroup>
              <PaymentName>4276 0115 0922 7564</PaymentName>
            </PaymentDetails>
            <PaymentDetails>
              <LogoGroup>
                <PaymentLogo>
                  <img alt="Qiwi" src={QiwiImg} />
                </PaymentLogo>
                <PaymentLogoDescription>Qiwi</PaymentLogoDescription>
              </LogoGroup>
              <PaymentName>+7 974 015 09 75</PaymentName>
            </PaymentDetails>

          </LeftSide>
          <div>
            <img alt="box" src={SupportImg} />
          </div>
        </SupportContainer>
      </MainContainer>

  )
}
export default SupportPage