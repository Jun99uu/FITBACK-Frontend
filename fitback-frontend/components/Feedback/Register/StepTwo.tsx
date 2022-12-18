import { useState, Dispatch, SetStateAction } from "react";

enum Stage {
  One,
  Two,
  Complete,
}

interface twoProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function StepTwo(props: twoProps) {
  const { setStage } = props;
  return (
    <div className="container">
      <button onClick={() => setStage(Stage.Complete)}>결제완료</button>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
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
