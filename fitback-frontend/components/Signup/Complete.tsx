import {
  BeginnerInfoState,
  Stage,
} from "../../states/recoilBeginnerSignupState";
import { useResetRecoilState } from "recoil";
import LogoFull from "../../res/logo-full.svg";
import complete from "../../res/icons/complete.svg";
import Image from "next/image";
import { SetStateAction, Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

interface completeProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}
export default function Complete(props: completeProps) {
  const { setStage } = props;
  const resetBeginner = useResetRecoilState(BeginnerInfoState);
  resetBeginner;
  const logoStyle = { width: "240px", height: "auto" };
  const iconStyle = { width: "200px", height: "auto" };
  const router = Router;
  return (
    <div className="container">
      <div className="logo-box">
        <Image src={LogoFull} alt="Fitback" style={logoStyle} />
        <span className="subtitle">회원가입이 완료되었습니다!</span>
      </div>
      <div className="complete-box">
        <Image src={complete} alt="complete" style={iconStyle} />
        <button onClick={() => router.push("/login")}>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          Fitback 로그인하고, 내 작업물 퀄리티 높이기
        </button>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
        .subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .logo-box,
        .complete-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        button {
          border: none;
          background-color: #30b5ff;
          border-radius: 10px;
          color: white;
          font-family: "SUIT Variable", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: white;
          padding: 15px 20px;
          position: relative;
          cursor: pointer;
        }
        button span {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translate(-50%, 0) rotate(-90deg);
          font-size: 30px;
          color: #30b5ff;
        }
      `}</style>
    </div>
  );
}
