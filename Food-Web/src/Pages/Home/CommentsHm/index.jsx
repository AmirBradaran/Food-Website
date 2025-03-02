import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const comments = [
  { id: 1, name: "محمد رضایی", comment: "بسیار عالی بود!", avatar: "" },
  { id: 2, name: "سارا محمدی", comment: "کیفیت خیلی خوبی داشت.", avatar: "" },
  { id: 3, name: "علی اکبری", comment: "تجربه‌ی خوبی داشتم!", avatar: "" },
  {
    id: 4,
    name: "زهرا کریمی",
    comment: "بسته‌بندی عالی و ارسال سریع.",
    avatar: "",
  },
];

export default function CommentsHm() {
  return (
    <Stack
      mx={"auto"}
      borderRadius={'110px 0 110px 0'}
      my={10}
      boxShadow={10}
      py={5}
      alignItems={"center"}
      width={"80%"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "var(--fifth)",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography variant="h4" fontWeight="bold" fontFamily={"IranYekan"}>
        نظرات{" "}
        <span role="img" aria-label="chat">
          💬
        </span>
      </Typography>

      <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          style={{ padding: "30px 5%" }}
        >
          {comments.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "20px",
                  textAlign: "center",
                  padding: 3,
                  width: "100%",
                  maxWidth: 280,
                  height: "200px",
                  margin: "auto",
                }}
              >
                <CardContent>
                  <Avatar
                    src={item.avatar}
                    sx={{
                      width: 60,
                      height: 60,
                      margin: "0 auto 10px",
                      backgroundColor: "#ddd",
                    }}
                  />
                  <Typography fontFamily={"IranYekan"} fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography
                    fontFamily={"IranYekan"}
                    variant="body2"
                    sx={{ mt: 1 }}
                  >
                    {item.comment}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
