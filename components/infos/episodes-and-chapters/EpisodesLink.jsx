"use client";

import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function EpisodesLink({
  info,
  season_number,
  episode_number,
  name,
  still_path,
}) {
  const searchParams = useSearchParams();
  const currentEpisode = searchParams.get("episode");
  const currentSeason = searchParams.get("season");

  const isSelected =
    Number(currentEpisode) === episode_number &&
    Number(currentSeason) === season_number;

  console.log(isSelected);

  return (
    <Link
      href={`/embedded/${info.name}/tv/${info.id}?season=${season_number}&episode=${episode_number}`}
    >
      <div className="relative">
        <div
          className={` absolute top-2 left-2 font-bold bg-gray-800 bg-opacity-75 px-2 py-1 rounded customSm:text-sm lg:text-lg ${
            isSelected
              ? "border-2 border-blue-500 ring-2 ring-blue-400 scale-105"
              : ""
          }`}
        >
          S{season_number}-E{episode_number}
        </div>
        <Image
          src={tmdbImgHandler(still_path || info.backdrop_path)}
          className="w-full customSm:h-[100px] customSemiMd:h-[140px] rounded-lg text-white"
          alt={name}
          width={300}
          height={300}
        />
      </div>
    </Link>
  );
}
