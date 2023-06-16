import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, blue } from "@mui/material/colors";
import { SPACE } from "../constants/spacing";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      "2lg": 1301,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Lato", "serif"].join(","),
  },
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[500],
    },
    bannerBg: {
      main: "#F9FAFB",
    },
    defaults: {
      white: "#FFFFFF",
      black: "#000000",
    },
    gray: {
      100: "#F2F4F7",
      700: "#344054",
    },
  },
  spacing: SPACE,
});

theme = responsiveFontSizes(theme);

export default theme;
