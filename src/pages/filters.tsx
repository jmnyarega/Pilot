import styled from "styled-components";

import Button from "../components/button/index.styles";
import SectionTitle from "../components/section-title";

import RefreshIcon from "../assets/images/refresh.svg";
import UsersIcon from "../assets/images/users-white.svg";
import PhoneIcon from "../assets/images/phone-white.svg";
import ClockIcon from "../assets/images/clock-white.svg";

import { useGlobalContext } from "../context";

interface IProps {
  style: {
    [property: string]: string;
  };
}

const ButtonFilters: React.FC<IProps> = (props) => {
  const context = useGlobalContext();

  return (
    <section {...props}>
      <SectionTitle>Snel beheren</SectionTitle>
      <ButtonContainer>
        {[
          { value: "Mijn belgroepen", icon: RefreshIcon },
          { value: "Bekijk medewerkers", icon: UsersIcon },
          {
            value: "Mijn telefoonnummers",
            icon: PhoneIcon,
          },
          {
            value: "Bekijk recente gesprekken",
            icon: ClockIcon,
          },
        ].map(({ icon, value }) => (
          <ButtonStyled
            key={value}
            theme={context?.theme}
            value={value}
            icon={icon}
            color="red"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20rem",
              columnGap: "0.5rem",
            }}
          />
        ))}
      </ButtonContainer>
    </section>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  font-size: 0.8rem;
`;

const ButtonStyled = styled(Button)``;

export default ButtonFilters;
