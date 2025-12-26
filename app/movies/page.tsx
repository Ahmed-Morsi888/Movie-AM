import React from 'react'
import TypeOfFilms from '../Component/TypeOfFilms'
import Image from 'next/image';
import Link from "next/link";
import {SearchParamsProps ,Movie} from "../Types";

async function Movies({ searchParams }: SearchParamsProps) {
const type = searchParams?.type || "popular";
const page=Number(searchParams?.page) || 1;   
let data;

if (type === "trending") {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=a5c13fc09b1950b338b046e79ea8e6b1&language=en-US&page=${page}`
  );
  data = await res.json();
} 
else if (type === "discover") {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=a5c13fc09b1950b338b046e79ea8e6b1&language=en-US&page=${page}`
  );
  data = await res.json();
} 
else {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=a5c13fc09b1950b338b046e79ea8e6b1&language=en-US&page=${page}`
  );
  data = await res.json();
 
}



return (
  <div className="bg-gray-900 min-h-screen p-4 ">
    <TypeOfFilms classname='mt-2' />

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2 ">
      {data.results?.map((movie: Movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="p-4 flex flex-col relative">
            
            <div className="w-full h-80 relative ">
              <Image
              className='rounded-lg'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || "Movie poster"}
                fill
              />
              <div className="p-2 absolute inset-0 bg-black/90 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300
">
                    <div className="w-10 h-10 border-3 border-amber-200 rounded-full flex justify-center items-center "> 
                    <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-sm font-bold  py-2 w-full text-center">{movie.title}</div>
                      <div className="flex justify-center items-center gap-2 py-2 ">
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{movie.release_date?.slice(0, 4) ||movie.first_air_date?.slice(0, 4) }</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{movie.original_language}</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{
                        movie.adult? "+18":"+12"}</span>
                      </div>
                    </div>
                    </div>
            </div>

            
            
          </div>
        </Link>
      ))}
    </div>
      <div className="flex justify-center items-center gap-4 my-4 rounded-lg">

    
    {page > 1 && (
      <a
        href={`/movies?&type=${type}&page=${page - 1}`}
        className="px-4 py-2 bg-gray-400 text-black rounded-lg"
      >
        Previous
      </a>
    )}

    
    <span className="font-semibold">{page}</span>

    
    <a
      href={`/movies?&type=${type}&page=${page + 1}`}
      className="px-4 py-2 bg-gray-400 text-black rounded-lg"
    >
      Next
    </a>
  </div>
  </div>
)
}

export default Movies;
