
import Image from 'next/image';
import React from "react";
import { FaStar } from 'react-icons/fa';
import SmallSwiper from "./SmallSwiper";
import Link from 'next/link';
import FirstReview from '@/app/Component/(ReviewFiles)/FirstReview';
import {MovId} from "../../Types"
import RateWrapper from '@/app/Component/RateWrapper';



async function MovieId({params}: MovId) {
const { movieId } = await params; 

const res=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a5c13fc09b1950b338b046e79ea8e6b1`);
const data= await res.json();   

const img=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=a5c13fc09b1950b338b046e79ea8e6b1`);
const imgData= await img.json(); 
const reviews = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a5c13fc09b1950b338b046e79ea8e6b1`);
const reviewsData = await reviews.json();
return (
<div className='w-full h-full  bg-gray-900 pb-4 px-4 gap-4 overflow-hidden '>
<div className="rounded-lg flex flex-col md:flex-row justify-between mt-4 md:mt-0 w-full gap-4 ">


  <div className='flex flex-col px-2  w-full  md:w-1/4 rounded-lg '>
        <div className='xl:pt-8 w-full'>
  <h1 className='text-white text-xl md:text-xl font-bold md:mt-8  lg:mt-0 '>{data.title}</h1>
  </div>
  <div className='flex ms-2 py-2  '>
  <p className="text-gray-300">
<span>{data.release_date?.slice(0, 4)}</span> . 
<span>{data.status?.slice(0, 1).toUpperCase()}</span> . 
<span>{Math.floor(data.runtime / 60)}h {data.runtime % 60}m</span>
</p>

    </div>
                <div className="relative  w-full h-84 md:h-72 lg:h-84">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path} `}
                alt={data.title || "Movie poster"}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading="lazy"
                className="rounded-xl object-cover "
              />
            </div>
            </div>



            <div className='w-full px-2 md:p-0 md:w-1/2 my-4 md:mt-16 '>
              <div >
              <h2 className='text-gray-300 text-sm md:text-md font-bold py-2  bg-gray-800 rounded-lg p-2 mb-2'>{data.overview}</h2>
              
              </div>
              <div >
              <h2 className='text-gray-100 text-sm md:text-md font-bold  py-2 flex justify-between items-center bg-gray-800 rounded-lg p-2 mb-2'><span className='text-white'>Languages :  <span className='text-gray-300'> {data.original_language}</span> </span><span className='text-gray-300'><span className='text-white'>Production Countries : {data.production_countries.map((production: {name:string}) => production.name).join(", ")}</span></span></h2>
              </div>
              <div >
              <h2 className='text-gray-100 text-sm md:text-md font-bold  py-2 bg-gray-800 rounded-lg p-2 mb-2'>Production Companies
                : <span className='text-gray-300'>{data.production_companies
                .map((production:{name:string})=>production.name ).join(", ") }  </span></h2>

              </div>
              <div >
              <h2 className='text-gray-100 text-sm md:text-md font-bold  py-2 flex justify-between '>
                <span className="text-white  bg-gray-800 rounded-lg p-2 mb-2">
Budget :{" "}
<span className="text-gray-300">
  {data.budget >= 1000000
  ? `${(data.budget / 1000000).toFixed(1)} M`
  : data.budget >= 1000
  ? `${(data.budget / 1000).toFixed(0)} K`
  : data.budget}
$ 
{/* {
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.budget)
} */}

</span>
</span>

<span className="text-white bg-gray-800 rounded-lg p-2 mb-2">
Revenue :{" "}
<span className="text-gray-300  ">
{/* {
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.revenue)
} */}
  {data.revenue >= 1000000000
  ? `${(data.revenue / 1000000000).toFixed(1)} B`
  :data.revenue >= 1000000
  ? `${(data.revenue / 1000000).toFixed(1)} M`
  : data.revenue >= 1000
  ? `${(data.revenue / 1000).toFixed(0)} K`
  : data.revenue}
$ 
</span>
</span>
</h2>
<div >
              <h2 className='text-gray-100 text-md font-bold  py-2 bg-gray-800 rounded-lg p-2 mb-2'>Genres
                : <span className='text-gray-300'>{data.genres.map((gen: {name:string})=>gen.name ).join(" , ") }  </span></h2>

              </div>
                
              </div>
            </div>

            
              <div className=' rounded-lg  flex flex-col items-center justify-center md:mt-8   md:w-1/4 w-full '>
              <div className='flex   w-full max-w-full justify-center items-start px-2  '>

               

              <div className='flex flex-col items-between flex-1'>
                    
                  <div className='flex flex-col items-center'>
                        <span className='font-bold text-sm '>C.AM RATING</span>
                        <div className='flex items-center  '>
                          <FaStar className='text-yellow-400 text-3xl'/>
                          <div className='flex flex-col'>
                            
          <span className='  text-sm  font-bold '>{data.vote_average.toFixed(1)} / 10</span>
<span className="text-white text-sm  font-bold text-center">

{data.vote_count >= 1000000
  ? `${(data.vote_count / 1000000).toFixed(2)} M`
  : data.vote_count >= 1000
  ? `${(data.vote_count / 1000).toFixed(0)} K`
  : data.vote_count>0?`${data.vote_count }`:""}
</span>              </div>
                </div>
            </div>   
  </div>
        <div className='flex flex-col items-center flex-1    '>
<span className="text-white font-bold text-sm ">POPULARITY</span>
<span className="text-gray-300 text-sm  font-bold">
{data.popularity >= 1000000
? `${(data.popularity / 1000000).toFixed(2)} M`
: data.popularity >= 1000
? `${(data.popularity / 1000).toFixed(0)} K`
: data.popularity.toFixed(0)}
</span>
</div>

<div className='flex flex-col flex-1 items-center '>
  <span className='font-bold text-sm '>YOUR RATING</span>
  <RateWrapper movieId={movieId} />
</div>

</div>



<div className=" my-2 ">
<SmallSwiper imgData={imgData} size="small" />
</div>
</div>
</div>




<div className='w-full  flex flex-col items-center '>

<FirstReview reviews={reviewsData.results} /> 
{reviewsData.results?.length > 1 && (
<Link href={`/Reviews/${movieId}`} className="text-blue-400  my-2  ">
See all comments
</Link>
)}

</div>
</div>
)
}

export default MovieId






