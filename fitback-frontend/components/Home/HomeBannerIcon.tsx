import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface dotProps {
  selected: boolean;
  onClick: () => void;
}

interface btnProps {
  onClick: () => void;
}

export const DotButton = (props: dotProps) => {
  const { selected, onClick } = props;
  return (
    <button
      className={`${selected ? "is-selected" : "embla__dot "}`}
      type="button"
      onClick={onClick}
    >
      <style jsx>{`
        button {
          height: 5px;
          transition: all 0.25s;
          border: none;
          cursor: pointer;
        }
        .embla__dot {
          width: 15px;
          background-color: #dedede;
        }
        .is-selected {
          width: 30px;
          background-color: #30b5ff;
        }
      `}</style>
    </button>
  );
};

export const PrevButton = (props: btnProps) => {
  const { onClick } = props;
  return (
    <button className="embla__button embla__button--prev" onClick={onClick}>
      <FontAwesomeIcon icon={faCaretLeft} />
      <style jsx>{`
        button {
          color: white;
          background-color: transparent;
          touch-action: manipulation;
          border: 0;
          padding: 0;
          cursor: pointer;
          font-size: 36px;
          text-shadow: 1px 1px 1px #3b3b3b72;
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translate(0, -50%);
          transition: all 0.25s;
        }

        button:hover {
          font-size: 38px;
        }

        button:active {
          font-size: 34px;
        }
      `}</style>
    </button>
  );
};

export const NextButton = (props: btnProps) => {
  const { onClick } = props;
  return (
    <button className="embla__button embla__button--next" onClick={onClick}>
      <FontAwesomeIcon icon={faCaretRight} />
      <style jsx>{`
        button {
          color: white;
          background-color: transparent;
          touch-action: manipulation;
          border: 0;
          padding: 0;
          cursor: pointer;
          font-size: 36px;
          text-shadow: 1px 1px 1px #3b3b3b72;
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translate(0, -50%);
          transition: all 0.25s;
        }

        button:hover {
          font-size: 38px;
        }

        button:active {
          font-size: 34px;
        }
      `}</style>
    </button>
  );
};
