import styled from "styled-components";

import Navbar from "../navbar";
import Sidebar from "../sidebar";

import { useGlobalContext } from "../../context";

import { IReactChildrenProps } from "../../types";
import { IContextValues } from "../../types/context";

const Layout: React.FC<IReactChildrenProps> = ({ children }) => {
  const context = useGlobalContext();

  return (
    <Main {...context}>
      <Navbar />
      <ContainerA {...context}>
        <Sidebar />
        {children}
      </ContainerA>
    </Main>
  );
};

const Main = styled.div`
  color: ${({ theme }: IContextValues) => theme?.gray?.default};

  &::before {
    @media (max-width: ${({ screenSizes }: IContextValues) =>
        `${screenSizes?.mobile?.maxWidth}rem`}) {
      content: "";
      position: absolute;
      inset: 0;
      background-color: ${({ open }: IContextValues) =>
        open && "rgba(0, 0, 0, 0.7)"};
    }

    z-index: ${({ open }: IContextValues) => (open ? 0 : -1)};
  }
  background-color: ${({ open, theme, isMobile }: IContextValues) =>
    !open && isMobile && theme?.gray.veryLight};

  background-color: ${({ theme, isMobile }: IContextValues) =>
    !isMobile && theme?.gray.veryLight};
`;

const ContainerA = styled.div`
  display: flex;
`;

export default Layout;
