import { movies } from "@/lib/constants";
import InfoContent from "@/components/InfoContent";

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
  return <InfoContent infoData={movieInfo} type={params.type} />;
}
