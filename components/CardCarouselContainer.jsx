import { urls } from "@/lib/constants";
import { CardCarousel } from "./CardCarousel";
import CarouselTitle from "./CarouselTitle";
import React from "react";

export default async function CardCarouselContainer() {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const data = await Promise.all(responses.map(response => response.json()));
  return (
    <div className="px-2">
      {data.map((d, index) => (
        <React.Fragment key={index}>
          {d.statusCode === 500 ? null : (
            <div key={index}>
              <CarouselTitle index={index} />
              <CardCarousel data={d.results} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
