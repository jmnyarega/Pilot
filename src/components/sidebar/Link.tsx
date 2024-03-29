import styled from "styled-components";

import { useGlobalContext } from "../../context";

import { ISidebarLinks } from "../../types";

const SidebarLink: React.FC<ISidebarLinks> = (props) => {
  const { isMobile, toggleOpen, theme } = useGlobalContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    props.onClick();
    isMobile && toggleOpen && toggleOpen();
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
    active && theme?.gray?.veryLight};
  font-weight: ${({ active }: ISidebarLinks) => active && "bold"};
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding-block: 0.5rem;
  color: inherit;

  margin-inline: 1.5rem;
  text-decoration: none;
`;

export default SidebarLink;
