import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-50/30 via-white to-green-50/50 relative rounded-2xl my-6">
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <button className="swiper-button-prev !text-green-700 !w-12 !h-12 !bg-white !rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all"></button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <button className="swiper-button-next !text-green-700 !w-12 !h-12 !bg-white !rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all"></button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-green-100 border border-gray-100">
              <div className="relative">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/50 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    {review.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 text-left bg-linear-to-b from-white to-green-50/20">
                <p className="text-gray-700 font-medium mb-4 italic leading-relaxed">{`"${review.review}"`}</p>
                <p className="text-gray-600 text-sm mb-3 flex items-center gap-2">
                  <span className="text-green-600">📍</span>
                  {review.location}
                </p>
                <p className="text-yellow-500 font-bold text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewCarousel;
