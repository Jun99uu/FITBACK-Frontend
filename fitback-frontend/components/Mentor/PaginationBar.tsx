import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface paginationProps {
  pages: number; //전체페이지수
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>; //현재 페이지 set
}

export default function PaginationBar(props: paginationProps) {
  const { pages, curPage, setCurPage } = props;
  const [allPages, setAllPages] = useState([...Array(pages)].map((v, i) => i));

  useEffect(() => {
    setAllPages([...Array(pages)].map((v, i) => i));
  }, [pages]);

  return (
    <ul>
      <li
        className="caret"
        onClick={() => (curPage > 0 ? setCurPage((prev) => prev - 1) : null)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </li>
      {allPages.map((page, index) => (
        <li
          key={page}
          onClick={() => setCurPage(page)}
          className={curPage === page ? "selected" : "non-selected"}
        >
          {page + 1}
        </li>
      ))}
      <li
        className="caret"
        onClick={() =>
          curPage < pages - 1 ? setCurPage((prev) => prev + 1) : null
        }
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </li>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 700;
        }
        li {
          cursor: pointer;
        }
        .selected {
          color: #3b3b3b;
        }
        .non-selected {
          color: #bcbcbc;
        }
        .caret {
          font-size: 18px;
          color: #3b3b3b;
          cursor: pointer;
          margin: 0px 10px;
        }
      `}</style>
    </ul>
  );
}
