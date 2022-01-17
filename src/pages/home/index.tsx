import styled from "styled-components";

import CardTasks from "./tasks";
import StatiticsCards from "./statiticsCards";
import ButtonFilters from "./filters";
import Container from "../../components/container";

import { useGlobalContext } from "../../context";

const Home: React.FC = () => {
  const context = useGlobalContext();

  return (
    <Container {...context}>
      {context?.isMobile && <TitleHeading>Dashboard</TitleHeading>}

      {context?.isMobile ? (
        <CardTasks style={{ marginTop: "2.25rem" }} />
      ) : (
        <ButtonFilters style={{ marginBlock: "2.25rem" }} />
      )}

      {context?.isMobile ? (
        <StatiticsCards style={{ marginTop: "2.25rem" }} />
      ) : (
        <CardTasks style={{ marginTop: "2.25rem" }} />
      )}

      {context?.isMobile ? (
        <ButtonFilters style={{ marginBlock: "2.25rem" }} />
      ) : (
        <StatiticsCards style={{ marginBlock: "2.25rem" }} />
      )}
    </Container>
  );
};

const TitleHeading = styled.h2`
  padding-top: 1.5rem;
  font-size: 2.225rem;
`;

export default Home;
