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
          border-radius: 100px;
        }
        .embla__dot {
          width: 15px;
          background-color: #fafafa;
          opacity: 0.6;
        }
        .is-selected {
          width: 30px;
          background-color: #fafafa;
          opacity: 0.9;
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
          width: 15px;
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
          width: 16px;
        }

        button:active {
          width: 14px;
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
          width: 15px;
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
          width: 16px;
        }

        button:active {
          width: 14px;
        }
      `}</style>
    </button>
  );
};
