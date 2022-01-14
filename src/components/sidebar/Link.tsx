import styled from "styled-components";

import { useGlobalContext } from "../../context";

import { ISidebarLinks } from "../../types";

const SidebarLink: React.FC<ISidebarLinks> = (props) => {
  const { toggleOpen, theme } = useGlobalContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    props.onClick();
    toggleOpen && toggleOpen();
  };

  return (
    <LinkContainerStyled {...props} theme={theme}>
      <LinkStyled href="/" onClick={handleClick}>
        <img src={props.icon} alt="" />
        {props.value}
      </LinkStyled>
    </LinkContainerStyled>
  );
};

const LinkContainerStyled = styled.li`
  background-color: ${({ active, theme }: ISidebarLinks) =>
    active && theme && theme["gray"].light};
  font-weight: ${({ active }: ISidebarLinks) => active && "bold"};
  &:hover {
    background-color: ${({ active, theme }: ISidebarLinks) =>
      !active && theme && theme["gray"].light};
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
