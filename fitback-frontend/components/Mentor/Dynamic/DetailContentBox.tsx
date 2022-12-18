import { Detail } from "../../../interfaces/IncumbentInterface";
import { incumbentReview } from "../../../interfaces/ReviewInterface";
import Image from "next/image";
import people from "../../../res/icons/people.svg";
import talk from "../../../res/icons/talk.svg";
import bag from "../../../res/icons/bag.svg";
import award from "../../../res/icons/award.svg";
import grid from "../../../res/icons/grid.svg";
import Review from "./Review";

const icons = [people, talk, bag, award, grid];

export default function DetailContentBox() {
  const iconStyle = { width: "25px", height: "25px" };
  return (
    <div className="container">
      <div className="comment-box">
        <span className="title">멘토님의 한 마디</span>
        <div className="comment">{dummyData.comment}</div>
      </div>
      <div className="intro-box">
        <span className="title">멘토님의 소개</span>
        <div className="intro">{dummyData.intro}</div>
      </div>
      <div className="type-box">
        <span className="title">멘토님을 3가지로 표현하면</span>
        <ul className="type-list">
          {dummyData.type.map((t, index) => (
            <li className="type">
              <span className="icon">
                <Image src={icons[index]} alt="icon" style={iconStyle} />
              </span>
              <span className="type-content">{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="review-box">
        <span className="title">멘토님의 피드백 후기</span>
        <span className="subtitle">총 {dummyReview.length}건의 리뷰</span>
        <div className="percent-box">
          다른 분들은 멘토님의 피드백에 <span className="color">90%</span>{" "}
          만족했어요!
        </div>
        <div className="review-wrapper">
          {dummyReview.map((review, index) => (
            <Review review={review} key={`${review.name}-${index}`} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          gap: 80px;
        }
        .comment-box,
        .intro-box,
        .type-box,
        .review-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }
        .title {
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .subtitle {
          font-size: 18px;
          font-weight: 600;
          color: #0a0a0a;
        }
        .comment {
          background-color: #fffdf6;
          width: 100%;
          padding: 20px 0px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 700;
        }
        .intro {
          width: 100%;
          white-space: pre-line;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
        }
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
        }
        .type-list {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .type {
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
        }
        .icon {
          width: 55px;
          height: 55px;
          border-radius: 100%;
          background-color: #30b5ff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .type-content {
          color: #3b3b3b;
          font-weight: 600;
        }
        .percent-box {
          background-color: #f6f9fb;
          width: 100%;
          padding: 20px 0px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 700;
        }
        .review-box {
          gap: 10px;
        }
        .color {
          color: #30b5ff;
          font-weight: 800;
        }
        .review-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 30px 0px;
        }
      `}</style>
    </div>
  );
}

const dummyData: Detail = {
  comment: "짧지만, 인생에 도움이 되는 시간을 만들어드리고 싶습니다.",
  intro:
    "안녕하세요 현재 프론트엔드 개발 6년차 카리나입니다.\n경영학을 전공했고, 기획자로 3년간 업무한 경험이 있습니다.\n부트캠프를 통해 커리어 전환을 하였고, 현재 야놀자에서 근무하고 있습니다.\n약 2년간의 개발자 멘토링 경험이 있습니다.\n질문 답변, 코드 리뷰, 이력서 리뷰, 프로젝트 리뷰, 면접 준비 리뷰 등\n성과를 만들어내는 팀의 일하는 방식에 대해서도 깊은 관ㅅ미을 갖고\n현재 팀에서 다양한 실험을 하고 있습니다.",
  type: [
    "저는 야놀자에서 재직 중 입니다.",
    "저는 친절한 화법으로 피드백을 해줍니다.",
    "저는 10회 이상 멘토링 경험이 있습니다.",
  ],
};

const tmpReview: incumbentReview = {
  name: "이준규",
  score: 5,
  createdAt: "2022-12-18",
  content: "너무 고마워요~~ 정말 많은 도움이 됐습니다... 그만하고싶다.",
};

const dummyReview: Array<incumbentReview> = [
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
  tmpReview,
];
