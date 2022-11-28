import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import testPaper from "../../res/testpaper.svg";

export default function HomeIntroBox() {
  return (
    <div className="container">
      <div className="content-box">
        <div className="title-box">
          <span className="title">{`니즈에 FIT한 피드백,\n나만의 작업물을 현직자에게 리뷰 받아보세요.`}</span>
          <span className="subtitle">
            작업물 퀄리티 향상부터, 취업 및 이직 확률도 높아져요!
          </span>
        </div>
        <div className="btn-box">
          <button>
            <span>현직자 둘러보기</span>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
            </div>
          </button>
          <button>
            <span>포트폴리오 리뷰 받기</span>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
            </div>
          </button>
          <button>
            <span>코드 리뷰 받기</span>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
            </div>
          </button>
        </div>
      </div>

      <div className="img-container">
        <div className="img-box">
          <Image
            src={testPaper}
            layout="fill"
            objectFit="cover"
            alt="test-icon"
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 390px;
          background-color: #f6f9fb;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .content-box {
          width: 70%;
          height: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 40px;
          position: relative;
        }
        .title-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 5px;
          color: #0a0a0a;
        }
        .title {
          font-size: 28px;
          font-weight: 700;
          white-space: pre-line;
        }
        .subtitle {
          font-size: 18px;
          font-weight: 400;
        }
        .btn-box {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }
        .btn-box button {
          color: #707070;
          width: 240px;
          height: 60px;
          border: none;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          box-shadow: #c2c2c2 0px 2px 8px 0px;
          background-color: white;
          cursor: pointer;
        }
        .btn-box button span {
          font-family: "SUIT Variable", sans-serif;
          font-weight: 600;
          font-size: 18px;
        }
        .btn-box button div {
          width: 12px;
          height: 18px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .img-container {
          position: absolute;
          top: 0px;
          right: 10vw;
        }
        .img-box {
          width: 346.61px;
          height: 346.61px;
          position: relative;
        }
      `}</style>
    </div>
  );
}
