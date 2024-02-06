"use client";
import { useState } from "react";

export default function InfoDescription({ description, maxLength }) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="text-gray-300 text-lg leading-8 font-medium max-w-2xl overflow-auto h-64 scrollbar-gray">
      {seeMore ? (
        <>
          <p className="">{description}</p>
          <span
            onClick={() => setSeeMore(false)}
            className="text-yellow-300 text-sm cursor-pointer"
          >
            see less
          </span>
        </>
      ) : (
        <p className="">
          {description.slice(0, maxLength)}
          {description.length > maxLength && "..."}
          <span
            onClick={() => setSeeMore(prev => !prev)}
            className="text-yellow-300 text-sm cursor-pointer"
          >
            See More
          </span>
        </p>
      )}
    </div>
  );
}
