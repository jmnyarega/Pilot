import styled from "styled-components";

import { ITheme } from "../../types/context";

interface IProps {
  color: string;
  theme?: ITheme;
  icon?: string;
  value: string;
  width?: string;
  style: {
    [property: string]: string;
  };
}

const Button: React.FC<IProps> = (props) => (
  <ButtonStyled {...props}>
    <ButtonIcon src={props?.icon} alt="" />
    {props.value}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  background-color: ${({ color, theme }: IProps) =>
    theme && theme[color]?.default};
  color: white;
  padding: 5px 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease all 250ms;

  &:hover {
    background-color: ${({ color, theme }: IProps) =>
      theme && theme[color]?.hover};
  }

  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.gray.white}`};
    outline-offset: -3px;
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const ButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default Button;
