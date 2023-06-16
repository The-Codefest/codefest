import { Stack, Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { SPACE } from "../../constants/spacing";
import theme from "../../styles/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
export const Footer = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Box
      mt={12}
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 10,
          lg: 15,
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: windowWidth > 600 ? theme.spacing(238 / SPACE) : "150px",
        border: windowWidth > 600 ? "1px solid #EAECF0" : null,
        bgcolor: "white",
      }}
    >
      <Stack spacing={1}>
        <Typography fontWeight={600} fontSize={20} sx={{ color: "#54565A" }}>
          Atendance Made Easy
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            fontWeight: 400,
          }}
        >
          <CopyrightIcon />
          2022 Atendees
        </Box>
      </Stack>
      <Typography fontWeight="800" sx={{ color: "#000" }}>
        Atendees
      </Typography>
    </Box>
  );
};
