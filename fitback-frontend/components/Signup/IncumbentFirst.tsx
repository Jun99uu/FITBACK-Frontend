import {
  SetStateAction,
  Dispatch,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  Stage,
  IncumbentInfo,
  IncumbentInfoState,
} from "../../states/recoilIncumbentSignupState";
import { useRecoilState } from "recoil";
import LogoFull from "../../res/logo-full.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Calendar } from "react-date-range";
import ko from "date-fns/locale/ko";
import moment from "moment";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface incumbentProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

interface FirstInfoInterface {
  email: string;
  pwd: string;
  pwdc: string;
  name: string;
  birth: string;
  job: string;
  company: string;
  career: string;
}

enum PwdState {
  Wait = "",
  Wrong = "올바르지 못한 비밀번호입니다.",
  Different = "비밀번호가 일치하지 않습니다.",
  Success = "올바른 비밀번호입니다.",
}

export default function IncumbentFirst(props: incumbentProps) {
  const { setStage } = props;
  const logoStyle = { width: "240px", height: "auto" };
  const [info, setInfo] = useRecoilState(IncumbentInfoState);
  const [firstInfo, setFirstInfo] = useState<FirstInfoInterface>({
    email: "",
    pwd: "",
    pwdc: "",
    name: "",
    birth: "",
    job: "",
    company: "",
    career: "",
  });
  const [emailErr, setEmailErr] = useState(true); //true가 에러, false가 에러아님
  const [err, setErr] = useState(PwdState.Wait);
  const [careerSelector, setCareerSelector] = useState(false);
  const careers = ["1년 이상", "2년 이상", "3년 이상", "4년 이상", "5년 이상"];
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const today = moment().toDate();
  const [date, setDate] = useState<Date>(today);
  const [ac, setAc] = useState(false); // 모두 작성했는가

  const onChangeHandler = (name: string, value: string) => {
    switch (name) {
      case "email":
        setFirstInfo((prev) => ({
          email: value,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: prev.birth,
          job: prev.job,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "pwd":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: value,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: prev.birth,
          job: prev.job,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "pwdc":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: value,
          name: prev.name,
          birth: prev.birth,
          job: prev.job,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "name":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: value,
          birth: prev.birth,
          job: prev.job,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "birth":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: value,
          job: prev.job,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "job":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: prev.birth,
          job: value,
          company: prev.company,
          career: prev.career,
        }));
        break;
      case "company":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: prev.birth,
          job: prev.job,
          company: value,
          career: prev.career,
        }));
        break;
      case "career":
        setFirstInfo((prev) => ({
          email: prev.email,
          pwd: prev.pwd,
          pwdc: prev.pwdc,
          name: prev.name,
          birth: prev.birth,
          job: prev.job,
          company: prev.company,
          career: value,
        }));
        break;
    }
  };

  const onChangeDate = useCallback(
    (date: Date): void | undefined => {
      // date 변경값을 받아오는 함수
      if (!date) {
        return;
      } // 날짜값이 없을 때 예외처리
      setDate(date); // 날짜값이 들어오면 date 를 set해준다
    },
    [date]
  );

  const goNextStage = () => {
    if (ac) {
      const newInfo: IncumbentInfo = {
        email: firstInfo.email,
        pwd: firstInfo.pwd,
        name: firstInfo.name,
        birth: firstInfo.birth,
        job: firstInfo.job,
        company: firstInfo.company,
        career: firstInfo.career,
        companyEmail: "",
        bCardImgFile: null,
        profileImgFile: null,
        nickname: "",
        comment: "",
        intro: "",
        types: [],
      };
      setInfo(newInfo);
      setStage(Stage.IncumbentSecond);
    }
  };

  const pwdReg = (data: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g.test(
      data
    );
  };

  const emailReg = (data: string) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      data
    );
  };

  useEffect(() => {
    if (emailReg(firstInfo.email)) setEmailErr(false);
    else setEmailErr(true);
  }, [firstInfo.email]);

  useEffect(() => {
    if (pwdReg(firstInfo.pwd)) {
      if (firstInfo.pwd === firstInfo.pwdc) {
        setErr(PwdState.Success);
      } else {
        setErr(PwdState.Different);
      }
    } else {
      setErr(PwdState.Wrong);
    }
  }, [firstInfo.pwdc, firstInfo.pwd]);

  useEffect(() => {
    setCareerSelector(false);
  }, [firstInfo.career]);

  useEffect(() => {
    if (
      !emailErr &&
      err === PwdState.Success &&
      firstInfo.name !== "" &&
      firstInfo.birth !== "" &&
      firstInfo.job !== "" &&
      firstInfo.company !== "" &&
      firstInfo.career !== ""
    )
      setAc(true);
    else setAc(false);
  }, [firstInfo]);

  useEffect(() => {
    setFirstInfo((prev) => ({
      email: prev.email,
      pwd: prev.pwd,
      pwdc: prev.pwdc,
      name: prev.name,
      birth: moment(date).format("YYYY-MM-DD"),
      job: prev.job,
      company: prev.company,
      career: prev.career,
    }));
    setShowCalendar(false);
  }, [date]);

  return (
    <div className="container">
      <div className="logo-box">
        <Image src={LogoFull} alt="Fitback" style={logoStyle} />
        <div className="subtitle-box">
          <span className="subtitle">환영합니다!</span>
          <span className="intro">우선, 기본 정보를 입력해주세요.</span>
        </div>
      </div>
      <ul>
        <li>
          <label htmlFor="email">아이디(이메일)</label>
          <input
            type="text"
            id="email"
            placeholder="@google.com"
            className={firstInfo.email !== "" ? "valued" : "non-valued"}
            value={firstInfo.email}
            onChange={(e) => onChangeHandler("email", e.target.value)}
          />
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
        <li>
          <label htmlFor="pwd">비밀번호</label>
          <input
            type="password"
            id="pwd"
            placeholder="영어, 숫자, 특수문자를 포함한 8자리 이상"
            className={firstInfo.pwd !== "" ? "valued" : "non-valued"}
            value={firstInfo.pwd}
            onChange={(e) => onChangeHandler("pwd", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="pwd-check">비밀번호 확인</label>
          <input
            type="password"
            id="pwd-check"
            placeholder="영어, 숫자, 특수문자를 포함한 8자리 이상"
            className={firstInfo.pwdc !== "" ? "valued" : "non-valued"}
            value={firstInfo.pwdc}
            onChange={(e) => onChangeHandler("pwdc", e.target.value)}
          />
          <span
            className={
              err === PwdState.Success
                ? "basic-err err-complete"
                : "basic-err err"
            }
          >
            <FontAwesomeIcon
              icon={err === PwdState.Success ? faCircleCheck : faCircleXmark}
            />
            <span>{err}</span>
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="홍길동"
            className={firstInfo.name !== "" ? "valued" : "non-valued"}
            value={firstInfo.name}
            onChange={(e) => onChangeHandler("name", e.target.value)}
          />
        </li>
        <li>
          <label>생년월일</label>
          <span
            className={
              firstInfo.birth !== ""
                ? "state-box valued"
                : "state-box non-valued"
            }
            onClick={() => setShowCalendar((prev) => !prev)}
          >
            {firstInfo.birth === "" ? "1990/01/01" : firstInfo.birth}
          </span>
          {showCalendar && ( // 클릭 등으로 토글상태 값이 true 이 되면 달력이 보여진다
            <span className="calendar">
              <Calendar
                locale={ko} // 한국어 달력
                months={1} // 1달치 달력만 디스플레이
                maxDate={today}
                date={date} // 날짜값
                onChange={onChangeDate} // onChange 함수
                dateDisplayFormat={"yyyy.mm.dd"} // 날짜 포맷값
              />
            </span>
          )}
        </li>
        <li>
          <label htmlFor="company">직장</label>
          <input
            type="text"
            id="company"
            placeholder="핏백페이먼츠 개발팀"
            className={firstInfo.company !== "" ? "valued" : "non-valued"}
            value={firstInfo.company}
            onChange={(e) => onChangeHandler("company", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="job">직무</label>
          <input
            type="text"
            id="job"
            placeholder="웹 프론트엔드 개발자"
            className={firstInfo.job !== "" ? "valued" : "non-valued"}
            value={firstInfo.job}
            onChange={(e) => onChangeHandler("job", e.target.value)}
          />
        </li>
        <li className="state-box-wrapper">
          <label>경력</label>
          <span
            className={
              firstInfo.career !== ""
                ? "state-box valued"
                : "state-box non-valued"
            }
            onClick={() => setCareerSelector((prev) => !prev)}
          >
            {firstInfo.career !== "" ? firstInfo.career : "3년 이상"}
          </span>
          {careerSelector ? (
            <ul className="state-selector">
              {careers.map((career) => (
                <li
                  key={career}
                  onClick={() =>
                    setFirstInfo((prev) => ({
                      email: prev.email,
                      pwd: prev.pwd,
                      pwdc: prev.pwdc,
                      name: prev.name,
                      birth: prev.birth,
                      job: prev.job,
                      company: prev.company,
                      career: career,
                    }))
                  }
                >
                  {career}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <button className="submit" onClick={() => goNextStage()}>
        다음 단계 (1/3)
      </button>
      {ac ? <></> : <span className="ac">모든 정보를 입력해주세요.</span>}
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
        }
        .logo-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .subtitle-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #0a0a0a;
        }
        .intro {
          font-size: 16px;
          font-weight: 400;
          color: #0a0a0a;
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
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
        }
        input,
        .state-box {
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
        .state-box-wrapper {
          position: relative;
        }
        .state-box {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .state-selector {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          padding: 15px;
          border-radius: 20px;
          transform: translate(-50%, -50%);
          background-color: #dedede;
          gap: 10px;
        }
        .state-selector li {
          width: 100%;
          cursor: pointer;
          padding: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .state-selector li:hover {
          background-color: #fafafa;
        }
        .calendar {
          align-self: center;
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
