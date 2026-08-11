import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The site consolidated to a single-page layout with anchored sections.
    // These routes used to be standalone pages with their own (inconsistent)
    // design; keep the URLs alive for anyone with an old link/bookmark by
    // sending them to the matching section instead of a 404.
    return [
      { source: "/about-me", destination: "/#about", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
