"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchFilter } from "../Types";
function Search() {
const [query, setQuery] = useState("");
const [results, setResults] = useState<SearchFilter[]>([]);
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false); 
const boxRef = useRef<HTMLDivElement>(null);

// -----------------------------
// Close On Click Outside
// -----------------------------
useEffect(() => {
  const handler = (e: any) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      setOpen(false);
      
    }
  };
  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);

// -----------------------------
// Debounce Effect
// -----------------------------
useEffect(() => {
  if (!query) {
    setResults([]);
    return;
  }

  const delay = setTimeout(() => {
    fetchData(query);
}, 400);

  return () => clearTimeout(delay);
}, [query]);

// -----------------------------
// Fetch Data (Movie + TV Only)
// -----------------------------
const fetchData = async (searchTerm: string) => {
  try {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=a5c13fc09b1950b338b046e79ea8e6b1&query=${searchTerm}`
    );
    const data = await res.json();

    const filtered = data.results?.filter((item: SearchFilter) =>
      ["movie", "tv"].includes(item.media_type)
    );

   setResults(filtered || []);
    setOpen(true);
  } finally {
    setLoading(false);
  }
};

return (
  <div ref={boxRef} className="w-full md:w-[14em] relative">

    {/* Input */}
    <input
      type="text"
      placeholder="Search movies & series..."
      className="w-full p-2 rounded-lg border border-gray-400 text-white"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onFocus={() => query && setOpen(true)}
    />

    {/* Skeleton Loading */}
    {loading && (
      <ul className="absolute bg-gray-900 text-white w-full top-[105%] rounded-lg p-3 space-y-2 shadow-xl">
        {[...Array(4)].map((_, i) => (
          <li
            key={i}
            className="animate-pulse flex items-center gap-3 border-b border-gray-700 pb-2"
          >
            <div className="w-12 h-16 bg-gray-700 rounded"></div>
            <div className="w-full">
              <div className="w-32 h-3 bg-gray-700 rounded mb-2"></div>
              <div className="w-20 h-3 bg-gray-700 rounded"></div>
            </div>
          </li>
        ))}
      </ul>
    )}

    {/* Results */}
    {!loading && open && results.length > 0 && (
      <ul className="absolute bg-gray-900 text-white w-full top-[105%] max-h-72 overflow-y-auto rounded-lg shadow-xl z-50">

        {results.map((item) => {
          const title = item.media_type === "movie" ? item.title : item.name;
          const img = item.poster_path
            ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
            : "/no-image.jpg";

          const link =
            item.media_type === "movie"
              ? `/movies/${item.id}`
              : `/series/${item.id}`;

          return (
            <Link href={link} key={item.id}>
              <li className="flex p-3 items-center gap-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer">

                <img
                  src={img}
                  className="w-12 h-16 object-cover rounded"
                  alt=""
                />

                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-xs text-gray-300 uppercase">
                    {item.media_type}
                  </p>
                  <p className="text-yellow-400 text-sm">
                    ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                  </p>
                </div>

              </li>
            </Link>
          );
        })}
      </ul>
    )}

    {/* No Results */}
    {!loading && open && results.length === 0 && query.length > 0 && (
      <div className="absolute bg-gray-900 text-white w-full top-[105%] p-3 rounded-lg shadow-xl">
        No results found.
      </div>
    )}
  </div>
);
}

export default Search;
