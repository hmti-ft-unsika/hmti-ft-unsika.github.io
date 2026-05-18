import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- WAJIB! Supaya Next.js memproduksi folder 'out' saat di-build
  images: {
    unoptimized: true, // <-- WAJIB! Supaya tag <Image> Next.js tidak crash di server GitHub Pages
  },
};

export default nextConfig;