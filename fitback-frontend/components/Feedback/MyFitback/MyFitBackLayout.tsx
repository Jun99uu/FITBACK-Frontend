import { useState } from "react";
import BeginnerLayout from "./BeginnerLayout";
import MentorLayout from "./MentorLayout";
import { UserType } from "../../../states/recoilAuthState";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

interface fitbackProps {
  userType: UserType;
}

export default function MyFitBackLayout(props: fitbackProps) {
  const { userType } = props;
  const [stage, setStage] = useState(Stage.New);
  return (
    <div className="container">
      <ul>
        <li
          className={stage === Stage.New ? "selected" : "non-selected"}
          onClick={() => setStage(Stage.New)}
        >
          {Stage.New}
        </li>
        <li
          className={stage === Stage.Proceeding ? "selected" : "non-selected"}
          onClick={() => setStage(Stage.Proceeding)}
        >
          {Stage.Proceeding}
        </li>
        <li
          className={stage === Stage.Complete ? "selected" : "non-selected"}
          onClick={() => setStage(Stage.Complete)}
        >
          {Stage.Complete}
        </li>
      </ul>
      {userType === UserType.Beginner ? (
        <BeginnerLayout stage={stage} />
      ) : (
        <MentorLayout stage={stage} />
      )}
      <style jsx>{`
        .container {
          width: 100%;
          padding: 80px 120px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 40px;
        }
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
        }
        li {
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
        }
        .selected {
          color: #0a0a0a;
        }
        .non-selected {
          color: #bcbcbc;
        }
      `}</style>
    </div>
  );
}
