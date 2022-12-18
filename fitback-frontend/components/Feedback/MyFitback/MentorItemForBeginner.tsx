import { Incumbent } from "../../../interfaces/IncumbentInterface";
import auth from "../../../res/icons/auth-incum.svg";
import Image from "next/image";
import Router from "next/router";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

interface item {
  stage: Stage;
  mentor: Incumbent;
  createdAt: string;
  type: string; //ex)포트폴리오 피드백
  content: string;
  link: string;
  accepted: boolean;
}

interface itemProps {
  item: item;
}

export default function MentorItemForBeginner(props: itemProps) {
  //멘토 아이템임
  const { stage, mentor, createdAt, type, content, link, accepted } =
    props.item;
  const router = Router;

  return (
    <div className="container" onClick={() => router.push(`/myfeedback/0`)}>
      <div className="left-box">
        <ul className="upper-bar">
          <li>
            <div className="img-box">
              <Image
                src={mentor.img}
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </li>
          <li className="name">{mentor.name}</li>
          <li className="auth">
            <Image src={auth} width={16} height={16} alt="현직자 인증마크" />
            <span>{mentor.company}</span>
          </li>
          <li>|</li>
          <li>{mentor.job}</li>
          <li>|</li>
          <li>{mentor.career}년차</li>
        </ul>
        <span className="date">신청 날짜 : {createdAt}</span>
        <span className="type">{type}</span>
        <span className="content">
          {content.length > 250 ? (
            <>
              {`${content.substring(0, 250)}...`}
              <span className="more">더보기</span>
            </>
          ) : (
            content
          )}
        </span>
        <a href={link} target="_blank" className="link">
          {link}
        </a>
      </div>
      <span className="line" />
      <div className="right-box">
        {stage === Stage.New ? (
          <span className={accepted ? "accept" : "disabled"}>
            {accepted ? "피드백 요청 중" : "피드백 거절"}
          </span>
        ) : stage === Stage.Proceeding ? (
          <span className="accept">피드백 진행 중</span>
        ) : stage === Stage.Complete ? (
          <button className="complete-btn">만족도 평가</button>
        ) : (
          <></>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 200px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          box-shadow: #c2c2c2a2 0px 1px 4px 0px;
          cursor: pointer;
        }
        .left-box {
          width: 80%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
          padding: 40px;
        }
        .line {
          width: 1px;
          height: 90%;
          background-color: #dedede;
        }
        .right-box {
          width: 20%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
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
        .content {
          font-size: 15px;
          color: #757575;
          font-weight: 500;
          white-space: pre-line;
          word-break: keep-all;
          line-height: 22px;
        }
        .link {
          font-size: 15px;
          color: #232323;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
        }
        .date {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 14px;
          font-weight: 400;
          color: #757575;
        }
        .accept {
          color: #30b5ff;
          font-weight: 700;
        }
        .disabled {
          color: #ff4848;
          font-weight: 700;
        }
        .complete-btn {
          padding: 15px 20px;
          border-radius: 500;
          background-color: #30b5ff;
          color: white;
          font-weight: 800;
          border: none;
          border-radius: 20px;
          cursor: pointer;
        }
        .more {
          color: #bcbcbc;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
