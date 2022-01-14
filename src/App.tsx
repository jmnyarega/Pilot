import styled from "styled-components";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

import { useGlobalContext } from "./context";
import { IContextValues } from "./types/context";

const App: React.FC = () => {
  const context = useGlobalContext();

  return (
    <Main {...context}>
      <Navbar />
      {context.open && <Sidebar />}
      <Home />
    </Main>
  );
};

const Main = styled.div`
  color: ${(props: IContextValues) => props.theme["gray"].default};
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: ${(props: IContextValues) =>
      props?.open && "rgba(0, 0, 0, 0.7)"};
  }
`;

export default App;
