import styled from "styled-components";
import Divider from "../divider";
import Logo from "../logo";

import SidebarLink from "./Link";

import { useGlobalContext } from "../../context";
import { dashboardLinks, userLinks } from "./links";

const Sidebar = () => {
  const { active, setActive, theme } = useGlobalContext();

  return (
    <SidebarStyled>
      <TopBarStyled>
        <Logo
          imageSize={{
            height: 26,
            width: 56,
          }}
        />
      </TopBarStyled>
      <SidebarLinksStyled style={{ marginBottom: "1rem" }}>
        {dashboardLinks.map(({ value, icon }) => (
          <SidebarLink
            key={value}
            value={value}
            icon={icon}
            active={value === active}
            onClick={() => setActive && setActive(value)}
          />
        ))}
      </SidebarLinksStyled>
      <Divider
        lineType="horizontal"
        thickness="0.5px"
        size="calc(100% - 3rem)"
        color="blue"
        theme={theme}
        styles={{
          margin: "0 auto",
        }}
      />
      <SidebarLinksStyled style={{ marginTop: "1rem" }}>
        {userLinks.map(({ value, icon }) => (
          <SidebarLink
            key={value}
            value={value}
            icon={icon}
            active={value === active}
            onClick={() => setActive && setActive(value)}
          />
        ))}
      </SidebarLinksStyled>
    </SidebarStyled>
  );
};

const SidebarLinksStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  list-style: none;
`;

const TopBarStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  min-height: 4.6875rem;
  margin-inline: 1rem;
`;

const SidebarStyled = styled.div`
  position: absolute;
  background-color: #fff;
  right: 5rem;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #dcdcdc;
`;

export default Sidebar;
