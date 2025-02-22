import { Stack } from "@mui/material";
import React from "react";

export default function ImgSec() {
  return (
    <>
      <Stack
        justifyContent={"center"}
        sx={{
          height: "80vh",
          width:"50%",
          alignItems:"center",
          border:"1px solid black"
        }}
      >
        <img
          src="/img7-1.jpg"
          alt=""
          style={{
            borderRadius: "100%",
            height: "400px",
            width: "400px",
            objectFit: "cover",
          }}
        />
      </Stack>
    </>
  );
}
