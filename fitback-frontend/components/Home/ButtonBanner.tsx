import Image from "next/image";
import BE from "../../res/icons/BE.svg";
import FE from "../../res/icons/FE.svg";
import DS from "../../res/icons/DS.svg";
import PM from "../../res/icons/PM.svg";

export default function ButtonBanner() {
  return (
    <div className="container">
      <span className="title">인기 직무만 모아!</span>
      <div className="btn-box">
        <button className="be">
          <Image src={BE} width={80} height={80} alt="BE" className="img" />
          <span>개발 | 백엔드</span>
        </button>
        <button className="fe">
          <Image src={FE} width={80} height={80} alt="FE" className="img" />
          <span>개발 | 프론트엔드</span>
        </button>
        <button className="ds">
          <Image src={DS} width={80} height={80} alt="DS" className="img" />
          <span>UI/UX 디자인</span>
        </button>
        <button className="pm">
          <Image src={PM} width={80} height={80} alt="PM" className="img" />
          <span>서비스 기획</span>
        </button>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .title {
          width: 1300px;
          text-align: start;
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          padding: 0px 0px 0px 20px;
        }
        .btn-box {
          width: 1300px;
          height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        button {
          height: 100%;
          width: 300px;
          border-radius: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          font-family: "SUIT Variable", sans-serif;
          color: #1e1e1e;
          cursor: pointer;
          transition: all 0.25s;
        }
        .img {
          transition: all 0.25s;
        }
        button:hover button .img {
          width: 90px;
          height: 90px;
        }
        .be {
          background-color: #e9efb6;
        }
        .fe {
          background-color: #ffdfae;
        }
        .ds {
          background-color: #fff1ab;
        }
        .pm {
          background-color: #ffb8b6;
        }
      `}</style>
    </div>
  );
}
