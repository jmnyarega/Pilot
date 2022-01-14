import styled from "styled-components";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

import { useGlobalContext } from "./context";
import { IContextValues } from "./types/context";

const App: React.FC = () => {
  const context = useGlobalContext();

  const handleSideBar = () => {
    if (context.isMobile) {
      if (context.open) return <Sidebar />;
    } else {
      return <Sidebar />;
    }
  };

  return (
    <Main {...context}>
      <Navbar />
      {handleSideBar()}
      <Home />
    </Main>
  );
};

const Main = styled.div`
  color: ${({ theme }: IContextValues) => theme?.gray?.default};

  &::after {
    @media (max-width: ${({ screenSizes }: IContextValues) =>
        `${screenSizes?.mobile?.maxWidth}rem`}) {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: ${({ open, theme }: IContextValues) =>
        open && theme?.gray.default};
    }
  }
`;

export default App;
