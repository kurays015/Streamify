"use client";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import ReusableSelect from "@/components/ReusableSelect";
import EmbeddedVideo from "@/components/embedded/EmbeddedVideo";
import FilteredEpisodes from "@/components/episodes/FilteredEpisodes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmbeddedVideoPage() {
  const [id, setId] = useState(null);
  const [infos, setInfos] = useState(null);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const episode = searchParams.get("episode");
  const season = searchParams.get("season");
  const title = searchParams.get("title");

  useEffect(() => {
    const id = localStorage.getItem("id");
    const infos = JSON.parse(localStorage.getItem("infos") || null);
    setInfos(infos);
    setId(id);
  }, []);

  const params =
    type === "Movie"
      ? `movie/${id}`
      : `tv/${id}/${season ? season : 1}/${episode ? episode : 1}`;

  const info = infos && infos;

  return (
    <main
      className={`relative ${
        type === "TV Series" ? "max-w-7xl mx-auto lg:mt-12 h-screen" : ""
      }`}
    >
      {searchParams.toString() && <EmbeddedVideo type={type} params={params} />}
      {type === "TV Series" && (
        <h1 className="text-slate-300 font-semibold text-center mt-5 customSm:p-2 customSm:text-base md:text-lg lg:text-xl lg:p-0">
          {title}
        </h1>
      )}
      {type === "TV Series" && (
        <div className="customSm:p-2 lg:p-0">
          <ReusableSelect info={info} />
          <FilteredEpisodes info={info} />
        </div>
      )}
      <span className="text-slate-400 font-medium text-xs absolute bottom-5 text-center w-full">
        You want no ads? Download brave browser!
      </span>
    </main>
  );
}
