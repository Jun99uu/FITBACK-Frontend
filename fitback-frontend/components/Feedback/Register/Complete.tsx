import Image from "next/image";
import testpaper from "../../../res/testpaper.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

interface completeProps {
  name: string;
}

export default function Complete(props: completeProps) {
  const { name } = props;
  const logoStyle = { width: "240px", height: "auto" };
  const router = Router;

  return (
    <div className="container">
      <Image src={testpaper} alt="Test" style={logoStyle} />
      <span className="title">
        {name} 멘토님께 작업물 피드백 신청이 완료되었습니다!
      </span>
      <span className="warning">
        <FontAwesomeIcon icon={faTriangleExclamation} /> 3일 이내에 멘토님의
        피드백 확정이 없으면 신청이 취소되며 비용이 환불됩니다.
      </span>
      <button onClick={() => router.push(`/myfeedback`)}>
        신청 현황 보러가기
      </button>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .title {
          font-size: 18px;
          font-weight: 900;
          color: #232323;
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
        button {
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
