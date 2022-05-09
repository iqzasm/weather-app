import styled from "styled-components";
import { useState } from "react";

export function useInput({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder?: string;
}) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
  return [value, input];
}

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
  font-size: 4rem;
`;

export const LabelSmall = styled(Label)`
  font-size: 1rem;
`;
