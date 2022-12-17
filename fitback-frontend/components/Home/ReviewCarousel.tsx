import { Review } from "../../interfaces/ReviewInterface";
import ReviewItem from "../Review/ReviewItem";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Job, Jobs } from "../../res/jobClassification";

export default function ReviewCarousel() {
  const tmp: Review = {
    name: "중규리",
    img: "https://i.pinimg.com/736x/49/fd/16/49fd16c2857d9ce982f4839958b1808a.jpg",
    company: "비바리퍼블리카",
    job: "프론트엔드 개발",
    career: 1,
    reviewer: "이준규",
    content:
      "아 개졸리다... 왜이렇게 할게 많지? 도대체 왜일까 뭐가 문제일까 아부지 날 보고 있다면 정 답을알려죠아 개졸리다... 왜이렇게 할게 많지? 도대체 왜일까 뭐가 문제일까 아부지 날 보고 있다면 정 답을알려죠아 개졸리다... 왜이렇게 할게 많지? 도대체 왜일까 뭐가 문제일까 아부지 날 보고 있다면 정 답을알려죠 정 답을알려죠아 개졸리다... 왜이렇게 할게 많지? 도대체 왜일까 뭐가 문제일까 아부지 날 보고 있다면",
    // content: "짧은 리뷰",
    createdAt: "2022-11-29 13:48",
  };
  const tmps = [tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp, tmp];

  const [jobPeek, setJobPeek] = useState<Job>(Jobs.All);
  const [detail, setDetail] = useState<string>("");

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    loop: true,
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

  useEffect(() => {
    if (jobPeek.classification.length > 0) {
      setDetail(jobPeek.classification[0]);
    }
  }, [jobPeek]);

  return (
    <div className="container">
      <div className="title-box">
        <span className="title">생생한 피드백 후기</span>
        <div className="job-box">
          {Object.values(Jobs).map((job, index) => (
            <span
              key={`${index}-${job.name}`}
              className={jobPeek.name === job.name ? "peek" : "no-peek"}
              onClick={() => setJobPeek(job)}
            >
              {job.name}
            </span>
          ))}
        </div>
        {jobPeek.classification.length > 0 ? (
          <div className="detail-box">
            {jobPeek.classification.map((job, index) => (
              <span
                key={`${index}-${job}`}
                className={job === detail ? "peek-detail" : "no-peek-detail"}
                onClick={() => setDetail(job)}
              >
                {job}
              </span>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {tmps.map((tmp, index) => (
              <div key={`${tmp.name}-${index}`}>
                <ReviewItem info={tmp} />
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
          width: 1360px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 0px 0px 0px 20px;
        }
        .title {
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .job-box,
        .detail-box {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 5px;
        }
        .job-box span,
        .detail-box span {
          border-radius: 500px;
          height: 40px;
          padding: 0px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .no-peek,
        .no-peek-detail {
          border: 1.5px solid #bcbcbc;
          color: #bcbcbc;
          font-weight: 500;
        }
        .peek {
          border: 1.5px solid #30b5ff;
          color: #30b5ff;
          font-weight: 500;
        }
        .peek-detail {
          border: 1.5px solid #30b5ff;
          background-color: #30b5ff;
          color: white;
        }

        .embla {
          position: relative;
          width: 1360px;
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
