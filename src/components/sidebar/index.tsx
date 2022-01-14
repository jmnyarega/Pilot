import styled from "styled-components";
import Divider from "../divider";
import Logo from "../logo";

import SidebarLink from "./Link";

import { useGlobalContext } from "../../context";
import { dashboardLinks, userLinks } from "./links";
import { IContextValues } from "../../types/context";

const Sidebar = () => {
  const { active, setActive, theme, screenSizes } = useGlobalContext();

  return (
    <SidebarStyled theme={theme} screenSizes={screenSizes}>
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
        color="gray"
        theme={theme && theme}
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
  margin-inline: 1.5rem;
`;

const SidebarStyled = styled.div`
  position: absolute;
  background-color: ${({ theme }: IContextValues) =>
    theme && theme["gray"].white};
  left: 0;
  top: 0;
  bottom: 0;
  right: 5rem;
  border-right: ${({ theme }: IContextValues) =>
    `1px solid ${theme && theme["gray"].light}`};

  ${({ screenSizes }: IContextValues) => `
    @media (min-width: ${screenSizes && screenSizes["desktop"].minWidth}rem) {
        right: calc(100% - 16.375rem);
    }
 `};
`;

export default Sidebar;
