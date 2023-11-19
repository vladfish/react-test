import React from "react";

import styled from "styled-components";
import image1 from "../../images/phoneDesc.jpg";
import image2 from "../../images/mechanicalDesc.jpg";
import {
  StyledBotomTitle,
  StyledBotomSubTitle,
} from "../../components/Titles/StiledTitles";

const MainBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.44rem 10.3125rem 5.19rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem 4rem 2.5rem;
  }

  @media (max-width: 376px) {
    padding: 0 2.5rem 4rem 2.5rem;
  }
`;
const MainBottomLeft = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  @media (max-width: 376px) {
    padding-right: 2.5rem;
  }
`;

const MainBottomImageWrapper1 = styled.div`
  margin-right: 1.91rem;
  @media (max-width: 376px){
    margin-right: 0.84rem;  
  }

  &::before {
    content: '';
    position: absolute;
    background: #E8EFF2;
    bottom: 0;
    left: -280px;
    width: 15.9375rem;
    height: 15rem;
    border-radius: 0.75rem;
   
    @media (max-width: 768px){
      display: none;
    } 
`;
const MainBottomImage1 = styled.img`
  @media (max-width: 768px) {
    width: 13.375rem;
    height: 20rem;
  }

  @media (max-width: 376px) {
    width: 8.0625rem;
    height: 12.0625rem;
  }
`;
const MainBottomImageWrapper2 = styled.div`
  margin-right: 7.81rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
const MainBottomImage2 = styled.img`
  @media (max-width: 768px) {
    width: 27.8125rem;
    height: 20rem;
  }

  @media (max-width: 376px) {
    width: 13.75rem;
    height: 12.0625rem;
  }
`;
const MainBottomText = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 2rem;
  }

  @media (max-width: 376px) {
    display: block;
    text-align: center;
  }
`;
const MainBottom = () => (
    <MainBottomWrapper>
      <MainBottomLeft>
        <MainBottomImageWrapper1>
          <MainBottomImage1 src={image1} />
        </MainBottomImageWrapper1>
        <MainBottomImageWrapper2>
          <MainBottomImage2 src={image2} />
        </MainBottomImageWrapper2>
      </MainBottomLeft>
      <MainBottomText>
        <StyledBotomTitle>mechanical wireless Keyboard</StyledBotomTitle>
        <StyledBotomSubTitle>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </StyledBotomSubTitle>
      </MainBottomText>
    </MainBottomWrapper>
  );

export default MainBottom;
