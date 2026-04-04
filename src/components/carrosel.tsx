import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";


import { carouselImages, slides } from "@/data/data";

export function Carousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-4.5">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={3.5}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={4000} // quanto maior, mais lento e suave
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {carouselImages.map((product, index) => (
          <SwiperSlide key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-[25px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FADE ESQUERDA */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />

      {/* FADE DIREITA */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />
    </div>
  );
}

export default function HeroCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* BACKGROUND IMAGE */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-20 ">
        {children}
      </div>
    </div>
  );
}
