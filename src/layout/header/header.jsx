import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";

const drawerWidth = "100%";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    handleDrawerClose();
  };

  const handleAction = (text) => {
    switch (text) {
      case "+998-91-980-1409":
        window.location.href = `tel:${text}`;
        break;
      case "muxsinjon1610@gmail.com":
        window.location.href = `mailto:${text}`;
        break;
      case "T.me/Muxsinjon_Maxsudovich":
        window.open(`https://t.me/Muxsinjon_Maxsudovich`, "_blank");
        break;
      default:
        window.location.href = `sms:${text}`;
        break;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        sx={{
          backgroundColor: "white",
          borderRadius: {
            xs: "0 0 25px 25px",
            sm: "0 0 45px 45px",
          },
          padding: "5px 0 5px 0",
          borderBottom: "4px solid white",
          boxShadow: "0 0 50px white",
          color: "black",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            <div className="flex container md:mb-1 justify-end mt-1 gap-1 sm:gap-3">
              <p className="text-[7px]">
                <a
                  className="text-[7px] sm:text-sm"
                  href="mailto:muxsinjon1610@gmail.com"
                >
                  muxsinjon1610@gmail.com
                </a>
              </p>
              <p className="text-[7px]">
                <a className="text-[7px] sm:text-sm" href="tel:+998919801409">
                  +998-91-980-1409
                </a>
              </p>
              <p className="text-[7px]">
                <a
                  className="text-[7px] sm:text-sm"
                  target="_blank"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  T.me/Muxsinjon_Maxsudovich
                </a>
              </p>
            </div>
            <div className="flex sm:mt-1 lg:container items-center justify-between">
              <div className="flex sm:pb-2 md:pb-3 items-center justify-between w-full">
                <img
                  className="w-7 sm:w-10 md:w-12 h-auto"
                  src="logo.png"
                  alt="logo"
                />
                <div className="flex items-center gap-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg md:text-2xl border-b-2 border-black transition-all duration-300"
                        : "text-sm border-b-2 md:text-lg border-transparent hover:border-black transition-all duration-300"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg md:text-2xl border-b-2 border-black transition-all duration-300"
                        : "text-sm border-b-2 md:text-lg border-transparent hover:border-black transition-all duration-300"
                    }
                  >
                    About us
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg md:text-2xl border-b-2 border-black transition-all duration-300"
                        : "text-sm border-b-2 md:text-lg border-transparent hover:border-black transition-all duration-300"
                    }
                  >
                    Services
                  </NavLink>
                </div>
                <img
                  className="md:w-9 w-7 xl:w-12"
                  onClick={handleDrawerOpen}
                  src="hamburger.svg"
                  alt="icon"
                />
              </div>
            </div>
          </Typography>
        </Toolbar>
      </CustomAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["About us", "Services"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() =>
                  handleNavigation(`/${text.replace(/\s+/g, "").toLowerCase()}`)
                }
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: "+998-91-980-1409", icon: <PhoneIcon /> },
            { text: "muxsinjon1610@gmail.com", icon: <EmailIcon /> },
            { text: "T.me/Muxsinjon_Maxsudovich", icon: <TelegramIcon /> },
          ].map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleAction(text)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
