import LogoFull from "../../res/logo-full.svg";
import Image from "next/image";
import baby from "../../res/icons/baby-icon.svg";
import adult from "../../res/icons/adult-icon.svg";
import Router from "next/router";
import { SetStateAction, Dispatch } from "react";
import { Stage } from "../../states/recoilBeginnerSignupState";

interface typeProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function ChoiceType(props: typeProps) {
  const { setStage } = props;
  const router = Router;
  const logoStyle = { width: "240px", height: "auto" };
  return (
    <>
      <div className="logo-box">
        <Image src={LogoFull} alt="Fitback" style={logoStyle} />
        <span className="subtitle">나에게 Fit한 Feedback을 원한다면?</span>
      </div>
      <div className="btn-box">
        <button className="baby" onClick={() => setStage(Stage.BeginnerFirst)}>
          <Image src={baby} alt={"baby"} />
          초심자로 시작하기
        </button>
        <button
          className="adult"
          onClick={() => setStage(Stage.IncumbentFirst)}
        >
          <Image src={adult} alt={"adult"} />
          현직자로 시작하기
        </button>
        <span className="register">
          <span>이미 계정이 있으세요?</span>
          <span className="register-link" onClick={() => router.push("/login")}>
            로그인
          </span>
        </span>
      </div>{" "}
      <style jsx>{`
        .logo-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .btn-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
        .register {
          display: flex;
          flex-direction: row;
          gap: 5px;
          font-size: 14px;
        }
        .register-link {
          font-weight: 700;
          cursor: pointer;
        }
        button {
          width: 450px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #3b3b3b;
          border-radius: 15px;
          font-size: 18px;
          font-weight: 700;
          font-family: "SUIT Variable", sans-serif;
          transition: all 0.15s;
          cursor: pointer;
        }
        .baby {
          border: 2px solid #ffe071;
          background-color: #fffdf6;
        }
        .adult {
          border: 2px solid #30b5ff;
          background-color: #f6f9fb;
        }
      `}</style>
    </>
  );
}
