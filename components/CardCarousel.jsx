import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
import Link from "next/link";
import infoUrl from "@/lib/infoUrl";

export function CardCarousel({ data }) {
  return (
    <Carousel
      className="w-full lg:max-w-7xl mx-auto relative group z-50"
      opts={{ dragFree: true, loop: false }}
    >
      <CarouselContent className="-ml-1 flex customSm:gap-1 lg:gap-2">
        {data?.map(result => (
          <CarouselItem
            key={result.id}
            className="pl-1 relative customSm:basis-1/2 customSemiMd:basis-1/3 customSemiMd2:basis-1/4 md:basis-1/5 lg:basis-1/6"
          >
            <Link href={infoUrl(result)}>
              <Card {...result} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-0 bottom-0 h-full  rounded-none border-none hidden group-hover:flex group-hover:bg-customTransparent" />
      <CarouselNext className="absolute right-0 top-0 bottom-0 h-full   rounded-none border-none hidden group-hover:flex group-hover:bg-customTransparent" />
    </Carousel>
  );
}
