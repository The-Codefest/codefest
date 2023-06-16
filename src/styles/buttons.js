import theme from "./theme";
import { red } from "@mui/material/colors";

export const blueButton = {
  textTransform: "none",
  bgcolor: "#155EEF",
  color: "#FFFFFF",
  width: {
    xs: "100%",
    // sm: theme.spacing(161 / SPACE),
  },
  padding: theme.spacing(1.25, 2.25),
  borderRadius: 2,
  height: "44px",
  fontWeight: 500,
  fontSize: "80%",
  "&:hover": {
    bgcolor: "#155EEF",
  },
};

export const redButton = {
  ...blueButton,
  bgcolor: red[700],
  "&:hover": {
    bgcolor: red[600],
  },
};

export const optionButton = {
  borderRadius: 2,
  height: "44px",
  textTransform: "none",
  fontSize: "90%",
  display: "flex",
  bgcolor: "#155EEF",
  fontWeight: 800,
  width: {
    xs: "19.3em",
  },
};
