import Image from "next/image";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

interface item {
  name: string;
  img: string;
  stage: Stage;
  createdAt: string;
  type: string; //ex)포트폴리오 피드백
  content: string;
  link: string;
}

interface itemProps {
  item: item;
}

export default function BeginnerItemForMentor(props: itemProps) {
  //초심자 아이템임
  const { name, img, stage, createdAt, type, content, link } = props.item;
  const profileStyle = { width: "100%", height: "100%" };
  return (
    <div className="container">
      <div className="left-box">
        <ul className="upper-bar">
          <li>
            <span className="profile-img">
              <Image src={img} alt="profile" fill style={profileStyle} />
            </span>
          </li>
          <li className="name">{name}님의 피드백 요청</li>
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
          <>
            <button className="complete-btn">요청 수락</button>
            <button className="cancel-btn">요청 거절</button>
          </>
        ) : stage === Stage.Proceeding ? (
          <button className="complete-btn">피드백 완료</button>
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
          flex-direction: column;
          gap: 15px;
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
        .profile-img {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          position: relative;
          overflow: hidden;
        }
        .name,
        .type {
          font-size: 16px;
          color: #0a0a0a;
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
        .cancel-btn {
          padding: 15px 20px;
          border-radius: 500;
          background-color: #bcbcbc;
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
