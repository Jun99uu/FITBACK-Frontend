import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import {
  SearchState,
  Category,
  CategoryState,
} from "../../states/recoilSearchState";
import { useState } from "react";
import Image from "next/image";

export default function SearchBox() {
  const categories = Object.values(Category);
  const [keywordState, setKeywordState] = useRecoilState(SearchState);
  const [categoryState, setCategoryState] = useRecoilState(CategoryState);
  const [collapse, setCollapse] = useState(false);
  const [category, setCategory] = useState(Category.Job);
  const [keyword, setKeyword] = useState("");

  const setCategoryHandler = (c: Category) => {
    setCategory(c);
    setCollapse(false);
  };

  return (
    <div className="container">
      <div className="select-box">
        <span>{category}</span>
        <div
          className="angle-down"
          onClick={() => setCollapse((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      {collapse ? (
        <ul>
          {categories.map((c) => (
            <li key={c} onClick={() => setCategoryHandler(c)} className="opt">
              {c}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <input
        type="text"
        placeholder="나에게 맞는 현직자를 찾아보세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search-btn">
        <div className="mag-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </button>
      <style jsx>{`
        .container {
          width: 60%;
          height: 60px;
          border-radius: 500px;
          background-color: #fafafa;
          position: relative;
          border: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: relative;
        }
        .select-box {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 15%;
          height: 100%;
          border-radius: 500px;
          border: 3px solid #30b5ff;
          background-color: #ffffff;
          color: #30b5ff;
          font-size: 20px;
          font-weight: 700;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          z-index: 1000;
        }
        ul {
          position: absolute;
          top: 0px;
          left: 0px;
          list-style-type: none;
          margin: 0;
          padding: 55px 0px 5px 0px;
          width: 15%;
          border-radius: 40px;
          border: 3px solid #30b5ff;
          color: white;
          background-color: #30b5ff;
          font-size: 20px;
          font-weight: 700;
          transition: all 0.25s;
        }
        .angle-down {
          font-size: 20px;
          width: 18px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transform: ${collapse ? "rotate(180deg)" : ""};
          transition: all 0.25s;
        }
        .opt {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 40px;
          justify-content: center;
          cursor: pointer;
        }
        input {
          width: 60%;
          text-align: center;
          border: none;
          background: none;
          color: #3b3b3b;
          font-family: "SUIT Variable", sans-serif;
          font-size: 16px;
          outline: none;
        }
        input::placeholder {
          color: #bcbcbc;
          font-family: "SUIT Variable", sans-serif;
        }
        .search-btn {
          height: 100%;
          aspect-ratio: 1/1;
          border-radius: 100%;
          background-color: #30b5ff;
          border: none;
          cursor: pointer;
          color: white;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mag-icon {
          width: 30px;
          height: 30px;
        }
      `}</style>
    </div>
  );
}
