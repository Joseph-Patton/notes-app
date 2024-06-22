import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@mui/material";

const theme = createMuiTheme({
  wrapper: {
    width: "100%",
    //maxWidth: "824px",
  },
  palette: {
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

export default theme;
