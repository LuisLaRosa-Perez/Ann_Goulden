import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Habilita exportación estática
  images: {
    unoptimized: true, // Evita problemas con imágenes externas
  },
};

export default nextConfig;
