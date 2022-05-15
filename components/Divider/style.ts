import styled from "styled-components";

export const DividerWrapper = styled.div`
  height: 50%;
  align-self: center;
  border-right: 1px solid;
  border-color: ${(p) => p.theme.colors.primaryLight};

  @media (max-width: 600px) {
    width: 50%;
    height: 30%;
    border-bottom: 1px solid;
    border-right: 0px solid;
  }
`;
