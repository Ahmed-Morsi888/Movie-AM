import React from 'react'
import TypeOfSeries from '../Component/TypeOfSeries'
import Image from 'next/image';
import Link from "next/link";
import {SerId ,SeriesProps } from "../Types"


async function Series({ searchParams }: SerId) {

const type = searchParams?.type || "popular";
const page=Number(searchParams?.page) || 1;
let data;

if (type === "trending") {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=${page}&language=en-US`
  );
  data = await res.json();
} 
else if (type === "discover") {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=${page}&language=en-US`
  );
  data = await res.json();      
} 
else {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${type}?api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=${page}&language=en-US`
  );
  data = await res.json();
}
return (
  <div className="bg-gray-900 min-h-screen p-4">
    <TypeOfSeries classname='mt-2' />
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
      {data.results?.map((series: SeriesProps) => (
      <Link key={series.id} href={`/series/${series.id}`}>  
          <div className="p-4 flex flex-col">
            <div className="w-full h-80 relative">
              <Image
                className='rounded-lg'
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name || "Series poster"}
                fill
              />
               <div className="p-2 absolute inset-0 bg-black/90 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300
">
                    <div className="w-10 h-10 border-3 border-amber-200 rounded-full flex justify-center items-center "> 
                    <span>{series.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-sm font-bold  py-2 w-full text-center">{ series.name}</div>
                      <div className="flex justify-center items-center gap-2 py-2 ">
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{series.release_date?.slice(0, 4) ||series.first_air_date?.slice(0, 4) }</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{series.original_language}</span>
                      <span className="px-2 py-1 bg-gray-400 rounded-full text-sm   ">{
                        series.adult? "+18":"+12"}</span>
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
      <Link
        href={`/series?&type=${type}&page=${page - 1}`}
        className="px-4 py-2 bg-gray-400 text-black rounded-lg"
      > Previous </Link>
    )}
    <span className="font-semibold">{page}</span>
 <Link
      href={`/series?&type=${type}&page=${page + 1}`}
      className="px-4 py-2 bg-gray-400 text-black rounded-lg"
    >
      Next
    </Link>
  </div>    </div>
)
}

export default Series;
