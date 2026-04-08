import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import { carouselImages, slides } from "@/data/data";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react";

// =======================
// 🔹 Carousel horizontal
// =======================
export function Carousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  // const handleNext = () => {
  //   swiperRef.current?.slideNext();
  // };

  // const handlePrev = () => {
  //   swiperRef.current?.slidePrev();
  // };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-4.5">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={3.5}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {carouselImages.map((product, index) => (
          <SwiperSlide key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-[16px] md:rounded-[25px] sm:rounded-[1px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões */}
      {/* <button
        onAbort={handlePrev}
        className="absolute left-2 top-1/2 z-50 cursor-pointer"
        aria-label="Voltar"
      >
        <ArrowCircleLeftIcon size={42} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-50 cursor-pointer"
        aria-label="Avançar"
      >
        <ArrowCircleRightIcon size={42} />
      </button> */}

      {/* Gradientes laterais */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />
    </div>
  );
}

// =======================
// 🔹 Hero Carousel (fade)
// =======================
export default function HeroCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões */}
      <div className="absolute bottom-4 right-10 flex gap-6 z-50">
        <button
          onClick={handlePrev}
          className="rounded-full cursor-pointer"
          aria-label="Voltar"
        >
          <ArrowCircleLeftIcon size={42} />
        </button>

        <button
          onClick={handleNext}
          className="rounded-full cursor-pointer"
          aria-label="Avançar"
        >
          <ArrowCircleRightIcon size={42} />
        </button>
      </div>

      {/* Conteúdo por cima */}
      <div className="absolute inset-0 z-20 sombra">{children}</div>
    </div>
  );
}
