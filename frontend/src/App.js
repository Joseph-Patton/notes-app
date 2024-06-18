import React from "react";
import { CssBaseline } from "@mui/material";
import "./Components/css/App.css";
import Header from "./Components/Header";
import MainUI from "./Components/MainUI";
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
        <MainUI />
      </div>
    </ThemeProvider>
  );
}
