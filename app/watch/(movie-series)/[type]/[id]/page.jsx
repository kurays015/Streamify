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

    return data;
  } catch (error) {
    console.log(error);
  }
}

// async function getServers(params) {
//   try {
//     const { type, id } = params;
//     const moviesHd = new movies.MovieHdWatch();
//     const idNumber = id.match(/\d+/)[0];

//     const servers = await moviesHd.fetchEpisodeServers(
//       idNumber,
//       `${type}/${id}`
//     );

//     if (!servers) {
//       throw new Error("Error fetching servers.");
//     }
//     return servers;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function page({ params }) {
  const sources = await getMoviesAndSeries(params);

  return (
    <div className="text-white text-5xl">
      <VideoPlayer videoSources={sources} />
    </div>
  );
}
