"use client";
import ReviewCard from "../(ReviewFiles)/ReviewCard";
import {ReviewType} from "../../Types";

export default function ReviewsList({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div className="p-4">
      <h2 className='font-bold my-2 text-xl text-white'>Reviews</h2>

      {reviews.length > 0 ? (
        reviews.map((review: ReviewType) => (
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <div className="text-gray-300">No Reviews found</div>
      )}
    </div>
  );
}
