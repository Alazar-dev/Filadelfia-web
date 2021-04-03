import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/Header/Logo.png";
import TopBar from "./TopBar";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sermons",
    href: "/sermons",
  },
  {
    label: "Prayer Wall",
    href: "/prayerwall",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Helvetica neue",
    fontWeight: 500,
    marginLeft: "20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    height: "82px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  navbar: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: " 0.5px 0.87px 2px #0101010F",
  },
  logo: {
    marginRight: "10%",
    marginLeft: "-10%",
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const DisplayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
        </div>
        <div>
          <MenuButtons />
        </div>
      </Toolbar>
    );
  };

  const DisplayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>
            <DrawerChoices />
          </div>
        </Drawer>

        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </Toolbar>
    );
  };

  const DrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const MenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <TopBar />
      <div className={classes.navbar}>
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </div>
    </AppBar>
  );
}
