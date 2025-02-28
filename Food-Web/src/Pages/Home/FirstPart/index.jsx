import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ImgBack from "./ImgBack";
import Text from "./TextFp";
import BestIcons from "./BestIcons";

export default function FirstPart() {
  const theme = useTheme();

  return (
    <Stack direction={"row"}>
      <ImgBack />
      <Text />
      <BestIcons />
    </Stack>
  );
}
