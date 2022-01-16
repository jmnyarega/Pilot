import styled from "styled-components";
import Divider from "../divider";
import Logo from "../logo";

import SidebarLink from "./Link";

import { useGlobalContext } from "../../context";
import { dashboardLinks, userLinks } from "./links";
import { IContextValues } from "../../types/context";

const Sidebar = () => {
  const { isMobile, active, setActive, theme, screenSizes, open } =
    useGlobalContext();

  if (isMobile && !open) return null;

  return (
    // @ts-ignore - styled components wont let me add screenSizes 😥
    <SidebarStyled theme={theme} screenSizes={screenSizes}>
      <TopBarStyled>
        <Logo
          imageSize={{
            height: 24,
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
        thickness="0.2px"
        size="calc(100% - 3rem)"
        color="gray"
        theme={theme || {}}
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

const barHeight = 4.6875;
const spacer = 1;

const SidebarLinksStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacer}rem;
  list-style: none;
`;

const TopBarStyled = styled.div`
  display: flex;
  column-gap: ${spacer}rem;
  min-height: ${barHeight}rem;
  margin-inline: ${spacer + 0.5}rem;
`;

const SidebarStyled = styled.div`
  position: absolute;
  background-color: ${({ theme }: IContextValues) => theme?.gray?.white};
  left: 0;
  top: 0;
  bottom: 0;
  right: 5rem;
  box-shadow: ${({ theme }: IContextValues) =>
    `1px 0px 0px ${theme?.gray?.light} `};

  ${({ screenSizes }: IContextValues) => `
    @media (min-width: ${screenSizes?.mobile?.maxWidth}rem) {
        right: calc(100% - 16.375rem);
        margin-top: ${-barHeight}rem;
        position: initial;
        width: 16rem;
        min-height: 100vh;
    }
 `};
`;

export default Sidebar;
