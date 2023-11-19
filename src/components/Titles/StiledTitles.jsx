import styled from "styled-components";

export const Title = styled.h1`
  color: #162542;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-size: ${(props) => (props.primary ? "1.5rem" : "3.5rem")};
  margin-bottom: ${(props) => (props.primary ? "1.5rem" : "3rem")};
  margin-top: ${(props) => (props.primary ? "3rem" : "0")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.primary ? "1.5rem" : "2.8rem")};
    text-transform: uppercase;
  }

  @media (max-width: 376px) {
    font-size: ${(props) => (props.primary ? "1.5rem" : "2.5rem")};
    text-transform: uppercase;
    text-align: ${(props) => (props.primary ? "center" : "")};
  }
`;
export const SubTitle = styled.h5`
  color: #7b8bad;
  font-size: ${(props) => (props.primary ? "1.125rem;" : "1rem")};
  line-height: 144.444%;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;
export const StyledBotomTitle = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 112.5%;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const StyledBotomSubTitle = styled.h5`
  color: #7b8bad;
  font-size: 1rem;
  line-height: 162.5%;
  font-weight: 500;
`;
