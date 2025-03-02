import { Button, Input, Stack } from '@mui/material'
import React from 'react'

export default function SubEmail() {
  return (
    <Stack
          direction={"row-reverse"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Input
            placeholder="ایمیل خود را وارد کنید"
            type="email"
            sx={{
              fontFamily: "IranYekan",
              background: "white",
              width: "400px",
              height: "50px",
              borderRadius: 2.5,
              paddingRight: 2,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: "50px",
              width: "125px",
              fontFamily: "IranYekan",
              fontWeight: "bold",
            }}
          >
            ثبت درخواست{" "}
          </Button>
        </Stack>
  )
}
