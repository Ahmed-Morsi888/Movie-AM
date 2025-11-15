import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    domains: ["image.tmdb.org"], // السماح بتحميل الصور من TMDB
  },
};

export default nextConfig;
