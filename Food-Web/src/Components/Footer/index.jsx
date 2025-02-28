import { List, Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      p={5}
      height={"400px"}
      sx={{ background: "var(--fifth)", color: "white", direction: "rtl" }}
    >
      <Stack direction={"row"} gap={20}>
        <Stack gap={2}>
          <Typography variant="h5" fontFamily={"IranYekan"}>
            راه های ارتباطی
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              color: "white",
            }}
            component={Link}
            to={""}
          >
            <InstagramIcon />
            <Typography>InstaID</Typography>
          </List>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              color: "white",
            }}
            component={Link}
            to={""}
          >
            <TelegramIcon />
            <Typography>TelegramID</Typography>
          </List>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              color: "white",
            }}
            component={Link}
            to={""}
          >
            <WhatsAppIcon />
            <Typography>WhatsAppID</Typography>
          </List>
        </Stack>
        <Stack>
          <Typography variant="h5" fontFamily={"IranYekan"}>
            آدرس
          </Typography>
          <List sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              color: "white",
            }}>
            <LocationOnIcon/>
            <Typography variant="h7" fontFamily={"IranYekan"}>
              آدرس :
            </Typography>
          </List>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}
