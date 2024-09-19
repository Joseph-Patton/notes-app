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
      main: "#556cd6",
      dark: "##2d4fe6",
    },
    success: {
      main: "#66BB6A",
    },
    danger: {
      main: "#FF9100",
    },
    info: {
      main: "#3eaca1",
    },
    grey: {
      main: "#282E2999",
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
