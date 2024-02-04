import { movies } from "@/lib/constants";

async function getMovieInfo(params) {
  try {
    const { type, id } = params;
    console.log(params);
    const moviesHd = new movies.MovieHdWatch();

    const info = await moviesHd.fetchMediaInfo(`${type}/${id}`);

    if (!info) {
      throw new Error("Error fetching infos");
    }
    return info;
  } catch (error) {
    console.log(error);
  }
}

export default async function Info({ params }) {
  const movieInfo = await getMovieInfo(params);
  console.log(movieInfo);
  return <div className="text-white text-2xl">{params.id}</div>;
}
