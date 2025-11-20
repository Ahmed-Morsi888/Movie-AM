"use client";
import ReviewCard from "../Component/ReviewCard";

export default function FirstReview({ reviews }: any) {
  const firstReview = reviews?.[0];  

  return (
    <div className="p-4">
      <h2 className="font-bold my-2 text-xl text-white">Reviews</h2>

      {firstReview ? (
        <ReviewCard key={firstReview.id} review={firstReview} />
      ) : (
        <div className="text-gray-300">No Reviews found</div>
      )}
    </div>
  );
}
