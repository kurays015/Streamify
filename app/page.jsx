import Header from "@/components/Header";
import RecentEpisodes from "@/components/ganime/RecentEpisodes";
import TopAiring from "@/components/ganime/TopAiring";
import Popular from "@/components/anilist/Popular";
import Trending from "@/components/anilist/Trending";
import Cover from "@/components/Cover";
import TrendingMovies from "@/components/tmdb/TrendingMovies";
import RecentMovies from "@/components/tmdb/RecentMovies";
import RecentTvShows from "@/components/tmdb/RecentTvShows";
import TrendingTvShows from "@/components/tmdb/TrendingTvShows";

export default async function Home() {
  return (
    <main className="">
      <Header />
      <div className="h-[550px] max-w-7xl mx-auto relative">
        {/* <h1 className="text-4xl ">
          What would you like to watch this afternoon?
        </h1> */}
      </div>
      <TrendingMovies />
      <RecentMovies />
      <RecentTvShows />
      <TrendingTvShows />
      <RecentEpisodes />
      <Trending />
      <TopAiring />
      <Popular />
      <Cover />
    </main>
  );
}

// https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg

// https://wallpapercave.com/uwp/uwp3589179.jpeg
