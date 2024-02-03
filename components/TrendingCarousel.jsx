import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TrendingCarouselContent from "./TrendingCarouselContent";

export function TrendingCarousel({ data }) {
  return (
    <>
      <div className="h-[550px]"></div>
      <Carousel className="absolute inset-0" opts={{ loop: true }}>
        <CarouselContent className="-ml-1">
          {data?.map((result, index) => (
            <CarouselItem key={result.id} className="pl-1 gap-0 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-black opacity-75"></div>
              <div
                style={{
                  backgroundImage: `url("${result.cover}")`,
                }}
                className="h-screen w-full bg-no-repeat bg-cover "
              ></div>
              <TrendingCarouselContent {...result} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
