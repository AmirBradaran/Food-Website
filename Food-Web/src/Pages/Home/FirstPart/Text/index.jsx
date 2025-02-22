import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Text() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        width="550px"
        gap={2}
        sx={{ direction: "rtl", textAlign: "right", justifyContent:"center" }}
      >
        <Typography variant="h2">رستوران بهترین ها</Typography>
        <Typography variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
          nesciunt!
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "120px",
            background: "var(--six)",
            fontWeight: "bold",
            fontSize: "1.15rem",
            ":hover": { background: " #219d34 " },
            borderRadius: 2.5,
          }}
        >
          مشاهده منو
        </Button>
      </Stack>
    </>
  );
}
