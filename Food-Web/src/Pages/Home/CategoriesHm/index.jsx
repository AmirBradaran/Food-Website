import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MopedIcon from "@mui/icons-material/Moped";
import BoltIcon from "@mui/icons-material/Bolt";
export default function CategoriesHm() {
  return (
    <Stack
      flexWrap={"wrap"}
      direction={"row"}
      width={"80%"}
      py={10}
      my={10}
      mx={"auto"}
      zIndex={"1003"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      boxShadow={5}
      gap={5}
      sx={{ background: "var(--fifth)", borderRadius: " 0px 200px 0px 200px " }}
    >
      <Stack
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"white"}
        height={"300px"}
        borderRadius={2.5}
        width={"250px"}
        sx={{ transition: "all 0.25s", ":hover": { translate: "0 -10px" } }}
      >
        <TagFacesIcon sx={{ fontSize: "60px", color: "green" }} />
        <Typography
          sx={{ color: "green" }}
          variant="h5"
          fontWeight={"bolder"}
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
        <Typography
          sx={{ color: "green" }}
          variant="h7"
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
      </Stack>
      <Stack
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"white"}
        height={"300px"}
        borderRadius={2.5}
        width={"250px"}
        sx={{ transition: "all 0.25s", ":hover": { translate: "0 -10px" } }}
      >
        <MopedIcon sx={{ fontSize: "60px", color: "green" }} />
        <Typography
          sx={{ color: "green" }}
          variant="h5"
          fontWeight={"bolder"}
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
        <Typography
          sx={{ color: "green" }}
          variant="h7"
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
      </Stack>
      <Stack
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"white"}
        height={"300px"}
        borderRadius={2.5}
        width={"250px"}
        sx={{ transition: "all 0.25s", ":hover": { translate: "0 -10px" } }}
      >
        <BoltIcon sx={{ fontSize: "60px", color: "green" }} />
        <Typography
          sx={{ color: "green" }}
          variant="h5"
          fontWeight={"bolder"}
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
        <Typography
          sx={{ color: "green" }}
          variant="h7"
          fontFamily={"IranYekan"}
        >
          انتخابی مطمعن
        </Typography>
      </Stack>
    </Stack>
  );
}
