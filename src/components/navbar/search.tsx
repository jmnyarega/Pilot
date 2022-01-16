import styled from "styled-components";

// types
import { IImages } from "../../types";

interface IProps extends IImages {
  styles?: {
    [key: string]: string;
  };
}

const Search: React.FC<IProps> = ({ imageUrl, imageSize, styles }: IProps) => {
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
  outline: none;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export default Search;
