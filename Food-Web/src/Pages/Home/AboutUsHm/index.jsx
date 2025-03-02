import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const images = ["img1-1.jpg", "img2-1.jpg", "img3-1.jpg", "img4-1.jpg"];

const FoodGallery = () => {
  return (
    <Stack
      direction="row-reverse"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      sx={{ width: "100%" ,  }}
    >
      {/* بخش گالری تصاویر */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2} justifyContent="center">
          {/* ردیف اول */}
          <Grid item xs={6} md={5} display="flex" justifyContent="end">
            <Card
              sx={{
                borderRadius: "00% 50% 00% 50%",
                overflow: "hidden",
                width: "250px",
              }}
            >
              <CardMedia
                component="img"
                height="300px"
                image={images[0]}
                alt="Food 1"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            md={5}
            display="flex"
            justifyContent="start"
            alignItems="end"
          >
            <Card
              sx={{
                borderRadius: "50% 00% 50% 00%",
                overflow: "hidden",
                width: "250px",
                height: "250px",
              }}
            >
              <CardMedia
                component="img"
                height="250px"
                image={images[1]}
                alt="Food 2"
              />
            </Card>
          </Grid>

          {/* ردیف دوم */}
          <Grid item xs={6} md={5} display="flex" justifyContent="end">
            <Card
              sx={{
                borderRadius: "50% 00% 50% 00%",
                overflow: "hidden",
                width: "250px",
                height: "250px",
              }}
            >
              <CardMedia
                component="img"
                height="250px"
                image={images[2]}
                alt="Food 3"
              />
            </Card>
          </Grid>
          <Grid item xs={6} md={5} display="flex" justifyContent="start">
            <Card
              sx={{
                borderRadius: "00% 50% 00% 50%",
                overflow: "hidden",
                width: "250px",
                height: "300px",
              }}
            >
              <CardMedia
                component="img"
                height="300px"
                image={images[3]}
                alt="Food 4"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* بخش متن و دکمه */}
      <Stack
        flex={1}
        gap={2}
        sx={{ direction: "rtl", textAlign: "right", padding: "0 20px" , alignItems:{xs:"center" , md:"start"} }}
        justifyContent="center"
      >
        <Typography fontFamily="IranYekan" variant="h3">
          درباره رستوران
        </Typography>
        <Typography fontFamily="IranYekan" variant="h4">
          خوشمزه‌ترین‌ها در اینجاست
        </Typography>
        <Typography fontFamily="IranYekan" variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor
          voluptatem quas, tempore atque iusto!
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            fontFamily: "IranYekan",
            width: "150px",
            height: "50px",
            background: "var(--six)",
            ":hover": { background: "green" },
            fontSize: "17px",
          }}
        >
          مشاهده بیشتر
        </Button>
      </Stack>
    </Stack>
  );
};

export default FoodGallery;
