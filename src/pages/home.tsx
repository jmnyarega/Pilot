import styled from "styled-components";

import CardTasks from "./tasks";
import StatiticsCards from "./statiticsCards";

import { IContextValues } from "../types/context";
import { useGlobalContext } from "../context";
import ButtonFilters from "./filters";

const Home: React.FC = () => {
  const context = useGlobalContext();

  return (
    <Container {...context}>
      <h2>Dashboard</h2>
      <CardTasks />
      <StatiticsCards />
      <ButtonFilters />
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 4.6875rem);
  margin: 0 auto;
  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.mobile?.maxWidth}rem`}) {
    max-width: 64rem;
  }
`;

export default Home;
