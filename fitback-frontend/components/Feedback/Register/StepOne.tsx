import { useState, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

enum Type {
  Portfolio = "40,000",
  Personal = "5,000",
  Team = "20,000",
  Code = "2,000",
}
enum Stage {
  One,
  Two,
  Complete,
}

interface oneProps {
  name: string;
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function StepOne(props: oneProps) {
  const { name, setStage } = props;
  const [type, setType] = useState<Type>();
  const [link, setLink] = useState("");
  const [question, setQuestion] = useState("");

  const goNextStage = () => {
    if (type && link !== "") setStage(Stage.Two);
  };

  return (
    <div className="container">
      <div className="title-box">
        <span className="title">{name} 멘토님께 작업물 피드백 신청하기</span>
        <span className="explain">
          기획/디자인 직군은 포트폴리오 피드백만 가능합니다.
        </span>
      </div>
      <div className="type-box">
        <span className="subtitle">피드백 유형을 선택해주세요.</span>
        <ul className="type-list">
          <li>
            <label
              htmlFor="portfolio"
              onClick={() => setType(Type.Portfolio)}
              className={type === Type.Portfolio ? "selected" : ""}
            >
              포트폴리오 피드백
            </label>
            <input
              type="radio"
              id="portfolio"
              checked={type === Type.Portfolio}
              onChange={(e) =>
                e.target.checked ? setType(Type.Portfolio) : null
              }
            />
            {type === Type.Portfolio ? (
              <div className="type-sub-box">{`포트폴리오 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
            ) : (
              <></>
            )}
          </li>
          <li>
            <label
              htmlFor="personal"
              onClick={() => setType(Type.Personal)}
              className={type === Type.Personal ? "selected" : ""}
            >
              개인 프로젝트 피드백
            </label>
            <input
              type="radio"
              id="personal"
              checked={type === Type.Personal}
              onChange={(e) =>
                e.target.checked ? setType(Type.Personal) : null
              }
            />
            {type === Type.Personal ? (
              <div className="type-sub-box">{`개인 프로젝트 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
            ) : (
              <></>
            )}
          </li>
          <li>
            <label
              htmlFor="team"
              onClick={() => setType(Type.Team)}
              className={type === Type.Team ? "selected" : ""}
            >
              협업 프로젝트 피드백
            </label>
            <input
              type="radio"
              id="team"
              checked={type === Type.Team}
              onChange={(e) => (e.target.checked ? setType(Type.Team) : null)}
            />
            {type === Type.Team ? (
              <div className="type-sub-box">{`협업 프로젝트 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
            ) : (
              <></>
            )}
          </li>
          <li>
            <label
              htmlFor="code"
              onClick={() => setType(Type.Code)}
              className={type === Type.Code ? "selected" : ""}
            >
              개인 코드 피드백
            </label>
            <input
              type="radio"
              id="code"
              checked={type === Type.Code}
              onChange={(e) => (e.target.checked ? setType(Type.Code) : null)}
            />
            {type === Type.Code ? (
              <div className="type-sub-box">{`개인 코드 피드백은 멘토님의 피드백이 담긴 동영상이 제공됩니다.\n포트폴리오 구성, 개선 방향, 강약점에 대해 디테일한 피드백을 받아보세요!`}</div>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="price-box">
        <span>결제 예정 금액 | {type}원</span>
        <span className="warning">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          결제는 다음 단계에서 진행됩니다.
        </span>
      </div>
      <div className="file-box">
        <span className="subtitle">작업물을 공유해주세요.</span>
        <span className="explain">
          본인의 작업물을 구글드라이브에 업로드한 후 링크를 공유해주세요.
          <span className="bold">(권한 허용 필수)</span>
        </span>
        <input
          type="text"
          placeholder="작업물이 담긴 링크를 공유해주세요."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={link !== "" ? "valued" : "non-valued"}
        />
      </div>
      <div className="q-box">
        <span className="subtitle">
          작업물과 관련하여 궁금한 점을 작성해주세요.
        </span>
        <span className="explain">
          멘토님께 중점적으로 피드백 받고 싶은 부분을 간결하게 작성해주세요.
        </span>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`ex) 각 프로젝트마다 고쳐야 할 부분을 알려주세요.\nex) 제 포트폴리오의 강점과 약점이 궁금합니다.`}
          className={question !== "" ? "valued" : "non-valued"}
        />
        <span className="warning">
          <FontAwesomeIcon icon={faTriangleExclamation} /> 작성하지 않을 경우,
          멘토님의 판단하에 작업물에 대한 피드백이 제공됩니다.
        </span>
      </div>
      <button className="next-btn" onClick={() => goNextStage()}>
        다음 단계로
      </button>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 70px;
        }
        .title-box,
        .type-box,
        .file-box,
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
        }
        ul {
          list-style-type: none;
          margin: 10px 0px 0px 0px;
          padding: 0px;
          width: 70%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 20px;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        input[type="radio"] {
          display: none;
        }
        label {
          width: 100%;
          min-width: 250px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          border: 2px solid #bcbcbc;
          font-size: 16px;
          font-weight: 700;
          color: #bcbcbc;
          cursor: pointer;
        }
        .selected {
          border: 2px solid #30b5ff;
          color: #30b5ff;
        }
        .type-sub-box {
          width: 100%;
          white-space: pre-line;
          background-color: #f6f9fb;
          padding: 20px;
          border-radius: 20px;
          font-size: 14px;
          color: #3b3b3b;
          line-height: 20px;
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
        .warning {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #bcbcbc;
          font-weight: 700;
        }
        .bold {
          font-weight: 700;
        }
        input[type="text"] {
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
        input[type="text"]::placeholder {
          text-align: start;
          font-weight: 700;
          color: #dedede;
        }
        textarea {
          resize: none;
          width: 100%;
          height: 300px;
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
        .next-btn {
          width: 300px;
          height: 50px;
          background-color: #30b5ff;
          color: white;
          font-size: 14px;
          font-weight: 700;
          border: none;
          border-radius: 500px;
          align-self: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
