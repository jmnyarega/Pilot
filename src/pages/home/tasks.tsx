import styled from "styled-components";

import CalloutCard from "../../components/card/calloutCard";
import StatusWarning from "../../assets/images/status-warning.svg";
import SectionTitle from "../../components/section-title";

import { useGlobalContext } from "../../context";

interface IProps {
  style: {
    [property: string]: string;
  };
}

const CardTasks: React.FC<IProps> = (props) => {
  const context = useGlobalContext();

  return (
    <section {...props}>
      <SectionTitle>Openstaande taken</SectionTitle>
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
    </section>
  );
};

const CardTasksStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  font-size: 0.8rem;
  gap: 0.75rem;
`;

export default CardTasks;
