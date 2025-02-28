import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function TextFp() {
  return (
    <Stack
      gap={2}
      sx={{ direction: "rtl", my: "15%" , right:{xs:"2%" , sm:"5%"} }}
      position={"absolute"}
    >
      <Typography variant="h2" fontFamily={'IranYekan'} fontWeight={"bolder"}>
        رستوران بهترین ها
      </Typography>
      <Typography variant="h5" fontWeight={"bold"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio soluta
        <br /> illum libero, minus neque eos!
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "150px",
          height: "50px",
          fontSize: "25px",
          fontWeight: "bold",
          background:"var(--six)",
          ":hover":{
            background:"green"
          }
        }}
      >
        مشاهده منو
      </Button>
    </Stack>
  );
}
