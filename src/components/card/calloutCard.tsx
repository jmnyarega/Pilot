import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { IContextValues } from "../../types/context";

interface IProps {
  imageUrl: string;
  title: string;
  text: string;
  link: {
    text: string;
    to: string;
  };
}

const CalloutCard: React.FC<IProps> = ({ imageUrl, title, text, link }) => {
  const { theme } = useGlobalContext();

  return (
    <Card theme={theme}>
      <CardHeader>
        <img src={imageUrl} alt="" />
        <h3 style={{ fontSize: "1.125rem" }}>{title}</h3>
      </CardHeader>
      <CardBody theme={theme}>{text}</CardBody>
      <CardFooter theme={theme} href={link.to}>
        {link.text}
      </CardFooter>
    </Card>
  );
};

const Card = styled.li`
  border: ${({ theme }: IContextValues) =>
    `2px solid ${theme?.yellow.default}`};
  list-style: none;
  width: 19rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  font-size: 1.125rem;
`;

const CardHeader = styled.div`
  display: flex;
  font-weight: bold;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CardBody = styled.p`
  color: ${({ theme }: IContextValues) => theme?.gray.medium};
  margin-bottom: 1rem;
`;

const CardFooter = styled.a`
  color: ${({ theme }: IContextValues) => theme?.blue.default};
`;

export default CalloutCard;
