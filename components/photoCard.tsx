"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function PhotoCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true , })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[460px]  group md:w-[600px] cursor-pointer"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="items-center">
        {["/gbu-1.jpeg","/gbu-2.jpeg","/gbu-3.jpeg","/gbu-4.png","/gbu-5.png","/gbu-6.png"].map((src, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <div className="p-1">
                <Image quality={100} className="rounded w-full h-full " src={src} width={450} height={450} alt="gbu"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
