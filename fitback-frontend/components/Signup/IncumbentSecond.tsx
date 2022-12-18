import {
  SetStateAction,
  Dispatch,
  useState,
  useEffect,
  ComponentProps,
  DOMAttributes,
} from "react";
import {
  Stage,
  IncumbentInfo,
  IncumbentInfoState,
} from "../../states/recoilIncumbentSignupState";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

type EventHandlers<T> = Omit<
  DOMAttributes<T>,
  "children" | "dangerouslySetInnerHTML"
>;

export type Event<
  TElement extends keyof JSX.IntrinsicElements,
  TEventHandler extends keyof EventHandlers<TElement>
> = ComponentProps<TElement>[TEventHandler];

interface incumbentProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function IncumbentSecond(props: incumbentProps) {
  const { setStage } = props;
  const [info, setInfo] = useRecoilState(IncumbentInfoState);
  const [companyEmail, setCompanyEmail] = useState("");
  const [auth, setAuth] = useState({ token: "", input: "" });
  const [authCheck, setAuthCheck] = useState(false);
  const [bCard, setBCard] = useState("");
  const [bCardAttachment, setBCardAttachment] = useState("");
  const [bCardFile, setBCardFile] = useState<File | null>(null);
  const [ocrCheck, setOcrCheck] = useState(false);
  const [bCardCheck, setBCardCheck] = useState(false);
  const [emailErr, setEmailErr] = useState(true); //true가 에러, false가 에러아님
  const [ac, setAc] = useState(false);

  const sendEmail = () => {
    //이메일 보내기 통신하고 정답토큰 받아오기
    if (!emailErr) {
      setAuth((prev) => ({ token: "1234", input: prev.input }));
    }
  };

  const testAuth = () => {
    //인증번호 맞는지 테스트
    if (auth.input === auth.token) setAuthCheck(true);
    else setAuthCheck(false);
  };

  const handleOnChange: Event<"input", "onChange"> = (e) => {
    if (window.FileReader) {
      const {
        currentTarget: { files, value },
      } = e;
      if (files !== null) {
        const theFile = files![0];
        const reader = new FileReader();
        setBCard(value);
        reader.onloadend = (finishedEvent: any) => {
          const {
            target: { result },
          } = finishedEvent;
          setBCardFile(theFile);
          setBCardAttachment(result);
          setOcrCheck(true);
        };
        reader.readAsDataURL(theFile);
      }
    }
  };

  const ocrTest = () => {
    //통신.. 명함사진
    setBCardCheck(true);
  };

  const goNextStage = () => {
    if (ac) {
      const newInfo: IncumbentInfo = {
        email: info.email,
        pwd: info.pwd,
        name: info.name,
        birth: info.birth,
        job: info.job,
        company: info.company,
        career: info.career,
        companyEmail: companyEmail,
        bCardImgFile: bCardFile !== null ? bCardFile : null,
        profileImgFile: null,
        nickname: "",
        comment: "",
        intro: "",
        types: [],
      };
      setInfo(newInfo);
      setStage(Stage.IncumbentThird);
    }
  };

