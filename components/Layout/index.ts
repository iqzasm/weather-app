import styled from "styled-components";

interface Map {
  [key: string]: string | undefined;
}

export const Stack = styled("div")<{ gap?: string }>`
  display: grid;
  gap: ${(props) => props.gap ?? "1rem"};
`;

export const Center = styled("div")<{ padding?: string }>`
  padding: ${(props) => props.padding ?? "1rem"};
`;

export const Container = styled("div")<{ padding?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 0%;
  background: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
`;
export const WeatherContainer = styled(Container)<{ padding?: string }>`
  margin: 0%;
  height: 100%;
  flex-direction: column;
`;
export const WeatherContentContainer = styled(Container)<{ padding?: string }>`
  margin: 0%;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const RightWeatherContainer = styled(WeatherContentContainer)<{
  padding?: string;
}>`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 5%;
`;

export const LeftWeatherContainer = styled(WeatherContentContainer)<{
  padding?: string;
}>`
  display: flex;
  width: 40%;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
  justify-content: flex-end;
`;

export const HeaderContainer = styled(WeatherContentContainer)<{
  padding?: string;
}>`
  height: auto;

  justify-content: space-between;

  padding: 5%;
`;

export const ImageContainer = styled.div`
  width: "100%";
  height: "100%";
  position: "relative";
`;

export const BottomLabelledContainer = styled.div`
  width: "100%";
  height: "100%";
  position: "relative";
`;

const fractionsMap: Map = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const spacingMap: Map = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

export const Split = styled("div")<{ gap?: string; fraction?: string }>`
  display: grid;
  gap: ${({ gap }) => (gap ? spacingMap[gap] ?? spacingMap.lg : spacingMap.lg)};
  grid-template-columns: ${({ fraction }) =>
    fraction
      ? fractionsMap[fraction] ?? fractionsMap["1/2"]
      : fractionsMap["1/2"]};
`;
