import { Label, LabelBig, LabelSmall } from "../Labels";

import { BottomLabelledContainer } from "./style";
import React from "react";

interface IBottomLabelProps {
  label?: string;
  value: string;
  size?: "big" | "small";
  alignself?: "start" | "center" | "end";
}

function BottomLabel({
  label,
  value,
  size = "small",
  alignself,
}: IBottomLabelProps) {
  return size === "big" ? (
    <BottomLabelledContainer alignself={alignself}>
      <LabelBig>{value}</LabelBig>
      <Label>{label}</Label>
    </BottomLabelledContainer>
  ) : (
    <BottomLabelledContainer alignself={alignself}>
      <Label>{value}</Label>
      <LabelSmall>{label}</LabelSmall>
    </BottomLabelledContainer>
  );
}

export default BottomLabel;
