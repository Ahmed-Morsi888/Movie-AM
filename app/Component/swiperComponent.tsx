"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Propertise {
  baseurl: string;
  header: string;
  page?: number;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
// my apiKey=36c6571ee9630f7ef210ff6e10a0078d

export default function SwiperComponent({ baseurl, header, page = 1 }: Propertise) {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function fetchMovies() {
    try {
      const res = await fetch(
        `${baseurl}api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=${page}`,
        {
          headers: { accept: "application/json" },
          cache: "force-cache",
          next: { revalidate: 3600 },
        }
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-white text-2xl font-bold mb-4">{header}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        navigation
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2},
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1440: { slidesPerView: 8},
        }}
      >
        {movies.length > 0
          ? movies.map((movie: Movie) => (
              <SwiperSlide key={movie.id}>
                <Link href={`./movies/${movie.id}`}>
                  <div className="relative w-full h-64 mx-4">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || "Movie poster"}
                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      fill
                      loading="lazy"
                      className="rounded-xl object-fit"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))
          : Array(10)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-64 bg-gray-400 animate-pulse rounded-xl"></div>
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}
