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
      <div className="h-[600px] customSm:h-[550px]"></div>
      <Carousel
        className="absolute inset-0 customSm:h-[80vh] lg:h-screen"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-1">
          {data?.map((result, index) => (
            <CarouselItem key={result.id} className="p-0 relative">
              <Overlay />
              <div
                style={{
                  backgroundImage: `url("${result.cover}")`,
                }}
                className="w-full bg-no-repeat bg-cover customSm:h-[80vh] customSm:bg-center lg:h-screen"
              ></div>
              <TrendingCarouselContent {...result} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