  const emailReg = (data: string) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      data
    );
  };

  useEffect(() => {
    if (emailReg(companyEmail)) setEmailErr(false);
    else setEmailErr(true);
  }, [companyEmail]);

  useEffect(() => {
    if (authCheck && bCardCheck) setAc(true);
    else setAc(false);
  }, [authCheck, bCardCheck]);

  return (
    <div className="container">
      <div className="subtitle-box">
        <span className="subtitle">현직자 인증이 필요해요.</span>
        <span className="intro">
          {`회사 이메일과 명함으로 현직자 인증을 완료해주세요!\n인증 과정에서 수집한 정보는, 회원 탈퇴시 파기되니 걱정하지마세요.`}
        </span>
      </div>
      <ul>
        <li>
          <div className="deco-box">
            <span className="deco">회사 이메일 인증하기</span>
            <span className="sub-deco">
              회사 이메일로 발송되는 인증 번호를 확인해주세요.
            </span>
          </div>
          <div className="email-input-wrapper">
            <input
              type="text"
              id="email"
              placeholder="회사 이메일을 입력하세요."
              className={companyEmail !== "" ? "valued" : "non-valued"}
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
            <button className="auth-btn" onClick={() => sendEmail()}>
              인증
            </button>
          </div>
          <span
            className={emailErr ? "basic-err err" : "basic-err err-complete"}
          >
            {emailErr ? (
              <>
                <FontAwesomeIcon icon={faCircleXmark} />
                <span>올바르지 않은 이메일 형식입니다.</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>올바른 이메일 형식입니다.</span>
              </>
            )}
          </span>
        </li>
        {auth.token !== "" ? (
          <li>
            <div className="email-input-wrapper">
              <input
                type="text"
                id="email"
                placeholder="전송된 인증번호를 입력해주세요."
                value={auth.input}
                onChange={(e) =>
                  setAuth((prev) => ({
                    token: prev.token,
                    input: e.target.value,
                  }))
                }
                className={auth.input !== "" ? "valued" : "non-valued"}
              />
              <button className="check-btn" onClick={() => testAuth()}>
                확인
              </button>
            </div>
          </li>
        ) : (
          <></>
        )}
      </ul>
      <ul>
        <li>
          <div className="deco-box">
            <span className="deco">명함 1장 등록하기</span>
            <span className="sub-deco">
              회사, 직무, 이메일 등이 잘 나온 사진을 첨부해주세요.
            </span>
          </div>
          <div className="email-input-wrapper">
            <label
              htmlFor="file"
              className={`input-label ${
                bCard !== "" ? "valued" : "non-valued"
              }`}
            >
              {bCard !== "" ? bCard : "명함 사진 1장을 첨부해주세요."}
            </label>
            <input
              name="file"
              type="file"
              id="file"
              accept="image/*"
              onChange={handleOnChange}
              value={bCard}
            />
            <label htmlFor="file" className="vanilla-label">
              파일 첨부
            </label>
          </div>
        </li>
        {bCardAttachment !== "" ? (
          <li>
            <div className="email-input-wrapper">
              <Image
                src={bCardAttachment}
                alt="business-card"
                width={300}
                height={150}
              />
              <button className="bCard-btn" onClick={() => ocrTest()}>
                명함 인증
              </button>
            </div>
          </li>
        ) : (
          <></>
        )}
      </ul>
      <button className="submit" onClick={() => goNextStage()}>
        다음 단계 (2/3)
      </button>
      {ac ? <></> : <span className="ac">모든 정보를 입력해주세요.</span>}
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 70px;
        }
        .subtitle-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .subtitle {
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .intro {
          font-size: 16px;
          font-weight: 400;
          color: #0a0a0a;
          white-space: pre-line;
          text-align: center;
        }
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin: 0px;
          padding: 0px;
        }
        li {
          width: 450px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
        }
        .deco-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        .deco {
          font-size: 18px;
          font-weight: 700;
          color: #3b3b3b;
        }
        .sub-deco {
          font-size: 15px;
          color: #757575;
        }
        .email-input-wrapper {
          width: 100%;
          display: grid;
          grid-template-columns: 3.5fr 1fr;
          grid-gap: 10px;
          align-items: start;
          align-content: start;
        }
        .email-input-wrapper button,
        .vanilla-label {
          width: 100%;
          border-radius: 20px;
          font-size: 16px;
          color: #3b3b3b;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          font-weight: 700;
          font-family: "SUIT Variable", sans-serif;
          cursor: pointer;
        }
        .auth-btn {
          background-color: ${auth.token ? "#B4E4FF" : "#dedede"};
          height: 100%;
        }
        .check-btn {
          background-color: ${authCheck ? "#B4E4FF" : "#dedede"};
          height: 100%;
        }
        .vanilla-label {
          background-color: ${ocrCheck ? "#B4E4FF" : "#dedede"};
          height: 100%;
        }
        .bCard-btn {
          height: 55px;
          background-color: ${bCardCheck ? "#B4E4FF" : "#dedede"};
        }
        input,
        .input-label {
          width: 100%;
          height: 55px;
          color: #232323;
          border-radius: 15px;
          padding: 0px 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          text-align: center;
          transition: all 0.15s;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        input:focus ~ label {
          font-weight: 700;
        }
        .non-valued {
          color: #dedede;
          border: 2px solid #dedede;
        }
        .non-valued:focus {
          border: 2px solid #b4e4ff;
        }
        .valued {
          border: 2px solid #b4e4ff;
        }
        input::placeholder {
          text-align: center;
          font-weight: 700;
          color: #dedede;
        }
        input[type="file"] {
          /* 파일 필드 숨기기 */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .basic-err {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;
          align-self: flex-end;
          font-size: 15px;
        }
        .err {
          color: #ff4848;
        }
        .err-complete {
          color: #30b5ff;
        }
        .submit {
          width: 450px;
          height: 55px;
          color: ${ac ? "white" : "#3b3b3b"};
          background-color: ${ac ? "#30B5FF" : "#dedede"};
          cursor: pointer;
          border-radius: 15px;
          padding: 0px 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          font-weight: 700;
          text-align: center;
          transition: all 0.15s;
          border: none;
        }
        .ac {
          font-size: 14px;
          color: #3b3b3b;
          margin-top: -20px;
        }
      `}</style>
    </div>
  );
}
