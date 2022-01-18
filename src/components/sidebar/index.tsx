import styled from "styled-components";

import Divider from "../divider";
import Logo from "../logo";
import SidebarLink from "./Link";

import { useGlobalContext } from "../../context";
import { dashboardLinks, userLinks } from "./links";
import { IContextValues } from "../../types/context";

const Sidebar = () => {
  const context = useGlobalContext();

  if (context.isMobile && !context.open) return null;

  return (
    <SidebarStyled
      theme={context.theme}
      // @ts-ignore - styled components wont let me add screenSizes 😥
      screenSizes={context.screenSizes}
      aria-expanded={context.open}
      id="sidebar"
    >
      <TopBarStyled>
        <Logo
          imageSize={{
            height: 24,
            width: 56,
          }}
        />
      </TopBarStyled>
      <SidebarLinksStyled style={{ marginBottom: "1rem" }}>
        <ul>
          {dashboardLinks.map(({ value, icon }) => (
            <SidebarLink
              key={value}
              value={value}
              icon={icon}
              active={value === context.active}
              onClick={() => context.setActive && context.setActive(value)}
            />
          ))}
        </ul>
      </SidebarLinksStyled>
      <Divider
        lineType="horizontal"
        thickness="0.2px"
        size="calc(100% - 3rem)"
        color="gray"
        theme={context.theme}
        styles={{
          margin: "0 auto",
        }}
      />
      <SidebarLinksStyled style={{ marginTop: "1rem" }}>
        <ul>
          {userLinks.map(({ value, icon }) => (
            <SidebarLink
              key={value}
              value={value}
              icon={icon}
              active={value === context.active}
              onClick={() => context.setActive && context.setActive(value)}
            />
          ))}
        </ul>
      </SidebarLinksStyled>
    </SidebarStyled>
  );
};

const barHeight = 4.6875;
const spacer = 1;

const SidebarLinksStyled = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    row-gap: ${spacer}rem;
  }
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
