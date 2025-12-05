"use client";
import { useState } from "react";

export default function ReviewCard({ review }: any) {
  const MAX_LENGTH = 200;
  const [showFull, setShowFull] = useState(false);

  const isLong = review.content.length > MAX_LENGTH;
  const displayedText = showFull ? review.content : review.content.slice(0, MAX_LENGTH);

  return (
    <div className='w-full flex justify-center'>
      <div className="flex gap-3 mb-4 bg-gray-700 p-4 rounded-lg w-full md:w-[80%]">
        <div className="min-w-[50px] h-[50px] rounded-lg bg-gray-300 text-black text-center text-3xl flex items-center justify-center font-bold">
          {review.author && review.author[0]}
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-xl text-gray-100">{review.author}</h2>

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
}
