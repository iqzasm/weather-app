import styled from "styled-components";
export const Label = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primaryLight};
`;

export const LabelBold = styled(Label)`
  font-weight: 700;
`;

export const LabelBig = styled(Label)`
  // font-size: 4vw;
  font-size: clamp(2rem, 4vw, 4rem);
`;

export const LabelSmall = styled(Label)`
  //font-size: 1.5vw;

  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
`;
