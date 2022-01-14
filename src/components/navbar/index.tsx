import styled from "styled-components";

import Logo from "../logo";
import MobileNav from "./mobile";
import DesktopNav from "./desktop";

import { useGlobalContext } from "../../context";
import { IContextValues } from "../../types/context";

const Navbar = () => {
  const { theme, isMobile } = useGlobalContext();

  return (
    <NavbarStyled theme={theme || {}}>
      <Logo imageSize={{ height: 24, width: 56 }} />
      {!isMobile && <TitleHeading>Dashboard</TitleHeading>}
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  min-height: 4.6875rem;
  padding-inline: 1rem;
  box-shadow: ${({ theme }: IContextValues) =>
    `0px 0.5px 0px ${theme?.gray?.light} `};
`;

const TitleHeading = styled.h2`
  margin-left: 12.5rem;
  align-self: center;
`;

export default Navbar;
