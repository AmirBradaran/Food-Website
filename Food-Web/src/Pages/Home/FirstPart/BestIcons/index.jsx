import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
export default function BestIcons() {
  return (
    <Stack
      direction={"row"}
      gap={5}
      position={"absolute"}
      top={"65%"}
      sx={{ right: { mx: "1%", sm: "5%" } }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#222",
          color: "white",
          padding: "10px 15px",
          paddingLeft:"30px",
          borderRadius: "5px 20px 5px 20px",
          width: "200px",
          justifyContent: "space-between",
          boxShadow: 3,
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          کیفیت بالا
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
          }}
        >
          <InsertEmoticonIcon sx={{ color: "black", fontSize: "35px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#222",
          color: "white",
          padding: "10px 15px",
          borderRadius: "20px 5px 20px 5px",
          width: "200px",
          justifyContent: "space-between",
          boxShadow: 3,
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          دریافت سریع
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
          }}
        >
          <LocalShippingIcon sx={{ color: "black" }} />
        </Box>
      </Box>
    </Stack>
  );
}
