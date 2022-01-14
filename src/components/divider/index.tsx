import styled from "styled-components";
import { ITheme } from "../../types/context";

interface IProps {
  styles?: {
    [property: string]: string;
  };
  theme: ITheme;
  lineType: "horizontal" | "vertical";
  size: string;
  thickness: string;
  color: string;
}

const Divider: React.FC<IProps> = (props) => (
  <DividerStyled {...props} style={props.styles} />
);

const DividerStyled = styled.div`
  background-color: ${({ color, theme }: IProps) => theme[color]?.light};
  width: ${({ thickness, lineType, size }: IProps) =>
    lineType === "vertical" ? thickness : size};
  height: ${({ thickness, lineType, size }: IProps) =>
    lineType === "vertical" ? size : thickness};
`;

export default Divider;
