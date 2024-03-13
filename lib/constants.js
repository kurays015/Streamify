export const categories = ["Gogoanime", "Light Novel", "Comicks", "News"];

export const providers = ["Anime", "Manga", "Movie"];

export const urls = [
  `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/tv/popular?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/movie/top_rated?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/tv/top_rated?api_key=${process.env.API_KEY}`,
  `${process.env.TMDB_BASE_URL}/3/movie/upcoming?api_key=${process.env.API_KEY}`,
  `${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20`,
  `${process.env.SOURCE_URL1}/meta/anilist/recent-episodes`,
  `${process.env.SOURCE_URL1}/meta/anilist/trending?perPage=20
  `,
];
