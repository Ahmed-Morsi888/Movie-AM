"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

interface Backdrop {
  file_path: string;
  width: number;
  height: number;
  aspect_ratio: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
}

interface ImageData {
  backdrops: Backdrop[];
}

interface Props {
  imgData: ImageData;
  size?: "small" | "large";
}

export default function SmallSwiper({ imgData, size = "large" }: Props) {
  const containerClasses =
    size === "small"
      ? "w-80 aspect-video mx-auto"
      : "w-full aspect-video ";

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      loop
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
        1440: { slidesPerView: 1 },
      }}
    >
      {imgData?.backdrops?.length > 0 ? (
        imgData.backdrops.map((imge, i) => (
          <SwiperSlide key={i}>
            <div className={`relative ${containerClasses}  h-84`}>
              <Image
                src={`https://image.tmdb.org/t/p/w780${imge.file_path}`}
                alt="Movie backdrop"
                fill
                 sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        Array(4)
          .fill(0)
          .map((_, i) => (
            <SwiperSlide key={i}>
              <div className={`${containerClasses} bg-gray-400 animate-pulse rounded-xl`}></div>
            </SwiperSlide>
          ))
      )}
    </Swiper>
  );
}