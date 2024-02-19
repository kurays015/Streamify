import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TrendingCarouselContent from "./TrendingCarouselContent";
import Overlay from "./Overlay";
import CoverImage from "./CoverImage";

export function TrendingCarousel({ data }) {
  return (
    <>
      <div className="customSm:h-[550px] xl:h-[450px]"></div>
      <Carousel
        className="absolute inset-0 customSm:h-[80vh] lg:h-screen"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-1">
          {data?.map((result, index) => (
            <CarouselItem key={result.id} className="p-0 relative">
              <Overlay />
              <CoverImage cover={result.cover} />
              <TrendingCarouselContent {...result} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
