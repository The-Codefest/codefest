import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Books", "Contact"];

const Navbar = (props) => {
  const handleLogout = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/");
  };

  const handleNavLinkClick = (item) => {
    switch (item) {
      case "Books":
        navigate("/books");
        break;
      case "Contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#fff" }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        BOOKLY
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavLinkClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Signup" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#fff", color: "#000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={handleHomeClick}
          >
            BOOKLY
          </Typography>

          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginRight: "1em" }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#000", fontWeight: "600" }}
                onClick={() => handleNavLinkClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, color: "#000" }}>
            <Box sx={{ display: { xs: "none", sm: "block" }, color: "#000" }}>
              {!loggedIn ? (
                <>
                  <Button
                    onClick={handleLoginClick}
                    variant="outlined"
                    sx={{ marginRight: "1em" }}
                  >
                    Login
                  </Button>
                  <Button variant="contained" onClick={handleSignupClick}>
                    Signup
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outlined" sx={{ marginRight: "1em" }}>
                    {user.name}
                  </Button>
                  <Button variant="contained" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};
export default Navbar;
