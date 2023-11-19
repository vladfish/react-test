import styled from "styled-components";

const Button = styled.a`
  width: 10.9375rem;
  height: 3.625rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  //padding: 1rem 1.69rem 1rem 1.62rem;

  background: ${(props) => (props.primary ? "#F16718" : "#E8EFF2")};
  color: ${(props) => (props.primary ? "white" : "#000")};

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "#FF9B62" : "#162542")};
    color: #fff;
  }

  &:active {
    color: red;
  }

  @media (max-width: 376px) {
    max-width: 9.375rem;
  }
`;

export default Button;
