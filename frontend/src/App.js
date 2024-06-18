import React from "react";
import { CssBaseline } from "@mui/material";
import "./Components/css/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="main">
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}
