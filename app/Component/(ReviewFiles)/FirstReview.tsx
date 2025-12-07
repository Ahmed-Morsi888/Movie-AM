"use client";
import ReviewCard from "../(ReviewFiles)/ReviewCard";
import {ReviewType} from "../../Types";

export default function FirstReview({ reviews }: { reviews: ReviewType[] }) {
  const firstReview = reviews?.[0];  

  return (
    <div className="flex flex-col items-start justify-center w-full ">
      <h2 className="md:w-[15rem] text-right font-bold my-2 text-xl text-white">Reviews</h2>
      <div>
      {firstReview ? (
        <ReviewCard key={firstReview.id} review={firstReview} />
      ) : (
        <div className= "text-gray-300">No Reviews found</div>
      )}

      </div>
    </div>
  );
}
