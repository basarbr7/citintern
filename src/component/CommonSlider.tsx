"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  showPagination?: boolean;
}

export default function CommonSlider({
  items,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 20,
  autoplay = false,
  showPagination,
}: SliderProps) {
  
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative w-full">
      
      {/* Prev Button */}
        <button ref={prevRef} className="absolute top-1/2 -left-[30px] -translate-y-1/2 w-6 h-6 rounded-full border-[1] border-[#E6333D] text-[#E6333D] z-30 flex items-center justify-center ">
            <BiChevronLeft size={20} />
        </button>

        <button ref={nextRef} className="absolute top-1/2 -right-[30px] -translate-y-1/2 w-6 h-6 rounded-full border-[1] border-[#E6333D] text-[#E6333D] z-30 flex items-center justify-center ">
            <BiChevronRight size={20} />
        </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={
          autoplay ? { delay: 2500, disableOnInteraction: false } : false
        }
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
