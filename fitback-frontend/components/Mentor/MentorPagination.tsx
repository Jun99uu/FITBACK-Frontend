import { Incumbent } from "../../interfaces/IncumbentInterface";
import { useState, useEffect } from "react";
import PaginationBar from "./PaginationBar";
import IncumbentItem from "../Incumbent/IncumbentItem";
import { useRecoilState } from "recoil";
import { SearchState } from "../../states/recoilSearchState";

interface paginationProps {
  items: Array<Array<Incumbent>>;
}

export default function MentorPagination(props: paginationProps) {
  const { items } = props;
  const [curPage, setCurPage] = useState(0);
  const [keywordState, setKeywordState] = useRecoilState(SearchState);

  return (
    <div className="container">
      {keywordState.length > 0 ? (
        <span className="searched">조건에 맞는 검색 결과입니다.</span>
      ) : (
        <></>
      )}
      <div className="page-items-box">
        {items[curPage].map((item, index) => (
          <IncumbentItem info={item} key={`${item.name}-${index}`} />
        ))}
      </div>
      <PaginationBar
        pages={items.length}
        curPage={curPage}
        setCurPage={setCurPage}
      />
      <style jsx>{`
        .container {
          width: 1400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .page-items-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 50px;
          position: relative;
        }
        .searched {
          color: #757575;
          font-size: 20px;
          font-weight: 700;
          align-self: flex-start;
          margin-left: 70px;
        }
      `}</style>
    </div>
  );
}
