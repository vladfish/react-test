import React from "react";

import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 3.44rem 10.3125rem 5.19rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 376px){
    padding: 1.44rem 1.53rem 3.12rem; 1.5rem;   

  }
`;
const FooterItem = styled.h5`
  color: #7b8bad;
  font-size: 1rem;
  font-weight: 700;
  line-height: 162.5%;
  span {
    color: #7b8bad;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.625rem;
  }
  span1 {
    padding: 0 0.2rem;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterItem>
      Typemaster 2021
      <span1>|</span1>
      <span>All Rights Reserved</span>
    </FooterItem>
  </FooterWrapper>
);

export default Footer;
