import styled from "styled-components";

import LogoUrl from "../../assets/images/logo.svg";

import { IImages } from "../../types";

interface IProps extends IImages {
  styles?: {
    [key: string]: string;
  };
}

const Logo: React.FC<IProps> = ({ imageSize, styles }) => {
  return (
    <LogoStyled href="/" style={styles}>
      <img
        src={LogoUrl}
        alt="Logo"
        height={imageSize.height}
        width={imageSize.width}
      />
    </LogoStyled>
  );
};

const LogoStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Logo;
