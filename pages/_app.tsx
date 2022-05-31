import "../styles/globals.css";

import { GlobalStyles, darkTheme, lightTheme } from "../config/ThemeConfig";

import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { store } from "../redux/store";
import { useState } from "react";

// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
