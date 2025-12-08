import React from 'react'
import TypeOfFilms from '../Component/TypeOfFilms'
import Image from 'next/image';
import Link from "next/link";
import {MoviesProps,SearchParamsProps} from "../Types";

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
      {data.results?.map((movie: MoviesProps) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="p-4 flex flex-col">
            
            <div className="w-full h-80 relative ">
              <Image
              className='rounded-lg'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || "Movie poster"}
                fill
              />
            </div>

            <div className="py-4 px-2 bg-gray-700 text-white rounded text-md font-bold">
              {movie.title.split(" ").slice(0, 4).join(" ")}
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
