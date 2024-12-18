"use client";
import { embedUrls } from "@/lib/constants";
import { Button } from "./ui/button";
import { useState } from "react";

export default function EmbeddedVideo({ queryParams, title }) {
  const [embedUrl, setEmbedUrl] = useState("https://vidlink.pro");

  return (
    <div className="flex flex-col items-center p-2 bg-gray-900 ">
      <div className="w-full  aspect-video rounded-md overflow-hidden shadow-lg ">
        <iframe
          className="w-full h-full"
          src={`${embedUrl}/${queryParams}?autoplay=false`}
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-8 w-full max-w-5xl px-4">
        <div className="text-center mb-4">
          <h1 className="text-lg md:text-xl font-bold text-yellow-300  ">
            Select a source
          </h1>
          <p className="text-slate-300">
            If the video is buffering or doesn&apos;t work, try another source.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {embedUrls.map(({ name, baseUrl }, index) => {
            const newEmbedUrl = index === 0 ? baseUrl : `${baseUrl}/embed`;
            const isSelected = embedUrl === newEmbedUrl;

            return (
              <Button
                onClick={() => setEmbedUrl(newEmbedUrl)}
                key={name}
                className={`hover:bg-slate-200 hover:text-black px-6 py-3 text-sm md:text-base bg-slate-700 text-white rounded-md transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-blue-500 ring-2 ring-blue-400 scale-105"
                    : "border border-transparent hover:scale-105"
                }`}
              >
                {name}
              </Button>
            );
          })}
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-12 mb-4 text-center text-white">
        {decodeURIComponent(title)}
      </h1>
    </div>
  );
}
