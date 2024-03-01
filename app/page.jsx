import UpcomingMovies from "@/components/meta/tmdb/UpcomingMovies";
import Footer from "@/components/Footer";
import TrendingMoviesCarousel from "@/components/meta/tmdb/TrendingMoviesCarousel";
import RecentEpisodes from "@/components/meta/anilist(anime)/RecentEpisodes";
import Trending from "@/components/meta/anilist(anime)/Trending";
import Popular from "@/components/meta/anilist(anime)/Popular";
import PopularMovies from "@/components/meta/tmdb/PopularMovies";
import TopRatedMovies from "@/components/meta/tmdb/TopRatedMovies";
import PopularTVSeries from "@/components/meta/tmdb/PopularTVSeries";
import TopRatedTVSeries from "@/components/meta/tmdb/TopRatedTVSeries";

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <TrendingMoviesCarousel />
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
      <PopularTVSeries />
      <TopRatedTVSeries />
      <RecentEpisodes />
      <Trending />
      <Popular />
      <Footer />
    </main>
  );
}
