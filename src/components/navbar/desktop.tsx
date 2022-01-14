import Search from "./search";

import SearchUrl from "../../assets/images/search-desktop.svg";
import Caret from "../../assets/images/caret.svg";
import User from "../../assets/images/user.svg";
import SignOut from "../../assets/images/signout.svg";

import styled from "styled-components";

const DesktopNav: React.FC = () => {
  return (
    <>
      <Search
        imageUrl={SearchUrl}
        imageSize={{ height: 24, width: 24 }}
        styles={{ marginLeft: "auto", color: "red" }}
      />
      <AccountStyled href="/">
        <img src={User} alt="" />
        <span>Account</span>
        <img src={Caret} alt="" />
      </AccountStyled>
      <SignOutStyled href="/">
        <img src={SignOut} alt="sign out" />
      </SignOutStyled>
    </>
  );
};

const AccountStyled = styled.a`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-inline: 1rem;

  text-decoration: none;
  color: inherit;
`;

const SignOutStyled = styled.a`
  align-self: center;
`;

export default DesktopNav;
