import VideoPlayer from "@/components/ArtPlayer";
import { movies } from "@/lib/constants";

async function getMoviesAndSeries(params) {
  const { type, id } = params;
  const moviesHd = new movies.MovieHdWatch();
  const idNumber = id.match(/\d+/)[0];

  try {
    const data = await moviesHd.fetchEpisodeSources(idNumber, `${type}/${id}`);

    if (!data) {
      throw new Error("Error fetching movie/series episodes.");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const sources = await getMoviesAndSeries(params);
  console.log(sources);
  return (
    <div>
      <VideoPlayer videoSources={sources} />
    </div>
  );
}
