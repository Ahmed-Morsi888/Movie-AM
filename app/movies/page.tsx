import React from 'react'
import TypeOfFilms from '../Component/TypeOfFilms'
import Image from 'next/image';
import Link from "next/link";

async function Movies({ searchParams }: any) {
  const type = searchParams?.type || "popular";

  let data;

  if (type === "trending") {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a5c13fc09b1950b338b046e79ea8e6b1&language=en-US`
    );
    data = await res.json();
  } 
  else if (type === "discover") {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=1&language=en-US`
    );
    data = await res.json();
  } 
  else {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=1&language=en-US`
    );
    data = await res.json();
  }

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <TypeOfFilms classname='mt-2' />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {data.results?.map((movie: any) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <div className="p-4 flex flex-col">
              
              <div className="w-full h-80 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || "Movie poster"}
                  fill
                />
              </div>

              <div className="py-4 px-2 bg-gray-700 text-white rounded text-md font-bold">
                {movie.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Movies;
