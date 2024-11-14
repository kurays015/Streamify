"use client";
import { useState } from "react";

export default function InfoDescription({ description, maxLength, fontSize }) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`text-gray-300 leading-8 font-medium max-w-2xl overflow-auto max-h-64 scrollbar-gray customSm:text-sm lg:text-${fontSize}`}
    >
      {seeMore ? (
        <div>
          <p>
            {description}
            <span
              onClick={e => {
                e.stopPropagation();
                setSeeMore(false);
              }}
              className="text-yellow-500 cursor-pointer customSm:text-xs lg:text-sm"
            >
              {" "}
              See less
            </span>
          </p>
        </div>
      ) : (
        <>
          {description.length > maxLength ? (
            <span>{description.slice(0, maxLength)}...</span>
          ) : (
            description
          )}
          {description.length > maxLength && (
            <span
              onClick={e => {
                e.stopPropagation();
                setSeeMore(true);
              }}
              className="text-yellow-500 cursor-pointer customSm:text-xs lg:text-sm"
            >
              See more
            </span>
          )}
        </>
      )}
    </div>
  );
}
