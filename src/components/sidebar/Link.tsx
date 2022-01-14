import styled from "styled-components";

import { useGlobalContext } from "../../context";

import { ISidebarLinks } from "../../types";

const SidebarLink: React.FC<ISidebarLinks> = (props) => {
  const { toggleOpen } = useGlobalContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    props.onClick();
    toggleOpen && toggleOpen();
  };

  return (
    <LinkContainerStyled {...props}>
      <LinkStyled href="/" onClick={handleClick}>
        <img src={props.icon} alt="" />
        {props.value}
      </LinkStyled>
    </LinkContainerStyled>
  );
};

const LinkContainerStyled = styled.li`
  background-color: ${({ active }: ISidebarLinks) => active && "#f6f6f6"};
  font-weight: ${({ active }: ISidebarLinks) => active && "bold"};
  &:hover {
    background-color: ${({ active }: ISidebarLinks) => !active && "#f6f6f6"};
  }
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
  column-gap: 1rem;
  text-decoration: none;
  color: inherit;
  margin-inline: 1.5rem;
`;

export default SidebarLink;
