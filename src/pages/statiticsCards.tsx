import styled from "styled-components";

import StatiticsCard from "../components/card/statiticsCard";

import UserImageUrl from "../assets/images/users.svg";
import IncomingCallImageUrl from "../assets/images/incoming-call.svg";
import PhoneImageUrl from "../assets/images/telephone.svg";

import { IContextValues } from "../types/context";
import { useGlobalContext } from "../context";

const StatiticsCards = () => {
  const context = useGlobalContext();

  return (
    <>
      <p>Jouw statistieken</p>
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
    </>
  );
};

const CardContainerStyled = styled.ul`
  list-style: none;
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

export default StatiticsCards;
