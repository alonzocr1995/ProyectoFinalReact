import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: 1px solid #000;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.4s;
  }
`;

export default Button;
