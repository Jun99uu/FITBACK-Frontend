import ChoiceType from "./ChoiceType";
import BeginnerFirst from "./BeginnerFirst";
import { useState } from "react";
import { Stage } from "../../states/recoilBeginnerSignupState";
import BeginnerSecond from "./BeginnerSecond";
import Complete from "./Complete";

export default function SignupLayout() {
  const [stage, setStage] = useState(Stage.ChoiceType);
  return (
    <div className="container">
      {stage === Stage.ChoiceType ? (
        <ChoiceType setStage={setStage} />
      ) : stage === Stage.BeginnerFirst ? (
        <BeginnerFirst setStage={setStage} />
      ) : stage === Stage.BeginnerSecond ? (
        <BeginnerSecond setStage={setStage} />
      ) : stage === Stage.IncumbentFirst ? (
        <></>
      ) : stage === Stage.IncumbentSecond ? (
        <></>
      ) : stage === Stage.IncumbentThird ? (
        <></>
      ) : stage === Stage.Complete ? (
        <Complete setStage={setStage} />
      ) : (
        <></>
      )}
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
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
    </div>
  );
}
