"use client";

import { memo } from "react";
import Products from "../app/Products";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Marquee.module.css"

export default function Marquee({ products }) {
  return (
    <div className="mt-20">
      <h1 className="text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className="mt-10 relative w-full">
        {/* Give the Swiper a custom class so CSS targets only this slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="marqueeSwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="px-2">
                <Products gap={"mr-5"} products={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export const MemoizedMarquee = memo(Marquee);
