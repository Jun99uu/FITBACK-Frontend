import { Review } from "../../interfaces/ReviewInterface";
import Image from "next/image";
import auth from "../../res/icons/auth-incum.svg";
import moment from "moment";

interface reviewProps {
  info: Review;
}

export default function ReviewItem(props: reviewProps) {
  const { info } = props;
  return (
    <div className="container">
      <div className="top-box">
        <span className="date">
          {moment(info.createdAt).format("YYYY년 M월 D일")}
        </span>
        <div className="img-box">
          <Image
            src={info.img}
            alt={info.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="info-box">
          <span className="name">{info.name}</span>
          <ul className="info-list">
            <li>
              <Image src={auth} width={16} height={16} alt="현직자 인증마크" />
            </li>
            <li className="company">{info.company}</li>
            <li>|</li>
            <li>{info.job}</li>
            <li>|</li>
            <li>{info.career}년차</li>
          </ul>
        </div>
      </div>
      <div className="bottom-box">
        <span className="reviewer">
          <span className="bold">{info.reviewer}</span>님의 후기
        </span>
        <span className="content">
          {info.content.length > 190 ? (
            <>
              {`${info.content.substring(0, 140)}...`}
              <span className="more">더보기</span>
            </>
          ) : (
            info.content
          )}
        </span>
      </div>
      <style jsx>{`
        .container {
          width: 420px;
          height: 220px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 20px;
        }
        .top-box {
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 15px;
          position: relative;
        }
        .date {
          position: absolute;
          top: 0px;
          right: 0px;
          font-size: 11px;
          color: #3b3b3b;
          font-weight: 400;
        }
        .img-box {
          width: 50px;
          height: 100%;
          border-radius: 100%;
          overflow: hidden;
          position: relative;
        }
        .info-box {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
        }
        .name {
          font-size: 18px;
          color: #0a0a0a;
          font-weight: 700;
        }
        ul {
          list-style-type: none;
          padding: 0px;
          margin: 0px;
          display: flex;
        }
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .info-list {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }
        .company {
          font-weight: 800;
          color: #30b5ff;
        }
        .bottom-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 5px;
          font-size: 14px;
        }
        .reviewer {
          color: black;
          font-weight: 500;
        }
        .bold {
          font-weight: 700;
        }
        .content {
          color: #757575;
          white-space: pre-line;
          line-height: 24px;
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
