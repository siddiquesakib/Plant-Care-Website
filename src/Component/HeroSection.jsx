import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg",
      title: "Welcome to GreenNest",
      subtitle: "Discover the beauty of nature at home",
    },
    {
      img: "https://images.pexels.com/photos/4503268/pexels-photo-4503268.jpeg",
      title: "Bring Nature Indoors",
      subtitle: "Create your own little green paradise",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1747132588806-7d981c4b62fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
      title: "Care. Grow. Thrive",
      subtitle: "Because every leaf deserves love",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide, id) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-[600px]">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
