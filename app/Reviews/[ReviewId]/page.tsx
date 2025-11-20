import React from "react";
import ReviewCard from "../../Component/ReviewCard";

interface Props {
  params: {
    ReviewId: string;
  };
}

async function Page({ params }: Props) {
  console.log(params.ReviewId);
   const reviews = await fetch( `https:api.themoviedb.org/3/movie/${params.ReviewId}/reviews?api_key=a5c13fc09b1950b338b046e79ea8e6b1`,{ cache: "no-store" });
   const reviewsData = await reviews.json();
return(<div className="p-4">
        <h2 className='font-bold my-2 text-xl text-white'>Reviews</h2>
 
        {reviewsData.results.length > 0 ? (
          reviewsData.results.map((review: any) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <div className="text-gray-300">No Reviews found</div>
        )}
      </div>)
      
    
 }
 


export default Page;
