import styled from "styled-components";

import { IContextValues } from "../../types/context";
import { useGlobalContext } from "../../context";

interface IProps {
  value: string;
  text: string;
  icon: string;
}

const StatiticsCard: React.FC<IProps> = ({ value, text, icon }) => {
  const context = useGlobalContext();

  return (
    <CardStyled {...context}>
      <AvatorContainer {...context}>
        <Avator src={icon} alt="" height={40} width={40} />
      </AvatorContainer>
      <CardTitle>{value}</CardTitle>
      <CardBody {...context}>{text} </CardBody>
    </CardStyled>
  );
};

const CardStyled = styled.li`
  background-color: ${({ theme }: IContextValues) => theme?.gray.white};
  padding: 1.625rem 1.5rem;
  border-radius: 4px;
  width: 19rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.mobile?.maxWidth}rem`}) {
    display: grid;
    grid-template-columns: repeat(0.5fr, 1fr);
    grid-template-areas: "a b" "a c";
  }
`;

const CardTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const CardBody = styled.p`
  color: ${({ theme }: IContextValues) => theme?.gray.medium};
`;

const Avator = styled.img`
  border-radius: 50%;
`;

const AvatorContainer = styled.div`
  grid-area: a;
  align-self: center;
  display: none;

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.mobile?.maxWidth}rem`}) {
    display: grid;
    place-content: center;

    background: ${({ theme }: IContextValues) => theme?.gray.veryLight};
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;

export default StatiticsCard;
