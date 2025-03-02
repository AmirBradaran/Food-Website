import { List, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contacts() {
  return (
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
              transition:"all 0.15s",
              ":hover":{
                translate:"-15px 0",
                color:"var(--forth)"
              }
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
              transition:"all 0.15s",
              ":hover":{
                translate:"-15px 0",
                color:"var(--forth)"
              }
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
              transition:"all 0.15s",
              ":hover":{
                translate:"-15px 0",
                color:"var(--forth)"
              }
            }}
            component={Link}
            to={""}
          >
            <WhatsAppIcon />
            <Typography>WhatsAppID</Typography>
          </List>
        </Stack>
  )
}
