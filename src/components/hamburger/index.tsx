import styled from "styled-components";

import { IImages } from "../../types";

interface IProps extends IImages {
  toggleSideBar?: () => void;
}

const Hamburger: React.FC<IProps> = ({
  imageUrl,
  imageSize,
  toggleSideBar,
}) => {
  const handleToggleSidebar = () => {
    toggleSideBar && toggleSideBar();
  };

  return (
    <HamburgerButtonStyled onClick={handleToggleSidebar}>
      <img
        src={imageUrl}
        height={imageSize.height}
        width={imageSize.width}
        alt=""
      />
      <HamburgerLabelStyled> Menu </HamburgerLabelStyled>
    </HamburgerButtonStyled>
  );
};

const HamburgerLabelStyled = styled.span`
  font-size: 0.5rem;
  margin-top: -0.2rem;
`;

const HamburgerButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hamburger;
