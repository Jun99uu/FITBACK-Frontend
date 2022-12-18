import { incumbentReview } from "../../../interfaces/ReviewInterface";
import moment from "moment";
import Image from "next/image";
import starFill from "../../../res/icons/star-fill.svg";
import starEmpty from "../../../res/icons/star-empty.svg";
import { useState, useEffect } from "react";

interface reviewProps {
  review: incumbentReview;
}

export default function Review(props: reviewProps) {
  const { review } = props;
  const [calRate, setCalRate] = useState("120px"); //별점 기본사이즈

  const calculateRateStar = () => {
    const width = 24 * review.score;
    setCalRate(`${width}px`);
  };

  useEffect(() => {
    calculateRateStar();
  }, []);

  return (
    <div className="container">
      <span className="title">{review.name}님의 후기</span>
      <div>
        <div className="info-box">
          <div className="stars">
            <Image src={starEmpty} alt="star" layout="fill" objectFit="cover" />
            <div className="stars-fill">
              <Image
                alt="star"
                src={starFill}
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>
          </div>
          <span className="date">
            {moment(review.createdAt).format("YYYY-MM-DD")}
          </span>
        </div>
      </div>
      <span className="content">{review.content}</span>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        .title {
          font-size: 18px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .info-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }
        .stars {
          position: relative;
          width: 120px;
          height: 24.8px;
        }
        .stars-fill {
          position: relative;
          width: ${calRate};
          height: 24.8px;
        }
        .date {
          font-size: 14px;
          color: #3b3b3b;
        }
        .content {
          font-size: 14px;
          font-weight: 400;
          color: #757575;
        }
      `}</style>
    </div>
  );
}
