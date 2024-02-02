import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function TrendingCarousel({ data }) {
  return (
    <Carousel className="absolute">
      <CarouselContent className="-ml-1">
        {data
          ?.filter(result => result.title !== "Shaun the Sheep Movie")
          .map(result => (
            <CarouselItem key={result.id} className="pl-1 relative">
              <div className="absolute h-full top-0 bottom-0 left-0 right-0 w-full bg-customTransparent z-10 test"></div>
              <div className="text-white text-2xl">{result.title}</div>
              <div
                style={{
                  backgroundImage: `url("${result.cover}")`,
                }}
                className="h-screen w-full bg-no-repeat bg-cover"
              ></div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
