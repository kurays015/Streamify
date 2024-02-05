import Card from "@/components/Card";
import GenresBadge from "@/components/GenresBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { movies } from "@/lib/constants";
import infoUrl from "@/lib/infoUrl";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaStar, FaPlus } from "react-icons/fa6";

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
  return (
    <div className="">
      <div className="relative h-screen inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-black opacity-75 z-10"></div>
        <div
          style={{
            backgroundImage: `url("${movieInfo.cover}")`,
          }}
          className="absolute h-screen -top-36  w-full bg-no-repeat bg-cover "
        ></div>
        <div className="relative top-[37%] z-10 max-w-7xl mx-auto ">
          <div className="flex gap-28">
            <Image
              src={movieInfo.image}
              height={200}
              width={200}
              className="w-1/4 rounded-md"
            />
            <div>
              <h1 className="font-bold text-4xl text-white">
                {movieInfo.title}
              </h1>
              <div className="flex items-center gap-5 my-5 text-white">
                <div className="flex items-center gap-2 text-lg">
                  <div>
                    <FaStar className="text-[#e8b647] text-xl" />
                  </div>
                  <div className="text-base font-medium">
                    {movieInfo.rating}
                  </div>
                </div>
                <GenresBadge genres={movieInfo.genres} />
              </div>
              <p className="text-gray-300 text-lg leading-8 font-medium max-w-2xl">
                {movieInfo.description}
              </p>
              <div className="text-yellow-500 flex items-center gap-4 font-semibold">
                <div>{movieInfo.releaseDate}</div>
                <div>{movieInfo.duration}</div>
              </div>
              <div className="flex items-center gap-3 my-5">
                <Link href={""}>
                  <Button
                    variant="secondary"
                    className="text-base font-semibold py-6 px-10 hover:scale-105 transition-all"
                  >
                    <FaPlay className="text-lg mr-1" />
                    <span>Play now</span>
                  </Button>
                </Link>
                <Link href={""}>
                  <Button
                    variant="outline"
                    className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all"
                  >
                    <FaPlus className="mr-1" /> Add to Watchlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white ">
            <div className="mt-16 mb-5 font-semibold text-3xl">
              You may like
            </div>
            <div className="grid grid-cols-6 gap-5">
              {movieInfo.recommendations.map(recommendation => (
                <Link href={infoUrl(recommendation)} key={recommendation.id}>
                  <div>
                    <Card {...recommendation} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
