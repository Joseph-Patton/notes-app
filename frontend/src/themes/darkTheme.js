import { createTheme } from "@mui/material/styles";

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
      main: "#ccc",
      dark: "#aaa",
    },
    background: {
      paper: "#222",
      default: "#222",
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
      fontSize: "1.0em",
    },
    body2: {
      fontSize: ".98em",
    },
  },
});

export default darkTheme;
