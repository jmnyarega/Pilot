import styled from "styled-components";

import { useGlobalContext } from "../../context";
import { IContextValues } from "../../types/context";

interface IProps extends React.HTMLProps<HTMLUListElement> {
  items: {
    value: string;
    to: string;
    icon: string;
  }[];
}

const Dropdown = (props: IProps) => {
  const context = useGlobalContext();

  return (
    <ListElementStyled>
      {props.items.map((item) => (
        <ListElementItemStyled key={item.value} {...context}>
          <img src={item.icon} alt="" />
          <a href={item.to}>{item.value}</a>
        </ListElementItemStyled>
      ))}
    </ListElementStyled>
  );
};

const ListElementStyled = styled.ul`
  list-style: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  top: 100%;
  left: -1.5rem;
  right: 0;
  border-radius: 0.1rem;
`;

const ListElementItemStyled = styled.li`
  padding: 0.5rem 1rem;
  text-align: initial;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  + li {
    border-top: ${({ theme }: IContextValues) =>
      `0.5px solid ${theme?.gray?.veryLight}`}
`;

export default Dropdown;
