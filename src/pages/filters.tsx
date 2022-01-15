import styled from "styled-components";

import Button from "../components/button/index.styles";

import RefreshIcon from "../assets/images/refresh.svg";
import UsersIcon from "../assets/images/users-white.svg";
import PhoneIcon from "../assets/images/phone-white.svg";
import ClockIcon from "../assets/images/clock-white.svg";

import { useGlobalContext } from "../context";

const ButtonFilters = () => {
  const context = useGlobalContext();

  return (
    <>
      Snel beheren
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
          />
        ))}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;
  flex-wrap: wrap;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;

  width: 20rem;
`;

export default ButtonFilters;
