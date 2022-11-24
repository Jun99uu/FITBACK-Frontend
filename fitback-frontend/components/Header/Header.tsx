import Image from "next/image";
import logo from "../../res/logo-full.svg";
import sign from "../../res/icons/sign.svg";
import { useRecoilState } from "recoil";
import { CurrentMenu, MenuState } from "../../states/recoilMenuState";

export default function Header() {
  const [menuState, setMenuState] = useRecoilState(MenuState);

  const changePage = (menu: CurrentMenu) => {
    //페이지 이동
    setMenuState(menu);
  };

  return (
    <div className="container">
      <div className="header-content">
        <ul className="left-box">
          <li onClick={() => changePage(CurrentMenu.Home)}>
            <Image src={logo} alt="logo" width={122.55} height={20.78} />
          </li>
          <li
            className={menuState === CurrentMenu.Feedback ? "selected" : ""}
            onClick={() => changePage(CurrentMenu.Feedback)}
          >
            피드백
          </li>
          <li
            className={menuState === CurrentMenu.Event ? "selected" : ""}
            onClick={() => changePage(CurrentMenu.Event)}
          >
            이벤트
          </li>
        </ul>
        <ul className="right-box">
          <li className="icon-li">
            <div className="icon-box">
              <Image
                src={sign}
                alt="sign-icon"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </li>
          <li onClick={() => changePage(CurrentMenu.Register)}>회원가입</li>
          <li className="divide-line">|</li>
          <li onClick={() => changePage(CurrentMenu.Login)}>로그인</li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 70px;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #dedede;
          color: #3b3b3b;
        }
        .header-content {
          width: calc(100vw - 400px);
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        ul {
          height: 100%;
          display: flex;
          flex-direction: row;
          list-style-type: none;
          padding: 0px;
          margin: 0px;
          align-items: center;
        }
        .logo-box {
          width: 112px;
          height: 20px;
          position: relative;
        }
        .icon-li {
          margin-right: 5px;
        }
        .icon-box {
          width: 20px;
          height: 20px;
          position: relative;
        }
        .left-box {
          gap: 40px;
          font-size: 16px;
        }
        .right-box {
          gap: 12px;
          font-size: 14px;
        }
        li:not(.divide-line, .icon-li) {
          display: flex;
          align-items: center;
          text-align: center;
          height: 100%;
          cursor: pointer;
          transition: 0.25s all;
        }
        .divide-line,
        .icon-li {
          cursor: default;
        }
        .selected {
          border-bottom: 4px solid #30b5ff;
        }
      `}</style>
    </div>
  );
}
