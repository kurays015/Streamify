import { movies } from "@/lib/constants";
import MainInfoContent from "@/components/infos/MainInfoContent";

async function getMovieInfo(params) {
  try {
    const { type, id } = params;
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
  return <MainInfoContent infoData={movieInfo} type={params.type} />;
}
