/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   // domains: [
  //   //   "img.movieshd.watch",
  //   //   "gogocdn.net",
  //   //   "s4.anilist.co",
  //   //   "meo.comick.pictures",
  //   //   "media.kitsu.io",
  //   // ],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //       port: "",
  //       pathname: "/*/**",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
