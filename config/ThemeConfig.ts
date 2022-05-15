import {
  DefaultTheme,
  ThemedStyledProps,
  createGlobalStyle,
} from "styled-components";

export interface ThemeProps extends DefaultTheme {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    success: string;
    error: string;
    black: string;
    grays: string[];
    white: string;
  };
  fontFamily?: { primary: string };
  fontWeights?: { light: string; regular: string; bold: string };
}

export const lightTheme: ThemeProps = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#2442b8",
  fontWeights: {
    light: "300",
    regular: "400",
    bold: "700",
  },
  fontFamily: {
    primary: "Century Gothic",
  },
  colors: {
    primary: "#F47021",
    primaryLight: "#FFF9F5",
    primaryDark: "#DB4032",
    success: "#83DBB6",
    error: "#EE2B24",
    black: "#000000",
    grays: ["#7F7F7F", "#BAB9B9", "#E3E3E3", "#EAEAEA", "#828282", "#E5E5E5"],
    white: "#FFFFFF",
  },
};

export const darkTheme: ThemeProps = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  fontWeights: {
    light: "300",
    regular: "400",
    bold: "700",
  },
  fontFamily: {
    primary: "Century Gothic",
  },
  colors: {
    primary: "#F47021",
    primaryLight: "#FFF9F5",
    primaryDark: "#DB4032",
    success: "#83DBB6",
    error: "#EE2B24",
    black: "#000000",
    grays: ["#7F7F7F", "#BAB9B9", "#E3E3E3", "#EAEAEA", "#828282", "#E5E5E5"],
    white: "#FFFFFF",
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }`;
