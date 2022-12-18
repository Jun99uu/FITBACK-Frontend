import { Incumbent } from "../../../interfaces/IncumbentInterface";
import Image from "next/image";
import auth from "../../../res/icons/auth-incum.svg";
import Router from "next/router";

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

interface Feedback {
  mentor: Incumbent;
  answer: string;
  url: string;
}

export default function CompleteLayout(props: feedbackProps) {
  const { name, type, link, question, stage, accept } = props.item;
  const router = Router;

  return (
    <div className="container">
      <span className="date">2022-12-19</span>
      <div className="q-box">
        <span className="subtitle">나의 요청 사항</span>
        <span className="question">{question}</span>
        <div className="link-box">
          <span className="link-badge">URL 링크</span>
          <a href={link} target="_blank" className="link">
            {link}
          </a>
        </div>
      </div>
      <span className="line" />
      <div className="bottom-box">
        <ul className="upper-bar">
          <li>
            <div className="img-box">
              <Image
                src={tmpMentor.img}
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </li>
          <div className="right-profile-wrapper">
            <ul>
              <li className="name">{tmpMentor.name}</li>
              <li className="auth">
                <Image
                  src={auth}
                  width={16}
                  height={16}
                  alt="현직자 인증마크"
                />
                <span>{tmpMentor.company}</span>
              </li>
              <li>|</li>
              <li>{tmpMentor.job}</li>
              <li>|</li>
              <li>{tmpMentor.career}년차</li>
            </ul>
            <ul className="bottom-bar">
              <li>후기 {tmpMentor.reviews}건</li>
              <li>만족도 {tmpMentor.satisfaction}%</li>
            </ul>
          </div>
        </ul>
        <span className="answer">{`질문하신 내용을 기반으로 피드백 드렸습니다. 영상확인 부탁드립니다.\n추가적으로 궁금한 내용은 댓글을 통해 남겨주시면 답변해드리도록 하겠습니다.`}</span>
      </div>
      <div className="url-box">
        <span className="url-title">답변 영상 확인하기</span>
        <a
          href={`https://github.com/Jun99uu`}
          target="_blank"
          className="url"
        >{`https://github.com/Jun99uu`}</a>
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
        }
        .date {
          position: absolute;
          font-size: 14px;
          font-weight: 400;
          color: #3b3b3b;
          top: 120px;
          right: 80px;
        }
        .subtitle,
        .url-title {
          font-size: 20px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .question {
          white-space: pre-line;
          font-size: 16px;
          color: #232323;
        }
        .q-box,
        .url-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
        .link-box {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
          color: #bcbcbc;
          font-size: 14px;
          font-weight: 700;
        }
        .link-badge {
          padding: 10px 15px;
          border: 2px solid #bcbcbc;
          border-radius: 500px;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: #bcbcbc;
        }
        ul {
          list-style-type: none;
          margin: 0px 0px 0px -10px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
        }
        .img-box {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          overflow: hidden;
          position: relative;
        }
        li:not(.name, .auth) {
          font-size: 14px;
          color: #0a0a0a;
        }
        .name {
          font-size: 18px;
          color: #0a0a0a;
          font-weight: 700;
        }
        .type {
          font-size: 16px;
          color: #0a0a0a;
          font-weight: 700;
        }
        .auth {
          display: flex;
          align-items: center;
          gap: 3px;
          color: #30b5ff;
          font-size: 14px;
          font-weight: 700;
        }
        .upper-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
        }
        .right-profile-wrapper {
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3px;
          margin-left: 10px;
        }
        .answer {
          font-size: 16px;
          color: #232323;
          font-weight: 500;
          white-space: pre-line;
        }
        .bottom-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }
        .url {
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
      `}</style>
    </div>
  );
}

const tmpMentor: Incumbent = {
  id: 0,
  name: "중규리",
  img: "https://i.pinimg.com/736x/49/fd/16/49fd16c2857d9ce982f4839958b1808a.jpg",
  ment: "토스 가고 싶어?\n나도 가고 싶어...",
  company: "비바리퍼블리카",
  job: "프론트엔드 개발",
  career: 1,
  reviews: 10,
  satisfaction: 99,
};
