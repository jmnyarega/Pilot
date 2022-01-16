import styled from "styled-components";

interface IProps extends React.HTMLProps<HTMLUListElement> {
  items: {
    value: string;
    to: string;
  }[];
}

const Dropdown = (props: IProps) => {
  return (
    <ListElementStyled>
      {props.items.map((item) => (
        <ListElementItemStyled>
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
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
  top: 100%;
  left: -3rem;
  right: 0;

  border-radius: 0.1rem;
`;

const ListElementItemStyled = styled.li`
  padding: 0.5rem 1rem;
  border-bottom: 0.5px solid;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export default Dropdown;
