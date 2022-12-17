import Image from "next/image";
import logo from "../../res/logo-full.svg";
import sign from "../../res/icons/sign.svg";
import { useRecoilState } from "recoil";
import { CurrentMenu, MenuState } from "../../states/recoilMenuState";
import Link from "next/link";
import router from "next/router";

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
            <Link href="/">
              <Image src={logo} alt="logo" width={122.55} height={20.78} />
            </Link>
          </li>
          <li className={menuState === CurrentMenu.Mentor ? "selected" : ""}>
            <Link href="/mentor" onClick={() => changePage(CurrentMenu.Mentor)}>
              멘토
            </Link>
          </li>
          <li className={menuState === CurrentMenu.Feedback ? "selected" : ""}>
            <Link
              href="/myfeedback"
              onClick={() => changePage(CurrentMenu.Feedback)}
            >
              마이 핏백
            </Link>
          </li>
          <li className={menuState === CurrentMenu.Event ? "selected" : ""}>
            <Link href="/event" onClick={() => changePage(CurrentMenu.Event)}>
              이벤트
            </Link>
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
          <li className={menuState === CurrentMenu.Register ? "selected" : ""}>
            <Link
              href="/signup"
              onClick={() => changePage(CurrentMenu.Register)}
            >
              회원가입
            </Link>
          </li>
          <li className="divide-line">|</li>
          <li className={menuState === CurrentMenu.Login ? "selected" : ""}>
            <Link href="/login" onClick={() => changePage(CurrentMenu.Login)}>
              로그인
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #dedede;
          color: #3b3b3b;
          font-weight: 600;
        }
        .header-content {
          width: 80%;
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
          height: 105%;
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
