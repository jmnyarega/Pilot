import styled from "styled-components";

import { IImages } from "../../types";

interface IProps extends IImages {
  styles?: {
    [key: string]: string;
  };
}

const Search: React.FC<IProps> = ({ imageUrl, imageSize, styles }) => {
  return (
    <SearchStyled style={styles}>
      <img
        src={imageUrl}
        alt=""
        height={imageSize.height}
        width={imageSize.width}
      />
    </SearchStyled>
  );
};

const SearchStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default Search;