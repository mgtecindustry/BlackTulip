import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Adaugă această linie pentru exportul static
  images: {
    domains: ["oqjgdpuknnexaacahemq.supabase.co"], // Elimină https:// din domeniu
  },
};

export default nextConfig;
