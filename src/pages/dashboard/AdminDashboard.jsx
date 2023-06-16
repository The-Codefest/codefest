import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LogoutOutlined } from "@mui/icons-material";
import { routes } from "../../constants/dashboard/dashboardRoutes";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { user } from "../../utils/users";
import { Tooltip } from "@mui/material";

// Create a theme with Lato as the default font
const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Roboto", "Arial", "sans-serif"].join(","),
  },
  palette: {
    browserColors: {
      chrome: "#4285F4",
    },
  },
});

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminDashboard() {
  const [open, setOpen] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(true);
  const navigate = useNavigate();

  const [activeSectionName, setActiveSectionName] = React.useState("Dashboard");

  const changeSection = (sectionRoute) => {
    setActiveSectionName(sectionRoute.routeName);
    navigate(sectionRoute.routePath);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowTooltip(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowTooltip(true);
  };

  const handleLogout = () => {
    user.logOut();

    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                noWrap
                component="div"
              >
                {activeSectionName}
              </Typography>
            </Box>
            {/* <Button color="inherit">Logout</Button> */}
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {/* TODO: change the color of the text */}
            <Typography
              onClick={() => navigate("/")}
              fontSize="1.2rem"
              fontWeight="600"
              ml={2}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              FileImg
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {routes.map((route, index) => (
              <ListItem
                key={route.routeName}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => changeSection(route)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <Tooltip
                    title={showTooltip ? route?.routeName : ""}
                    placement="right"
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {route.iconComponent}
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={route.routeName}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem key="2" disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleLogout}
              >
                <Tooltip title={showTooltip ? "Logout" : ""} placement="right">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <LogoutOutlined />
                  </ListItemIcon>
                </Tooltip>

                <ListItemText
                  primary={"Logout"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
