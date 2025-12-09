// "use client"
// import { useSearchParams } from 'next/navigation';
// import React, { useState } from 'react'
// import { FaStar } from 'react-icons/fa';
// import { MovId } from '../Types';

// function RatePage(params:any) {

//     const stars = [0,1,2,3,4]; 
//     const [rate, setRate] = useState<number | null>(0);
//     const [hover, setHover] = useState<number | null>(null);

//  async function fetchRating(rate: number) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${params.movieId}/rating?api_key=a5c13fc09b1950b338b046e79ea8e6b1`,
//     {
//       method: 'POST',
//         headers: {
//     accept: 'application/json',
//     'Content-Type': 'application/json;charset=utf-8',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM2NTcxZWU5NjMwZjdlZjIxMGZmNmUxMGEwMDc4ZCIsIm5iZiI6MTc2MzQ3NDM3NC42OTkwMDAxLCJzdWIiOiI2OTFjN2JjNjJkNjdlMDJlN2VjN2Q0OTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i34PUakOkXpY7TL6AqysdWvCDD6V-O8eElkd8rgsBVE'
//   },
//       body: JSON.stringify({ value: rate * 2 }), // TMDB يقيم من 0.5 إلى 10
//     }
//   );
//   const data = await res.json();
//   console.log(data);
// }
//     return (
//         <div className='w-full h-screen flex justify-center items-center bg-gray-400 ' >
//             <div className='w-1/3 text-center py-10 border-2 border-gray-200 flex flex-col bg-gray-700 rounded-lg '>
//                 <h2 className='text-white text-xl font-bold mb-4'>Rate This Movie</h2>

//                 <div className='flex justify-center items-center gap-4 text-3xl cursor-pointer'>
//                     {stars.map((star, index) => {
//                         const isYellow = hover !== null ? index < hover : index < (rate ?? 0);
//                         return (
//                             <button
//                                 key={index}
//                                 type='button'
//                                 onClick={() => setRate(index + 1)}
//                                 onMouseEnter={() => setHover(index + 1)}
//                                 onMouseLeave={() => setHover(null)}
//                             >
//                                 <FaStar className={isYellow ? 'text-yellow-400' : 'text-gray-500'} />
//                             </button>
//                         )
//                     })}
//                 </div>

//                 {rate ? (
//                     <div>
//                         <p className='text-white text-xl mt-4'>You rated this movie: {rate*2} stars</p>
//                         <button type='button'onClick={()=>{
//                            if(rate) fetchRating(rate);
//                         }} className='bg-green-700 text-white px-5 py-3 rounded-lg cursor-pointer my-2 focus:scale-90 '>Send</button>
//                     </div>
//                 ) : null}
//             </div>
//         </div>
//     )
// }

// export default RatePage;
"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface RatePageProps {
  movieId: string;
   onClose: () => void;
}

function RatePage({ movieId,onClose }: RatePageProps) {
  const movieIdNumber = Number(movieId); // حوله لرقم
  const stars = [0, 1, 2, 3, 4];
  const [rate, setRate] = useState<number | null>(0);
  const [hover, setHover] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  
  useEffect(() => {
    async function checkMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieIdNumber}?api_key=a5c13fc09b1950b338b046e79ea8e6b1`
        );
        if (!res.ok) {
          setError("Invalid movie ID or movie not found!");
        } else {
          setError(null);
        }
      } catch (err) {
        setError("Network error or invalid movie ID!");
      }
    }
    checkMovie();
  }, [movieId]);

  async function sendRating(rate: number) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieIdNumber}/rating?api_key=a5c13fc09b1950b338b046e79ea8e6b1`,
        {
          method: 'POST',
         headers: {
     accept: 'application/json',
     'Content-Type': 'application/json;charset=utf-8',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM2NTcxZWU5NjMwZjdlZjIxMGZmNmUxMGEwMDc4ZCIsIm5iZiI6MTc2MzQ3NDM3NC42OTkwMDAxLCJzdWIiOiI2OTFjN2JjNjJkNjdlMDJlN2VjN2Q0OTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i34PUakOkXpY7TL6AqysdWvCDD6V-O8eElkd8rgsBVE'
   },
          body: JSON.stringify({ value: rate }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success){
        onClose();
        alert("Rating submitted!");
      }
      else alert("Error: " + data.status_message);
    } catch (err) {
      console.error(err);
      alert("Network error, try again!");
    }
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-400">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className={`w-full  fixed top-13 h-screen md:top-0 flex justify-center items-center  bgOpacity  `}>
      <div className="w-[90%] md:w-1/2 text-center py-10 border-2 border-gray-200 flex flex-col bg-gray-800 rounded-lg ">
        <h2 className="text-white text-xl font-bold mb-4">Rate This Movie</h2>

        <div className="flex justify-center items-center gap-4 text-3xl cursor-pointer">
          {stars.map((star, index) => {
            const isYellow = hover !== null ? index < hover : index < (rate ?? 0);
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRate((index + 1))}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(null)}
              >
                <FaStar className={isYellow ? "text-yellow-400" : "text-gray-500"} />
              </button>
            );
          })}
        </div>

        {rate ? (
          <div>
            <p className="text-white text-xl mt-4">You rated this movie: {rate * 2} stars</p>
            <button
              type="button"
              onClick={() => sendRating(rate * 2)}
              className="bg-green-700 text-white px-5 py-3 rounded-lg cursor-pointer my-2 focus:scale-90"
            >
              Send
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RatePage;
