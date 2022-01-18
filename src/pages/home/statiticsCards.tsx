import styled from "styled-components";

import StatiticsCard from "../../components/card/statiticsCard";
import SectionTitle from "../../components/section-title";

import UserImageUrl from "../../assets/images/users.svg";
import IncomingCallImageUrl from "../../assets/images/incoming-call.svg";
import PhoneImageUrl from "../../assets/images/telephone.svg";

import { useGlobalContext } from "../../context";

interface IProps {
  style: {
    [property: string]: string;
  };
}

const StatiticsCards: React.FC<IProps> = (props) => {
  const context = useGlobalContext();

  return (
    <section {...props}>
      <SectionTitle>Jouw statistieken</SectionTitle>
      <CardContainerStyled {...context}>
        {[
          { value: "8", text: "actieve medewerkers", icon: UserImageUrl },
          { value: "12", text: "telefoonnummers", icon: PhoneImageUrl },
          {
            value: "63",
            text: "recente gesprekken",
            icon: IncomingCallImageUrl,
          },
        ].map(({ value, text, icon }) => (
          <StatiticsCard key={value} value={value} text={text} icon={icon} />
        ))}
      </CardContainerStyled>
    </section>
  );
};

const CardContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export default StatiticsCards;
