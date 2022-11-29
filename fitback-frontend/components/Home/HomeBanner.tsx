import { Banner } from "../../interfaces/HomeInterface";
import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./HomeBannerIcon";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface carouselProps {
  banner: Banner;
}

export default function HomeBanner(props: carouselProps) {
  const { banner } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {banner.banners.map((b, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <Image
                  src={b}
                  alt="home-banner"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} />
      <NextButton onClick={scrollNext} />
      <div className="embla__dots">
        {banner.banners.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      <style jsx>{`
        .embla {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }

        .embla__viewport.is-draggable {
          cursor: move;
          cursor: grab;
        }

        .embla__viewport.is-dragging {
          cursor: grabbing;
        }

        .embla__container {
          display: flex;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .embla__slide {
          position: relative;
          min-width: 100%;
        }

        .embla__slide__inner {
          position: relative;
          overflow: hidden;
          width: 100vw;
          height: 300px;
        }

        .embla__dots {
          display: flex;
          flex-direction: row;
          gap: 5px;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translate(-50%, 0);
        }
      `}</style>
    </div>
  );
}
