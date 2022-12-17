import Image from "next/image";
import LogoFull from "../../res/logo-full.svg";
import { useState } from "react";
import Router from "next/router";

export default function LoginLayout() {
  const logoStyle = { width: "240px", height: "auto" };
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const router = Router;

  return (
    <div className="container">
      <div className="logo-box">
        <Image src={LogoFull} alt="Fitback" style={logoStyle} />
        <span className="subtitle">나에게 Fit한 Feedback을 원한다면?</span>
      </div>
      <div className="input-box">
        <input
          placeholder="이메일을 입력하세요."
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={email !== "" ? "valued" : "non-valued"}
        />
        <input
          placeholder="비밀번호를 입력하세요."
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className={pwd !== "" ? "valued" : "non-valued"}
        />
      </div>
      <div className="btn-box">
        <button className="submit-btn">로그인</button>
        <span className="register">
          <span>계정이 없으세요?</span>
          <span
            className="register-link"
            onClick={() => router.push("/signup")}
          >
            회원가입
          </span>
        </span>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .logo-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .input-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        input {
          width: 450px;
          height: 55px;
          color: #232323;
          border-radius: 15px;
          padding: 0px 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          text-align: center;
          transition: all 0.15s;
          outline: none;
        }
        .non-valued {
          border: 2px solid #dedede;
        }
        .non-valued:focus {
          border: 2px solid #232323;
        }
        .valued {
          border: 2px solid #232323;
        }
        input::placeholder {
          text-align: center;
          font-weight: 700;
          color: #dedede;
        }
        .btn-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .submit-btn {
          width: 450px;
          height: 55px;
          border-radius: 15px;
          border: none;
          background-color: ${email !== "" && pwd !== ""
            ? "#30b5ff"
            : "#dedede"};
          color: ${email !== "" && pwd !== "" ? "white" : "#3b3b3b"};
          font-size: 16px;
          font-weight: 700;
          transition: all 0.15s;
          cursor: pointer;
        }
        .register {
          display: flex;
          flex-direction: row;
          gap: 5px;
          font-size: 14px;
        }
        .register-link {
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
