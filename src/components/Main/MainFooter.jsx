import React from "react";

import styled from "styled-components";
import icon1 from "../../images/icons/1.png";
import icon2 from "../../images/icons/2.png";
import icon3 from "../../images/icons/3.png";
import icon4 from "../../images/icons/4.png";
import { Title, SubTitle } from "../../components/Titles/StiledTitles";

const MainFooterWrapper = styled.div`
  background-color: #fff;
  padding: 3.44rem 10.3125rem 5.19rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1.87rem;
  grid-row-gap: 0px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr;
    padding: 1.44rem 0 4rem 2.5rem;
  }

  @media (max-width: 376px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 4fr;
    padding: 1.44rem 1.53rem 0 1.5rem;
  }
`;

const MainFooterItem = styled.div`
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const MainFooterIconWrapper = styled.div``;

const MainBottomIcon = styled.img``;

const MainFooter = () => (
    <MainFooterWrapper>
      <MainFooterItem>
        <MainFooterIconWrapper>
          <MainBottomIcon src={icon1} />
        </MainFooterIconWrapper>
        <Title primary>HIGHLY COMPATIBLE</Title>
        <SubTitle primary>
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed.
        </SubTitle>
      </MainFooterItem>
      <MainFooterItem>
        <MainFooterIconWrapper>
          <MainBottomIcon src={icon2} />
        </MainFooterIconWrapper>
        <Title primary>WIRELESS WITH BLUETOOTH</Title>
        <SubTitle primary>
          Powerful 2.4G RF technology allows you to connect the cordless
          keyboard from up to 30ft away. Simply plug the unifying receiver into
          your computer.
        </SubTitle>
      </MainFooterItem>
      <MainFooterItem>
        <MainFooterIconWrapper>
          <MainBottomIcon src={icon3} />
        </MainFooterIconWrapper>
        <Title primary>HIGH CAPACITY BATTERY</Title>
        <SubTitle primary>
          Equipped with a long-lasting built-in battery, you’ll never have to
          spend a dime on replaceable ones. Enjoy 40 hours of usage time between
          charges.
        </SubTitle>
      </MainFooterItem>
      <MainFooterItem>
        <MainFooterIconWrapper>
          <MainBottomIcon src={icon4} />
        </MainFooterIconWrapper>
        <Title primary>RGB BACKLIT MODES</Title>
        <SubTitle primary>
          Choose from 4 backlight brightness levels and adjustable breathing
          speed. Each key glows intensely in the dark and helps you type in low
          light conditions.
        </SubTitle>
      </MainFooterItem>
    </MainFooterWrapper>
  );
  
export default MainFooter;
