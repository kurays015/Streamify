import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TrendingCarouselContent from "./TrendingCarouselContent";
import Overlay from "./Overlay";

export function TrendingCarousel({ data }) {
  return (
    <>
      <div className="h-[600px]"></div>
      <Carousel className="absolute h-screen inset-0" opts={{ loop: true }}>
        <CarouselContent className="-ml-1">
          {data?.map((result, index) => (
            <CarouselItem key={result.id} className="p-0 relative">
              <Overlay />
              <div
                style={{
                  backgroundImage: `url("${result.cover}")`,
                }}
                className="h-screen w-full bg-no-repeat bg-cover"
              ></div>
              <TrendingCarouselContent {...result} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
