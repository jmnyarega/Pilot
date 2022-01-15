import styled from "styled-components";

import CalloutCard from "../components/card/calloutCard";
import StatusWarning from "../assets/images/status-warning.svg";

import { IContextValues } from "../types/context";
import { useGlobalContext } from "../context";

const CardTasks = () => {
  const context = useGlobalContext();

  return (
    <>
      <p>Openstaande taken</p>
      <CardTasksStyled {...context}>
        <CalloutCard
          imageUrl={StatusWarning}
          title="Medewerkers activeren"
          text="Je moet nog 2 medewerkers activeren"
          link={{
            text: "Doe dit snel",
            to: "/",
          }}
        />
        <CalloutCard
          imageUrl={StatusWarning}
          title="Medewerkers activeren"
          text="Je moet nog 2 medewerkers activeren"
          link={{
            text: "Doe dit snel",
            to: "/",
          }}
        />
      </CardTasksStyled>
    </>
  );
};

const CardTasksStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.tablet?.minWidth}rem`}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.desktop?.minWidth}rem`}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default CardTasks;
