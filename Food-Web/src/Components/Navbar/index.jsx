import {
  ButtonGroup,
  Stack,
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import React, { useState } from "react";
import "../../index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const { token } = useSelector((state) => state.auth);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Stack
      color="var(--forth)"
      py={2}
      px={10}
      direction="row-reverse"
      alignItems="center"
      justifyContent="space-between"
      sx={{ direction: "rtl" }}
      zIndex="1002"
    >
      {/* {Start Left Icon NavBar} */}
      <Stack
        direction="row-reverse"
        gap={2.5}
        fontFamily={"IranYekan"}
        sx={{ zIndex: "1001" }}
      >
        <Button
          component={Link}
          to={token ? "/profile" : "/auth"}
          variant="contained"
          sx={{
            color: "var(--first)",
            fontSize: "1.15rem",
            fontWeight: "bold",
            borderRadius: 3,
            background: "white",
            width: "100px",
            fontFamily: "IranYekan",
            ":hover": { backgroundColor: "#F56F10", color: "white" },
          }}
        >
          {token ? "پروفایل" : "ورود"}
        </Button>
        <Link to={"/menu"}>
          <SearchIcon
            sx={{
              textDecoration: "none",
              color: "var(--first)",
              fontSize: "2.25rem",
              transition: "all 0.15s",
              ":hover": { translate: "0 -5px", color: "white" },
            }}
          />
        </Link>
      </Stack>
      {/* {End Left Icon NavBar} */}

      {/* {Link NavBar Start} */}
      <Grid2
  alignItems="center"
  sx={{
    display: "flex",
    gap: 2.5,
    display: { xs: "none", sm: "flex" },
    zIndex: "1002",
  }}
>
  {[
    { to: "/", label: "خانه" },
    { to: "/menu", label: "منو" },
    { to: "/orders", label: "سفارش ها" },
    { to: "/about-us", label: "درباره ما" },
  ].map((item, index) => (
    <Grid2
      key={index}
      item
      component={Link}
      to={item.to}
      sx={{
        fontSize: "1.25rem",
        fontWeight: "bolder",
        position: "relative",
        transition: "all 0.15s",
        cursor: "pointer",
        textDecoration: "none",
        color: "var(--first)",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "-3px",
          width: "100%",
          height: "3px",
          backgroundColor: "var(--second)",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform 0.3s ease-out",
        },
        "&:hover": {
          color: "var(--first)",
          "&::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",

          },
        },
      }}
    >
      {item.label}
    </Grid2>
  ))}
</Grid2>

      {/* {Link NavBar End} */}
      {/* {Start Logo } */}
      <Link to={"/"} style={{ zIndex: "1002" }}>
        <FastfoodIcon
          sx={{
            color: "var(--first)",
            fontSize: "3rem",
            transition: "all 0.15s",
            ":hover": { transform: "translateY(-5px)" },
            zIndex: "1002",
          }}
        />
      </Link>
      {/* {End Logo } */}

      {/* {Icon Menu Start} */}
      <IconButton
        sx={{
          display: { xs: "flex", sm: "none" },
          color: "var(--forth)",
          zIndex: "1002",
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon sx={{ fontSize: "2.25rem", zIndex: "1002" }} />
      </IconButton>
      {/* {Icon Menu End} */}

      {/* {List Menu Start} */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 150,
            height: "100%",
            background: "linear-gradient(175deg , var(--six) , white)",
            zIndex: "1002",
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem
              button
              sx={{ color: "var(--forth)" }}
              component={Link}
              to="/"
            >
              <ListItemText primary="خانه" />
            </ListItem>
            <ListItem
              button
              sx={{ color: "var(--forth)" }}
              component={Link}
              to="/menu"
            >
              <ListItemText primary="منو" />
            </ListItem>
            <ListItem
              button
              sx={{ color: "var(--forth)" }}
              component={Link}
              to={token ? "/profile" : "/auth"}
            >
              <ListItemText primary={token ? "پروفایل" : "ورود"} />
            </ListItem>
            <ListItem
              button
              sx={{ color: "var(--forth)" }}
              component={Link}
              to="/about-us"
            >
              <ListItemText primary="درباره ما" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* {List Menu End} */}
    </Stack>
  );
}
