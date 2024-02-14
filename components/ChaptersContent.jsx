"use client";
import Image from "next/image";

export default function ChaptersContent({ chaptersContent, chapter }) {
  console.log(chaptersContent, "CONTENT HERE!");
  return (
    <div>
      {chapter && (
        <h1 className="text-emerald-500 text-center mb-5 font-bold text-4xl">
          Chapter {chapter}
        </h1>
      )}
      {chaptersContent?.map(content => (
        <div key={content.index} className="flex justify-center">
          <Image
            src={content.url}
            alt="content-img"
            width={800}
            height={500}
            className="w-full"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
