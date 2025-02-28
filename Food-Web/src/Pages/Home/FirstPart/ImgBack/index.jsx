import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'

export default function ImgBack() {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          height: "100vh",
          width: "40%",
          background: "linear-gradient(to right, #34F851, white)",
          borderBottomRightRadius: 200,
          translate: "0 -100px",
          zIndex: -1000,
        }}
      >
        <Card
          sx={{
            width: { xs: "200px", sm: "300px", md: "450px" },
            height: { xs: "200px", sm: "300px", md: "450px" },
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 10,
          }}
        >
          <CardMedia
            component="img"
            src="/img7-1.jpg"
            alt="Delicious Pasta"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
      </Box>
  )
}
