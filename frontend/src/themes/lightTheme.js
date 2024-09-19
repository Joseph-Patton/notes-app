import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const lightTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  wrapper: {
    width: "100%",
    //maxWidth: "824px",
  },
  palette: {
    mode: "light", //default theme

    primary: {
      main: "#fff",
      dark: "#ddd",
    },
    secondary: {
      main: "#282E2999",
    },
    tag: {
      main: "#eee",
      border: "#eee",
    },
    // TODO not sure if this is canonical way to do border coloring
    border: {
      main: "#bbb",
    },
  },
  typography: {
    body1: {
      fontSize: "1.2em",
    },
    body2: {
      fontSize: ".98em",
    },
  },
});

export default lightTheme;
