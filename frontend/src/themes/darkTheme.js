import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const darkTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  wrapper: {
    width: "100%",
    //maxWidth: "824px",
  },
  palette: {
    mode: "dark", //default theme
    primary: {
      main: "#556cd6",
      dark: "##2d4fe6",
    },
    success: {
      main: "#66BB6A",
    },
    tag: {
      main: "#333",
      border: "#aaa",
    },
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

export default darkTheme;
