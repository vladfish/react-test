import React from "react";

import styled from "styled-components";
import logo from "../../images/logo.png";
import Button from "../Button/Button";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.44rem 10.3125rem 5.19rem;

  @media (max-width: 768px) {
    padding: 1.44rem 2.5rem 4rem 2.5rem;
  }

  @media (max-width: 376px) {
    padding: 1.44rem 1.53rem 4rem 1.5rem;
  }
`;
const LogoWrapper = styled.div``;
const StyledLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Header = () => (

    <HeaderWrapper>
      <LogoWrapper>
        <StyledLogo src={logo} />
      </LogoWrapper>
      <Button>Pre-order now</Button>
    </HeaderWrapper>
    
  );
export default Header;
