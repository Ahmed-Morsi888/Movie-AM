"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {Movie,Propertise} from "../Types"


export default function SwiperComponent({ baseurl, header, page = 1 }: Propertise) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
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
  fetchMovies();

  }, [baseurl, page]);


  return (
    <div className="p-4">
      <h2 className="text-white text-2xl font-bold pb-4 ps-4">{header}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        navigation
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2},
          640: { slidesPerView: 4},
          1024: { slidesPerView: 4},
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
                      className="rounded-xl object-cover"
                    />
                    <div className="p-2 absolute inset-0 bg-black/90 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300
">
                    <div className="w-10 h-10 border-3 border-amber-200 rounded-full flex justify-center items-center "> 
                    <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-sm font-bold  py-2 w-full text-center">{movie.title|| movie.name}</div>
                      <div className="flex justify-center items-center gap-2 py-2 ">
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{movie.release_date?.slice(0, 4) ||movie.first_air_date?.slice(0, 4) }</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{movie.original_language}</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{
                        movie.adult? "+18":"+12"}</span>
                      </div>
                    </div>
                    </div>
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
