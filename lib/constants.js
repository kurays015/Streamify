export const urls = [
  `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`,
  // `${process.env.TMDB_BASE_URL}/3/tv/popular?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/movie/top_rated?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/tv/top_rated?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/movie/upcoming?api_key=${process.env.API_KEY}`,
  `${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20`,
  `${process.env.SOURCE_URL1}/meta/anilist/recent-episodes`,
  `${process.env.SOURCE_URL1}/meta/anilist/trending?perPage=20
  `,
];

export const embedUrls = [
  {
    name: "vidlink",
    baseUrl: "https://vidlink.pro",
  },
  {
    name: "vidsrc-xyz",
    baseUrl: "https://vidsrc.xyz",
  },
  {
    name: "vidsrc.net",
    baseUrl: "https://vidsrc.net",
  },
  {
    name: "vidsrc.icu",
    baseUrl: "https://vidsrc.icu",
  },
  {
    name: "vidbinge",
    baseUrl: "https://vidbinge.dev",
  },
  {
    name: "embed.su",
    baseUrl: "https://embed.su",
  },
  {
    name: "nontongo",
    baseUrl: "https://nontongo.win",
  },
];
