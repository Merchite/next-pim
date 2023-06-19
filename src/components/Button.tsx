import { styled } from "styled-components"

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export default Button