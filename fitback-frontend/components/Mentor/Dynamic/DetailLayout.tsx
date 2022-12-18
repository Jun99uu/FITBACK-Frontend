import Card from "./Card";
import { Incumbent } from "../../../interfaces/IncumbentInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DetailContentBox from "./DetailContentBox";

interface detailProps {
  item: Incumbent;
  id: number;
}

export default function DetialLayout(props: detailProps) {
  const { item, id } = props;
  return (
    <div className="container">
      <div className="left-box">
        <span className="path">
          <FontAwesomeIcon icon={faHouse} />
          <span>멘토</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>멘토 상세페이지</span>
        </span>
        <div className="card">
          <Card info={item} />
        </div>
      </div>
      <div className="right-box">
        <DetailContentBox />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-evenly;
          padding: 40px 0px;
          position: relative;
        }
        .path {
          display: flex;
          flex-direction: row;
          gap: 10px;
          font-size: 13px;
          color: #3b3b3b;
        }
        .left-box {
          width: 380px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 40px;
        }
        .right-box {
          width: 63%;
          min-width: 600px;
          margin-top: 40px;
        }
        .card {
          position: fixed;
          top: 150px;
          left: 50px;
        }
      `}</style>
    </div>
  );
}
