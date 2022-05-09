import styled from "styled-components";

export const BottomLabelledContainer = styled("div")<{ alignself?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 4%;

  justify-self: center;
  align-self: ${(p) => p.alignself ?? "center"};
`;
