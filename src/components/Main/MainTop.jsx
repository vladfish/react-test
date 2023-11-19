import React from "react";

import styled from "styled-components";
import { Title, SubTitle } from "../../components/Titles/StiledTitles";
import Button from "../Button/Button";
import keyboard from "../../images/keyboard.jpg";
import rightGray from "../../images/right-gray.jpg";

const MainTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.44rem 10.3125rem 5.19rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.44rem 0 4rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

    @media (max-width: 376px) {
      display: flex;
      flex-direction: column;
      padding: 1.44rem 1.53rem 0 1.5rem;
    }
  }
`;
const MainTopLeft = styled.div`
  max-width: 27.8125rem;
  margin-right: 2rem;

    @media (max-width: 768px){
    width: 21.1875rem; 
    margin-right: 3rem;
  }

   @media (max-width: 376px) {
    width: 20.43rem;
    margin-right: 0;
  } 
}
`;

const MainTopFooter = styled.div`
  display: flex;
  align-items: center;
`;
const Relise = styled.h5`
  color: #7b8bad;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-left: 2rem;
`;

const MainTopRight = styled.div`
  overflow: hidden;
`;

const MainTopImageWrapper = styled.div`
  width: 33.75rem;
  height: 30rem;
  
  &::after {
    content: '';
    position: absolute;
    background: #E8EFF2;
    top: 55px;
    right: -6.875rem;
    width: 15.9375rem;
    height: 15rem;
    border-radius: 0.75rem;

    @media (max-width: 768px){
      display: none;
  } 
    }

  @media (max-width: 376px){
   width: 23.25rem;
    height: 100%;
    padding: 1.44rem 1.53rem 4rem 1.5rem;
  } 
}
`;

const MainTopImage = styled.img`
  @media (max-width: 768px) {
    width: 29.875rem;
    height: 26.5625rem;
  }

  @media (max-width: 375px) {
    width: 23.25rem;
    height: 100%;
  }
`;

const MainTop = () => (
    <MainTopWrapper>
      <MainTopLeft>
        <Title>Typemaster Keyboard</Title>
        <SubTitle>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </SubTitle>
        <MainTopFooter>
          <Button primary>Pre-order now</Button>
          <Relise>Release on 5/27</Relise>
        </MainTopFooter>
      </MainTopLeft>
      <MainTopRight>
        <MainTopImageWrapper>
          <MainTopImage src={keyboard} alt="image" />
        </MainTopImageWrapper>
      </MainTopRight>
    </MainTopWrapper>
  );
  
export default MainTop;
