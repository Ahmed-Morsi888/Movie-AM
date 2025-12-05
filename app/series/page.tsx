import React from 'react'
import TypeOfSeries from '../Component/TypeOfSeries'
import Image from 'next/image';
import Link from "next/link";
interface SeriesProps {
  searchParams: {
    type?: string;
    page?: string;
  };
}

async function Series({ searchParams }: SeriesProps) {
  
  const type = searchParams?.type || "popular";
let page=Number(searchParams?.page) || 1;
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

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-2">
        {data.results?.map((series: any) => (
          <Link key={series.id} href={`/series/${series.id}`}>
            <div className="p-4 flex flex-col">
              
              <div className="w-full h-80 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name || "Series poster"}
                  fill
                />
              </div>

              <div className="py-4 px-2 bg-gray-700 text-white rounded text-md font-bold">
                {series.name.split(" ").slice(0, 4).join(" ")}
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
        >
          Previous
        </Link>
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
