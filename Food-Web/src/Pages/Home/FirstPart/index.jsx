import React from "react";
import Text from "./Text";
import BestIcons from "./BestIcons";
import { Stack } from "@mui/material";
import ImgSec from "./ImgSec";
export default function FirstPart() {
  return (
    <Stack direction="column">
      <Stack sx={{
        width:"100%",
        gap:"190px",
      }} direction="row-reverse" gap={2} >
        <Text />
        <ImgSec />
      </Stack>
      <BestIcons />
    </Stack>
  );
}
