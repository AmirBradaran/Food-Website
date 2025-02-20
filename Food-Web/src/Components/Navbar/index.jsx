import {
  ButtonGroup,
  Stack,
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
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
      sx={{ backgroundColor: "var(--first)", direction: "rtl" }}
    >
      {/* {Start Left Icon NavBar} */}
      <Stack direction="row-reverse" gap={2.5}>
        <Link to={"/cart-box"}>
          <ShoppingCartIcon
            sx={{
              textDecoration: "none",
              color: "var(--forth)",
              fontSize: "2.25rem",
              transition: "all 0.15s",
              ":hover": { translate:"0 -5px" , color:"white" },
            }}
          />
        </Link>
        <Link to={"/menu"}>
          <SearchIcon
            sx={{
              textDecoration: "none",
              color: "var(--forth)",
              fontSize: "2.25rem",
              transition:"all 0.15s",
              ":hover":{translate:"0 -5px" , color:"white"}
            }}
          />
        </Link>
      </Stack>
      {/* {End Left Icon NavBar} */}

      {/* {Start Logo } */}
      <Link to={"/"}>
        <FastfoodIcon
          sx={{
            color: "var(--forth)",
            fontSize: "3rem",
            transition: "all 0.15s",
            ":hover": { transform: "translateY(-5px)" },
          }}
        />
      </Link>
      {/* {End Logo } */}

      {/* {Link NavBar Start} */}
      <Grid2
        alignItems="center"
        sx={{ display: "flex", gap: 2.5, display: { xs: "none", sm: "flex" } }}
      >
        <Grid2
          item
          component={Link}
          to="/"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bolder",
            transition: "all 0.15s",
            cursor: "pointer",
            ":hover": {
              translate: "0px -5px",
              color: "white",
              fontweight: "bold",
            },
            textDecoration: "none",
            color: "var(--forth)",
          }}
        >
          خانه
        </Grid2>
        <Grid2
          item
          component={Link}
          to="/menu"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bolder",
            transition: "all 0.15s",
            cursor: "pointer",
            ":hover": {
              translate: "0px -5px",
              color: "white",
              fontweight: "bold",
            },
            textDecoration: "none",
            color: "var(--forth)",
          }}
        >
          منو
        </Grid2>
        <Grid2
          item
          component={Link}
          to={token ? "/profile" : "/auth"}
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bolder",
            transition: "all 0.15s",
            cursor: "pointer",
            ":hover": {
              translate: "0px -5px",
              color: "white",
              fontweight: "bold",
            },
            textDecoration: "none",
            color: "var(--forth)",
          }}
        >
          {token ? "پروفایل" : "ورود"}
        </Grid2>
        <Grid2
          item
          component={Link}
          to="/about-us"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bolder",
            transition: "all 0.15s",
            cursor: "pointer",
            ":hover": {
              translate: "0px -5px",
              color: "white",
              fontweight: "bold",
            },
            textDecoration: "none",
            color: "var(--forth)",
          }}
        >
          درباره ما
        </Grid2>
      </Grid2>
      {/* {Link NavBar End} */}

      {/* {Icon Menu Start} */}
      <IconButton
        sx={{ display: { xs: "flex", sm: "none" }, color: "var(--forth)" }}
        onClick={toggleDrawer}
      >
        <MenuIcon sx={{ fontSize: "2.25rem" }} />
      </IconButton>
      {/* {Icon Menu End} */}

      {/* {List Menu Start} */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 150,
            height: "100%",
            background: "linear-gradient(175deg , var(--first) , var(--forth))",
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
