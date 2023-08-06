import { styled } from "styled-components";

export const Button = styled.button`
  width: 13.75rem;
  padding: 0.625rem 1.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  border: none;
  background: #000;
  font-size: 1rem;
  color: #fff;
  border: 1px solid black;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

//this line will copy all properties of Button Styled comp
//we just make a copy of button and overwrite some properties for makeing its varients
export const OutlineButton = styled(Button)`
  background: #fff;
  color: #000;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
    background-color: black;
    border: 1px solid black;
    color: white;
  }
`;
