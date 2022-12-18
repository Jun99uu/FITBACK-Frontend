import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

enum Type {
  Portfolio = "40,000",
  Personal = "5,000",
  Team = "20,000",
  Code = "2,000",
}

interface item {
  name: string;
  type: Type;
  link: string;
  question: string;
  stage: Stage;
  accept: boolean;
}

interface feedbackProps {
  item: item;
}

export default function FeedBackContentLayout(props: feedbackProps) {
  const { name, type, link, question, stage, accept } = props.item;
  const router = Router;

  return (
    <div className="container">
      <span className="date">2022-12-19</span>
      <div className="title-box">
        <span className="title-wrapper">
          <span className="title">{name}님께 신청한 피드백</span>
          <span className={accept ? "accept" : "disabled"}>
            {accept ? stage : "답변 요청 취소"}
          </span>
        </span>
        <span className="explain">
          {accept
            ? stage === Stage.New
              ? "멘토님이 현재 요청 사항과 작업물을 확인 중 입니다. 요청이 수락되면 답변이 진행됩니다."
              : stage === Stage.Proceeding
              ? "현재 답변이 진행 중 입니다. 조금만 기다려주세요!"
              : stage === Stage.Complete
              ? "답변이 완료되었습니다."
              : ""
            : "멘토님이 현재 요청 사항과 작업물을 확인한 결과, 요청을 거절하였습니다.\n더 적합한 멘토를 소개해드릴게요!"}
          {!accept ? (
            <span
              className="cancel-link"
              onClick={() => router.push("/myfeedback")}
            >
              나에게 맞는 멘토 확인하기 <FontAwesomeIcon icon={faAngleRight} />
            </span>
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className="type-box">
        <span className="subtitle">피드백 유형을 확인해주세요.</span>
        <div className="type-wrapper">
          <div className="type">포트폴리오 피드백</div>
          <div className="type-explain">{`포트폴리오 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
        </div>
      </div>
      <div className="price-box">
        <span>결제 예정 금액 | {type}원</span>
      </div>
      <div className="q-box">
        <span className="subtitle">나의 작업물과 관련하여 궁금한 점</span>
        <span className="question">{question}</span>
      </div>
      <div className="link-box">
        <span className="subtitle">나의 작업물</span>
        <a href={link} target="_blank" className="link">
          {link}
        </a>
      </div>
      <button className="grid-btn" onClick={() => router.push("/myfeedback")}>
        목록
      </button>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 70px;
          padding: 60px 300px;
          position: relative;
        }
        .date {
          position: absolute;
          font-size: 14px;
          font-weight: 400;
          color: #3b3b3b;
          top: 120px;
          right: 80px;
        }

        .title-box,
        .type-box,
        .link-box,
        .q-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .title {
          font-size: 24px;
          color: #232323;
          font-weight: 700;
        }
        .subtitle {
          font-size: 20px;
          color: #232323;
          font-weight: 600;
        }
        .explain {
          font-size: 16px;
          color: #232323;
          font-size: 400;
          white-space: pre-line;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }

        .type-wrapper {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 4fr;
          gap: 20px;
        }
        .type {
          width: 100%;
          min-width: 250px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          font-size: 16px;
          font-weight: 700;
          border: 2px solid #30b5ff;
          color: #30b5ff;
        }
        .type-explain {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background-color: #f6f9fb;
          padding: 20px;
          border-radius: 20px;
          font-size: 14px;
          color: #3b3b3b;
          line-height: 20px;
          white-space: pre-line;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .price-box {
          background-color: #fffdf6;
          width: 100%;
          padding: 30px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 700;
        }

        .question {
          white-space: pre-line;
          line-height: 22px;
        }
        .link {
          border: 2px solid #b4e4ff;
          width: 100%;
          height: 55px;
          color: #232323;
          border-radius: 15px;
          padding: 0px 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          text-align: start;
          transition: all 0.15s;
          outline: none;
          white-space: pre-line;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
        }
        .grid-btn {
          padding: 15px 40px;
          border-radius: 500;
          background-color: #bcbcbc;
          color: white;
          font-weight: 800;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          align-self: center;
        }

        .title-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
        }
        .accept {
          color: #30b5ff;
          font-size: 15px;
          font-weight: 700;
        }
        .disabled {
          color: #ff4848;
          font-size: 15px;
          font-weight: 700;
        }
        .cancel-link {
          color: #30b5ff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
