import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

export default function FeedBackAcceptLayout(props: feedbackProps) {
  const { name, type, link, question, stage, accept } = props.item;
  const router = Router;
  const [url, setUrl] = useState("");
  const [answer, setAnswer] = useState("");

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
              ? "요청 사항과 작업물을 확인하고, 피드백 요청 수락 여부를 확정지어주세요."
              : stage === Stage.Proceeding
              ? "답변을 수락한 요청입니다."
              : stage === Stage.Complete
              ? "답변이 완료된 요청입니다."
              : ""
            : "답변을 거절한 요청입니다."}
        </span>
      </div>
      <div className="price-box">
        <span>결제 예정 금액 | {type}원</span>
        <span>
          (수수료{" "}
          {type === Type.Portfolio
            ? "8,000"
            : type === Type.Team
            ? "4,000"
            : type === Type.Personal
            ? "2,000"
            : type === Type.Code
            ? "1,000"
            : ""}
          원)
        </span>
        <span className="warning">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          정산은 요청자의 만족도 평가 이후 진행됩니다.
        </span>
      </div>
      <div className="q-box">
        <span className="subtitle">작업물과 관련하여 궁금한 점</span>
        <span className="question">{question}</span>
      </div>
      <div className="link-box">
        <span className="subtitle">작업물</span>
        <a href={link} target="_blank" className="link">
          {link}
        </a>
      </div>
      <span className="line" />
      <div className="type-box">
        <span className="subtitle">피드백 가이드</span>
        <div className="type-wrapper">
          <div className="type">포트폴리오 피드백</div>
          <div className="type-explain">{`포트폴리오 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
        </div>
      </div>
      <div className="record-box">
        <span className="subtitle">피드백 업로드</span>
        <span className="explain">
          화면 녹화가 완료되었다면, 아래 URL에 답변을 업로드 해주세요.
        </span>
        <input
          type="text"
          className={url !== "" ? "valued" : "non-valued"}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="url 입력"
        />
      </div>
      <div className="record-box">
        <span className="subtitle">피드백 업로드</span>
        <span className="explain">
          화면 녹화가 완료되었다면, 아래 URL에 답변을 업로드 해주세요.
        </span>
        <textarea
          placeholder={
            "ex. 요청하신 질문은 모두 영상에 담겨있습니다.\nex. 추가적으로 궁금하신 내용은 댓글을 통해 남겨주세요."
          }
          className={answer !== "" ? "valued" : "non-valued"}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <div className="btn-box">
        <span>{`URL에 답변 영상이 잘 올라갔는지 다시 한 번 확인해주세요!\n잘 올라갔다면, 아래 버튼을 눌러 피드백을 완료해주세요.`}</span>
        <button
          className="evaluate-btn"
          onClick={() => router.push("/myfeedback")}
        >
          피드백 완료
        </button>
      </div>
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
          top: 100px;
          right: 80px;
        }

        .title-box,
        .type-box,
        .link-box,
        .q-box,
        .record-box {
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
          justify-content: flex-start;
          gap: 10px;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 700;
        }
        .warning {
          justify-self: flex-end;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #bcbcbc;
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
        .btn-box {
          display: flex;
          flex-direction: column;
          align-self: center;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .btn-box span {
          font-size: 16px;
          color: #232323;
          font-weight: 400;
          white-space: pre-line;
          text-align: center;
          line-height: 22px;
        }
        .evaluate-btn {
          padding: 15px 40px;
          border-radius: 500;
          background-color: #30b5ff;
          color: white;
          font-weight: 800;
          border: none;
          border-radius: 20px;
          cursor: pointer;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: #dedede;
        }
        input[type="text"] {
          width: 100%;
          min-height: 55px;
          color: #232323;
          border-radius: 15px;
          padding: 0px 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          text-align: start;
          transition: all 0.15s;
          outline: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
        }
        .non-valued {
          color: #dedede;
          border: 2px solid #dedede;
        }
        .non-valued:focus {
          border: 2px solid #b4e4ff;
        }
        .valued {
          border: 2px solid #b4e4ff;
        }
        .link::placeholder {
          text-align: center;
          font-weight: 700;
          color: #dedede;
        }

        textarea {
          resize: none;
          width: 100%;
          height: 280px;
          color: #232323;
          border-radius: 15px;
          padding: 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          transition: all 0.15s;
          outline: none;
          text-align: start;
          overflow: hidden;
        }
        textarea::placeholder {
          text-align: start;
          font-weight: 700;
          color: #dedede;
        }
      `}</style>
    </div>
  );
}
