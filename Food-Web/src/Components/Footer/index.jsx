import { Box, Button, Input, List, Stack, Typography } from "@mui/material";
import React from "react";

import Contacts from "./Contacts";
import Locate from "./Locate";
import SubEmail from "./SubEmail";
export default function Footer() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      width={"100%"}
      flexWrap={"wrap"}
    
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        p={5}
        height={"400px"}
        flexWrap={"wrap"}
        sx={{ background: "var(--fifth)", color: "white", direction: "rtl",position:'relative',bottom:0 }}
      >
            <Stack direction={"row"} gap={20}>
        <Contacts />
        <Locate />
        <SubEmail />
      </Stack>
      <Box borderTop={"1px solid white"} width={"80%"} mt={5}>
        <Typography
          fontFamily={"IranYekan"}
          variant="h5"
          textAlign={"center"}
          paddingTop={2.5}
        >
          با ما در ارتباط باشید
        </Typography>
      </Box>
      </Stack>
  
    </Stack>
  );
}
