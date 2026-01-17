"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E549F",
      light: "#5FC9F3",
      dark: "#081F37",
      contrastText: "#2E79BA",
    },
  },
  typography: {
    h1: {
      color: "#081F37",
      fontSize: "24px",
      fontWeight: 600,
    },
  },
});

export default theme;
