"use client";

import { useState } from "react";
import RatePage from "./RatePage";
import { FaStar } from "react-icons/fa";

export default function RateWrapper({ movieId }: { movieId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setOpen(true)} 
        className="cursor-pointer font-bold text-md flex items-center text-white"
        >
        <FaStar className="mx-2 text-2xl " /> 
        Rate
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 z-1000 flex justify-center items-center ">
          <div className="relative w-full max-w-3xl">
            <RatePage movieId={movieId} onClose={() => setOpen(false)} />

            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-[-65]  right-8 md:right-90 lg:right-100 md:top-[-120] text-white text-2xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
