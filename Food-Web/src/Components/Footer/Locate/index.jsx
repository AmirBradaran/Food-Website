import { List, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Locate() {
  return (
    <Stack>
      <Typography variant="h5" fontFamily={"IranYekan"}>
        آدرس
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          textDecoration: "none",
          color: "white",
        }}
      >
        <LocationOnIcon />
        <Typography variant="h7" fontFamily={"IranYekan"}>
          آدرس : Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          <br /> Exercitationem, obcaecati!
        </Typography>
      </List>
    </Stack>
  );
}
