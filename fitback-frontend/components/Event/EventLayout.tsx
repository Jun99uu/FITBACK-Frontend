import Image from "next/image";
import { useState } from "react";

enum Stage {
  Proceeding = "진행 중인 이벤트",
  Finish = "마감된 이벤트",
}

interface bannerProps {
  banners: Array<string>;
}

export default function EventLayout(props: bannerProps) {
  const { banners } = props;
  const [stage, setStage] = useState(Stage.Proceeding);

  return (
    <div className="container">
      <ul>
        <li
          className={stage === Stage.Proceeding ? "selected" : "non-selected"}
          onClick={() => setStage(Stage.Proceeding)}
        >
          {Stage.Proceeding}
        </li>
        <li
          className={stage === Stage.Finish ? "selected" : "non-selected"}
          onClick={() => setStage(Stage.Finish)}
        >
          {Stage.Finish}
        </li>
      </ul>
      {banners.map((banner, index) => (
        <div className="item-wrapper">
          <div className="item" key={index}>
            <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
          </div>
          <span className="date">2022-12-19</span>
        </div>
      ))}
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          padding: 50px 100px;
        }
        .item-wrapper {
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 5px;
        }
        .item {
          width: 100%;
          height: 150px;
          position: relative;
        }
        .date {
          font-size: 16px;
          color: #0a0a0a;
          font-weight: 400;
        }
        ul {
          align-self: center;
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
