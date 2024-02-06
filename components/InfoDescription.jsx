"use client";
import { useState } from "react";

export default function InfoDescription({ description, maxLength }) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="text-gray-300 text-lg leading-8 font-medium max-w-2xl overflow-auto max-h-64 scrollbar-gray">
      {seeMore ? (
        <span>
          {description}
          <span
            onClick={() => setSeeMore(false)}
            className="text-yellow-500 text-xs cursor-pointer"
          >
            See less
          </span>
        </span>
      ) : (
        <>
          {description.length > maxLength ? (
            <span>{description.slice(0, maxLength)}...</span>
          ) : (
            description
          )}
          {description.length > maxLength && (
            <span
              onClick={() => setSeeMore(prev => !prev)}
              className="text-yellow-500 text-xs cursor-pointer"
            >
              See more
            </span>
          )}
        </>
      )}
    </div>
  );
}
