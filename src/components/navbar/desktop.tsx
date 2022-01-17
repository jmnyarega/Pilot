import { useState } from "react";
import styled from "styled-components";

import Search from "./search";
import Dropdown from "../dropdown";

import SearchUrl from "../../assets/images/search-desktop.svg";
import Caret from "../../assets/images/caret.svg";
import User from "../../assets/images/user.svg";
import SignOut from "../../assets/images/signout.svg";
import Cog from "../../assets/images/cog.svg";

const DesktopNav: React.FC = () => {
  const [userMenuOPen, setUserMenuOPen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setUserMenuOPen(!userMenuOPen);
  };

  return (
    <>
      <Search
        imageUrl={SearchUrl}
        imageSize={{ height: 24, width: 24 }}
        styles={{ marginLeft: "auto", color: "red" }}
      />
      <AccountStyled onClick={handleClick}>
        <img src={User} alt="" />
        <span>Account</span>
        <img src={Caret} alt="" height={24} width={24} />
        {userMenuOPen && (
          <Dropdown
            items={[
              { value: "My Account", to: "/", icon: User },
              { value: "Settings", to: "/", icon: Cog },
            ]}
          />
        )}
      </AccountStyled>
      <SignOutStyled href="/">
        <img src={SignOut} alt="sign out" />
      </SignOutStyled>
    </>
  );
};

const AccountStyled = styled.button`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  margin-inline: 1rem;

  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  position: relative;

  text-decoration: none;
  color: inherit;
`;

const SignOutStyled = styled.a`
  align-self: center;
`;

export default DesktopNav;
