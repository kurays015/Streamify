import titleHandler from "@/lib/titleHandler";
import Image from "next/image";
import React from "react";

export default function Card({ image, title, episodeNumber }) {
  return (
    <>
      <Image
        src={image}
        alt={titleHandler(title)}
        width={200}
        height={200}
        className="w-full h-[90%]  rounded-lg"
      />
      <h1 className="text-center text-white text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full mt-2">
        {titleHandler(title)}
      </h1>
      {episodeNumber && (
        <div className="absolute bottom-10 left-3 bg-red-500 text-white text-xs font-semibold p-2 rounded md">
          Episode {episodeNumber}
        </div>
      )}
    </>
  );
}
