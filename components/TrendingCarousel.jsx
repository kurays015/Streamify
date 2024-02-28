import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TrendingCarouselContent from "./TrendingCarouselContent";
import CoverImage from "./CoverImage";
import tmdbImgHandler from "@/lib/tmdbImg";

export function TrendingCarousel({ data }) {
  return (
    <>
      <div className="customSm:h-[550px] xl:h-[450px]"></div>
      <Carousel
        className="absolute inset-0 customSm:h-[80vh] lg:h-screen"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-1">
          {data.map((result, index) => (
            <CarouselItem key={result.id} className="p-0 relative">
              <CoverImage cover={tmdbImgHandler(result.backdrop_path)} />
              <TrendingCarouselContent {...result} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
