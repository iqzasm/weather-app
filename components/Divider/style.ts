import styled from "styled-components";

export const DividerWrapper = styled.div`
  height: 50%;
  align-self: center;
  border-right: 1px solid;
  border-color: ${(p) => p.theme.colors.primaryLight};
`;
