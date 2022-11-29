import { Incumbent } from "../../interfaces/IncumbentInterface";
import IncumbentItem from "../Incumbent/IncumbentItem";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function IncumbentCarousel() {
  const tmp: Incumbent = {
    name: "중규리",
    img: "https://i.pinimg.com/736x/49/fd/16/49fd16c2857d9ce982f4839958b1808a.jpg",
    ment: "토스 가고 싶어?\n나도 가고 싶어...",
    company: "비바리퍼블리카",
    job: "프론트엔드 개발",
    career: 1,
    reviews: 10,
    satisfaction: 99,
  };
  const tmps = [tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp];

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    // 스크롤하고 있는 뷰의 콘텐츠 인덱스를 배열로 넣음
    const viewIndexs = embla.slidesInView();
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="container">
      <div className="title-box">
        <span>관심 분야에 맞는 멘토를 추천해드려요.</span>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {tmps.map((tmp, index) => (
              <div key={`${tmp.name}-${index}`}>
                <IncumbentItem info={tmp} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="prev-btn"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="next-btn"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title-box {
          width: 1300px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          padding: 0px 0px 0px 20px;
        }
        .embla {
          position: relative;
          width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
          padding: 20px;
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
          margin-left: -10px;
          gap: 40px;
        }
        button {
          border: none;
          background: none;
          position: absolute;
          color: #3b3b3b;
          cursor: pointer;
          width: 25px;
          height: 25px;
          transition: all 0.25s;
        }
        .prev-btn {
          top: 50%;
          left: -50px;
          transform: translate(0, -50%);
        }
        .next-btn {
          top: 50%;
          right: -50px;
          transform: translate(0, -50%);
        }
        button:hover {
          color: #30b5ff;
        }
      `}</style>
    </div>
  );
}
