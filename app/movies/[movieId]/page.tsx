
import Image from 'next/image';
import React from "react";
import { FaStar } from 'react-icons/fa';
import SmallSwiper from "./SmallSwiper";
import Link from 'next/link';
import ReviewsList from '@/app/Component/ReviewList';
interface Props {
  params: {
    movieId: string
  }
}
async function MovieId({params}: Props) {
    const res=await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=a5c13fc09b1950b338b046e79ea8e6b1`);
    const data= await res.json();   
    console.log(data);
     
     const img=await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/images?api_key=a5c13fc09b1950b338b046e79ea8e6b1`);
    const imgData= await img.json(); 
    const reviews = await fetch(
  `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=a5c13fc09b1950b338b046e79ea8e6b1`
);
const reviewsData = await reviews.json();
   
  return (
<div className='w-full h-full bg-gray-900 pt-4 pb-4'>
    <div className=' mx-auto min-h-[26rem] flex justify-between items-center  gap-4 '>
        <div className='flex flex-col px-2  h-full w-1/4 '>
             <div>
        <h1 className='text-white text-2xl font-bold '>{data.title}</h1>
        </div>
        <div className='flex ms-2'>
        <p className="text-gray-300">
  <span>{data.release_date?.slice(0, 4)}</span> . 
  <span>{data.status?.slice(0, 1).toUpperCase()}</span> . 
  <span>{Math.floor(data.runtime / 60)}h {data.runtime % 60}m</span>
</p>

          </div>
                     <div className="relative  w-full h-84">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path} `}
                      alt={data.title || "Movie poster"}
                     fill
                      loading="lazy"
                      className="rounded-xl object-cover mt-2"
                    />
                  </div>
                  </div>
                  <div className=' w-1/2 mt-16'>
                    <div >
                    <h2 className='text-gray-300 text-md font-bold py-2  bg-gray-800 rounded-lg p-2 mb-2'>{data.overview}</h2>
                    
                    </div>
                    <div >
                    <h2 className='text-gray-100 text-md font-bold  py-2 flex justify-between items-center bg-gray-800 rounded-lg p-2 mb-2'><span className='text-white'>Languages :  <span className='text-gray-300'> {data.original_language}</span> </span><span className='text-gray-300'><span className='text-white'>Production Countries : {data.production_countries.map((production: any) => production.name).join(", ")}</span></span></h2>
                    </div>
                    <div >
                    <h2 className='text-gray-100 text-md font-bold  py-2 bg-gray-800 rounded-lg p-2 mb-2'>Production Companies
                     : <span className='text-gray-300'>{data.production_companies
                     .map((production: any)=>production.name ).join(", ") }  </span></h2>
      
                    </div>
                    <div >
                    <h2 className='text-gray-100 text-md font-bold  py-2 flex justify-between '>
                      <span className="text-white  bg-gray-800 rounded-lg p-2 mb-2">
    Budget :{" "}
    <span className="text-gray-300">
      {/* {data.budget >= 1000000
        ? `${(data.budget / 1000000).toFixed(1)} M`
        : data.budget >= 1000
        ? `${(data.budget / 1000).toFixed(0)} K`
        : data.budget}
      $ */}
      {
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.budget)
}

    </span>
  </span>
  
  <span className="text-white bg-gray-800 rounded-lg p-2 mb-2">
    Revenue :{" "}
    <span className="text-gray-300  ">
{
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data.revenue)
}
      {/* {data.revenue >= 1000000
        ? `${(data.revenue / 1000000).toFixed(1)} M`
        : data.revenue >= 1000
        ? `${(data.revenue / 1000).toFixed(0)} K`
        : data.revenue}
      $ */}
    </span>
  </span>
  </h2>
  <div >
                    <h2 className='text-gray-100 text-md font-bold  py-2 bg-gray-800 rounded-lg p-2 mb-2'>Genres
                     : <span className='text-gray-300'>{data.genres.map((gen: any)=>gen.name ).join(" , ") }  </span></h2>
      
                    </div>
                     
                    </div>
                  </div>

                  
                    <div className='flex flex-col justify-around  h-90 w-1/4 mx-auto'>
                   <div className='flex  items-center w-full justify-center  '>

                   
                    <div className='flex flex-col items-center w-24 '>
                          
                        <div className='flex flex-col items-center '>
                             <span className='font-bold text-sm w-24'>C.AM RATING</span>
                             <div className='flex items-center gap-2 '>
                                <FaStar className='text-yellow-400 text-3xl'/>
                                <div className='flex flex-col'>
                                  
                <span className='  text-sm  font-bold '>{data.vote_average.toFixed(1)} / 10</span>
<span className="text-white text-sm  font-bold">
  
      {data.vote_count >= 1000000
        ? `${(data.vote_count / 1000000).toFixed(2)} M`
        : data.vote_count >= 1000
        ? `${(data.vote_count / 1000).toFixed(0)} K`
        : data.vote_count>0?`${data.vote_count }`:""}
  </span>              </div>
                     </div>
                 </div>   
        </div>
             <div className='flex flex-col items-center w-24   mb-5 ms-2  '>
  <span className="text-white font-bold text-sm ">POPULARITY</span>
  <span className="text-gray-300 text-sm  font-bold">
    {data.popularity >= 1000000
      ? `${(data.popularity / 1000000).toFixed(2)} M`
      : data.popularity >= 1000
      ? `${(data.popularity / 1000).toFixed(0)} K`
      : data.popularity.toFixed(0)}
  </span>
</div>
<div  className=' flex flex-col items-center w-30   mb-2.5 ms-2 '>
  <span className='font-bold text-sm w-full'>YOUR RATING</span>
 <Link href={""}><span className='flex justify-between items-center font-bold text-md '><FaStar className='me-2 text-3xl text-white '/> Rate</span> </Link>
</div>

</div>
<div className="mb-8 mt-4">
  <SmallSwiper imgData={imgData} size="small" />
</div>
  </div>
    </div>
    <ReviewsList reviews={reviewsData.results} />
    </div>
  )
}

export default MovieId
{/* <div className="p-4">
  <h2 className='font-bold my-2 text-xl'>Reviews</h2>

  {reviewsData.results.length > 0 ? (
    reviewsData.results.map((review: any) => {
      const [showFull, setShowFull] = useState(false);
      const MAX_LENGTH = 200;

      const isLong = review.content.length > MAX_LENGTH;
      const displayedText = showFull
        ? review.content
        : review.content.slice(0, MAX_LENGTH);

      return (
        <div className='w-full flex justify-center' key={review.id}>
          <div className="flex gap-3 mb-4 bg-gray-700 p-4 rounded-lg w-[90rem]">
            
            <div className="w-[50px] h-[50px] rounded-lg bg-gray-300 text-black text-center text-3xl flex items-center justify-center font-bold">
              {review.author && review.author[0]}
            </div>

            <div className="flex flex-col">
              
              <h2 className="font-semibold text-xl text-gray-100">
                {review.author}
              </h2>

              <span className='text-gray-200 mb-2'>
                {new Date(review.created_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }).replace(/,/g, "")}
              </span>

              <p className="text-m text-gray-300 max-w-[1400px]">
                {displayedText}
                {!showFull && isLong && "…"}
              </p>

              {isLong && (
                <button
                  className="text-blue-400 mt-2 hover:underline w-fit"
                  onClick={() => setShowFull(!showFull)}
                >
                  {showFull ? "Show less" : "See all"}
                </button>
              )}

            </div>

          </div>
        </div>
      );
    })
  ) : (
    <div>No Reviews found</div>
  )}
</div> */}




