import styled from "styled-components";

import { IContextValues } from "../../types/context";

const Container = styled.div`
  min-height: calc(100vh - 4.6875rem);
  margin-inline: auto;
  width: 19rem;
  height: ${({ open }: IContextValues) => open && "1rem"};
  overflow: ${({ open }: IContextValues) => open && "hidden"};

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.tablet?.minWidth}rem`}) {
    max-width: 65rem;
    width: 65%;
  }

  @media (min-width: ${({ screenSizes }: IContextValues) =>
      `${screenSizes?.desktop?.minWidth}rem`}) {
    width: 80%;
  }
`;

export default Container;
