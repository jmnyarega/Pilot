import styled from "styled-components";

import Divider from "../divider";
import Hamburger from "../hamburger";
import Logo from "../logo";
import Search from "./search";

import SearchUrl from "../../assets/images/search.svg";
import HamburgerUrl from "../../assets/images/hamburger.svg";

import { useGlobalContext } from "../../context";

const Navbar = () => {
  const context = useGlobalContext();

  return (
    <NavbarStyled>
      <Logo imageSize={{ height: 24, width: 56 }} />
      <Search
        imageUrl={SearchUrl}
        imageSize={{ height: 24, width: 24 }}
        styles={{ marginLeft: "auto" }}
      />
      <Divider
        color="gray"
        theme={context.theme}
        lineType="vertical"
        size="4.6875rem"
        thickness="0.005rem"
      />
      <Hamburger
        toggleSideBar={context.toggleOpen}
        imageUrl={HamburgerUrl}
        imageSize={{ height: 24, width: 24 }}
      />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  min-height: 4.6875rem;
  padding-inline: 1rem;
  box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.3);
`;

export default Navbar;
