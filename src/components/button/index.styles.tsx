import styled from "styled-components";

import { ITheme } from "../../types/context";

interface IProps {
  color: string;
  theme: ITheme;
}

const Button = styled.button`
  background-color: ${({ color, theme }: IProps) => theme[color]?.default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${({ color, theme }: IProps) => theme[color]?.hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default Button;
