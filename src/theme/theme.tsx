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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "linear-gradient(180deg, #6ED0F6 0%, #5FC9F3 100%)",
          color: "#fff",
          textTransform: "capitalize",
          fontWeight: 600,
          borderRadius: "12px",
          padding: "12px 43px",
          boxShadow: "0 2px 0 #2E79BA",

          "&:hover": {
            background: "linear-gradient(180deg, #5FC9F3 0%, #55ABF5 100%)",
            boxShadow: "0 1px 0 #1E6AA8",
          },

          "&:active": {
            boxShadow: "0 2px 0 #1E6AA8",
            transform: "translateY(1px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
  },
});

export default theme;
