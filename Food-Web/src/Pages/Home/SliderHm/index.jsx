import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { Autoplay, Navigation } from "swiper/modules";
export default function SliderHm() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{
          width: "80%",
          height: "600px",
          margin: "2% auto",
          borderRadius: 20,
          boxShadow:"2px 2px 10px 4px black"
        }}
      >
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
