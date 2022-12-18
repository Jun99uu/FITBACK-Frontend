import { useState } from "react";
import Complete from "./Complete";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

enum Stage {
  One,
  Two,
  Complete,
}

interface feedbackProps {
  name: string;
}

export default function RegisterFeedBackLayout(props: feedbackProps) {
  const { name } = props;
  const [stage, setStage] = useState(Stage.One);
  return (
    <div className="container">
      {stage === Stage.Complete ? (
        <></>
      ) : (
        <div className="stage-deco">
          <span
            className={`circle ${
              stage === Stage.One ? "selected" : "non-selected"
            }`}
          >
            1
          </span>
          <span
            className={`circle ${
              stage === Stage.Two ? "selected" : "non-selected"
            }`}
          >
            2
          </span>
          <span className="title">STEP {stage + 1}</span>
          <span className="line" />
        </div>
      )}
      <div className="content-box">
        {stage === Stage.One ? (
          <StepOne name={name} setStage={setStage} />
        ) : stage === Stage.Two ? (
          <StepTwo setStage={setStage} />
        ) : stage === Stage.Complete ? (
          <Complete name={name} />
        ) : (
          <></>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
          padding: 60px 120px;
        }
        .stage-deco {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          align-items: center;
          position: relative;
        }
        .circle {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #bcbcbc;
          border-radius: 100%;
          background-color: white;
          font-size: 16px;
          font-weight: 700;
          color: #bcbcbc;
        }
        .selected {
          border: 2px solid #30b5ff;
          background-color: #30b5ff;
          color: white;
        }
        .non-selected {
          border: 2px solid #bcbcbc;
          background-color: white;
          color: #bcbcbc;
        }
        .title {
          font-size: 16px;
          font-weight: 700;
          color: #30b5ff;
        }
        .line {
          width: 10px;
          height: 2px;
          background-color: #bcbcbc;
          position: absolute;
          top: 19px;
          left: 38px;
        }
        .content-box {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
