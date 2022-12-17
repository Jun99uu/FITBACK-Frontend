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
  BeginnerInfo,
  BeginnerInfoState,
} from "../../states/recoilBeginnerSignupState";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

type EventHandlers<T> = Omit<
  DOMAttributes<T>,
  "children" | "dangerouslySetInnerHTML"
>;

export type Event<
  TElement extends keyof JSX.IntrinsicElements,
  TEventHandler extends keyof EventHandlers<TElement>
> = ComponentProps<TElement>[TEventHandler];

interface beginnerProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

interface secondInfoInterface {
  nickname: string;
  profile: string;
  attachment: string;
  imgFile: File | null;
  interestedCompany: Array<string>;
  interestedJob: Array<string>;
}

export default function BeginnerSecond(props: beginnerProps) {
  const { setStage } = props;
  const [info, setInfo] = useRecoilState(BeginnerInfoState);
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [secondInfo, setSecondInfo] = useState<secondInfoInterface>({
    nickname: "",
    profile: "",
    attachment: "",
    imgFile: null,
    interestedCompany: [],
    interestedJob: [],
  });
  const [jobErr, setJobErr] = useState(false);
  const [comErr, setComErr] = useState(false);
  const [ac, setAc] = useState(false); // 모두 작성했는가

  const handleOnChange: Event<"input", "onChange"> = (e) => {
    if (window.FileReader) {
      const {
        currentTarget: { files, value },
      } = e;
      if (files !== null) {
        const theFile = files![0];
        const reader = new FileReader();
        setSecondInfo((prev) => ({
          nickname: prev.nickname,
          profile: value,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          interestedCompany: prev.interestedCompany,
          interestedJob: prev.interestedJob,
        }));
        reader.onloadend = (finishedEvent: any) => {
          const {
            target: { result },
          } = finishedEvent;
          setSecondInfo((prev) => ({
            nickname: prev.nickname,
            profile: prev.profile,
            attachment: result,
            imgFile: theFile,
            interestedCompany: prev.interestedCompany,
            interestedJob: prev.interestedJob,
          }));
        };
        reader.readAsDataURL(theFile);
      }
    }
  };

  const onSubmitHandler = (type: string) => {
    if (type === "job") {
      if (secondInfo.interestedJob.length < 3) {
        const newJob = secondInfo.interestedJob;
        newJob.push(job);
        setJob("");
        setSecondInfo((prev) => ({
          nickname: prev.nickname,
          profile: prev.profile,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          interestedCompany: prev.interestedCompany,
          interestedJob: newJob,
        }));
        setJobErr(false);
      } else {
        setJobErr(true);
      }
    } else if (type === "company") {
      if (secondInfo.interestedCompany.length < 5) {
        const newCompany = secondInfo.interestedCompany;
        newCompany.push(company);
        setCompany("");
        setSecondInfo((prev) => ({
          nickname: prev.nickname,
          profile: prev.profile,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          interestedCompany: newCompany,
          interestedJob: prev.interestedJob,
        }));
        setComErr(false);
      } else {
        setComErr(true);
      }
    }
  };

  const removeItem = (type: string, index: number) => {
    if (type === "job") {
      const newJob = secondInfo.interestedJob.filter(
        (item, ind) => ind !== index
      );
      setSecondInfo((prev) => ({
        nickname: prev.nickname,
        profile: prev.profile,
        attachment: prev.attachment,
        imgFile: prev.imgFile,
        interestedCompany: prev.interestedCompany,
        interestedJob: newJob,
      }));
      setJobErr(false);
    } else if (type === "company") {
      const newCompany = secondInfo.interestedCompany.filter(
        (item, ind) => ind !== index
      );
      setSecondInfo((prev) => ({
        nickname: prev.nickname,
        profile: prev.profile,
        attachment: prev.attachment,
        imgFile: prev.imgFile,
        interestedCompany: newCompany,
        interestedJob: prev.interestedJob,
      }));
      setComErr(false);
    }
  };

  const goNextStage = () => {
    if (ac) {
      const newInfo: BeginnerInfo = {
        email: info.email,
        pwd: info.pwd,
        name: info.name,
        birth: info.birth,
        state: info.state,
        profile: secondInfo.profile,
        attachment: secondInfo.attachment,
        imgFile: secondInfo.imgFile,
        nickname: secondInfo.nickname,
        InterestedCompany: secondInfo.interestedCompany,
        InterestedJob: secondInfo.interestedJob,
      };
      setInfo(newInfo);
      //통신구문 전달
      //성공시 아래 문장
      setStage(Stage.Complete);
    }
  };

  useEffect(() => {
    if (
      secondInfo.imgFile !== null &&
      secondInfo.nickname !== "" &&
      secondInfo.interestedCompany.length > 0 &&
      secondInfo.interestedJob.length > 0
    )
      setAc(true);
    else setAc(false);
  }, [secondInfo]);

  return (
    <div className="container">
      <div className="subtitle-box">
        <span className="subtitle">추가정보를 입력해주세요.</span>
        <span className="intro">
          정보를 정확하게 입력할수록, 멘토와의 매칭률이 높아져요!
        </span>
      </div>
      <div className="img-box">
        {secondInfo.attachment !== "" ? (
          <Image
            src={secondInfo.attachment}
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="no-img" />
        )}
        <div className="hover-box">
          <label htmlFor="file" className="vanilla-label">
            업로드
          </label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*"
            onChange={handleOnChange}
            value={secondInfo.profile}
          />
        </div>
      </div>
      <ul>
        <li>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요."
            className={secondInfo.nickname !== "" ? "valued" : "non-valued"}
            value={secondInfo.nickname}
            onChange={(e) =>
              setSecondInfo((prev) => ({
                nickname: e.target.value,
                profile: prev.profile,
                attachment: prev.attachment,
                imgFile: prev.imgFile,
                interestedCompany: prev.interestedCompany,
                interestedJob: prev.interestedJob,
              }))
            }
          />
        </li>
        <li>
          <label htmlFor="company">관심 직장</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler("company");
            }}
          >
            <input
              type="text"
              id="company"
              placeholder={
                secondInfo.interestedCompany.length > 0
                  ? `${secondInfo.interestedCompany.length}곳 입력하였습니다.`
                  : "기업명을 입력해주세요."
              }
              className={
                secondInfo.interestedCompany.length > 0
                  ? "valued"
                  : "non-valued"
              }
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </form>
          {comErr ? (
            <span className="err">최대 5곳 입력가능합니다.</span>
          ) : (
            <></>
          )}
          <span className="glass" onClick={() => onSubmitHandler("company")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <ul className="item-list">
            {secondInfo.interestedCompany.map((company, index) => (
              <li key={company} className="item">
                <span>{company}</span>
                <span
                  className="x-mark"
                  onClick={() => removeItem("company", index)}
                >
                  <FontAwesomeIcon icon={faX} />
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <label htmlFor="job">관심 직무</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler("job");
            }}
          >
            <input
              type="text"
              id="job"
              placeholder={
                secondInfo.interestedJob.length > 0
                  ? `${secondInfo.interestedJob.length}개 입력하였습니다.`
                  : "직무를 입력해주세요."
              }
              className={
                secondInfo.interestedJob.length > 0 ? "valued" : "non-valued"
              }
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </form>
          {jobErr ? (
            <span className="err">최대 3개 입력 가능합니다.</span>
          ) : (
            <></>
          )}
          <span className="glass" onClick={() => onSubmitHandler("job")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <ul className="item-list">
            {secondInfo.interestedJob.map((job, index) => (
              <li key={job} className="item">
                <span>{job}</span>
                <span
                  className="x-mark"
                  onClick={() => removeItem("job", index)}
                >
                  <FontAwesomeIcon icon={faX} />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button className="submit" onClick={() => goNextStage()}>
        가입 완료 (2/2)
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
        }
        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
          overflow: hidden;
          width: 180px;
          height: 180px;
          border-radius: 100%;
          position: relative;
        }
        .no-img {
          background-color: #cacaca;
          width: 100%;
          height: 100%;
        }
        .attachment {
          object-fit: cover;
        }
        .hover-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 180px;
          height: 180px;
          border-radius: 100%;
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4.5px);
          -webkit-backdrop-filter: blur(4.5px);
          border: 2px solid rgba(255, 255, 255, 0.18);
          position: absolute;
          top: 0px;
          left: 0px;
          opacity: 0;
          transition: opacity 0.15s linear;
        }
        .img-box:hover .hover-box {
          opacity: 1;
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
        .hover-box label {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          border-radius: 5px;
          border: 2px solid #30b5ff;
          background-color: #00ff0000;
          color: #30b5ff;
          font-weight: bold;
          font-size: 1rem;
          box-shadow: 0 5px 18px 0px rgba(50, 50, 93, 0.111),
            0 3px 10px -3px rgba(0, 0, 0, 0.137),
            0 -1px 8px -1px rgba(0, 0, 0, 0.025);
          transition: 0.25s;
          cursor: pointer;
        }
        .hover-box label:hover {
          background-color: #30b5ff;
          color: white;
        }
        ul:not(.item-list) {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin: 0px;
          padding: 0px;
        }
        li:not(.item) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
          position: relative;
        }
        li input {
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
        li input:focus ~ label {
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
        li input::placeholder {
          text-align: center;
          font-weight: 700;
          color: #dedede;
        }
        .glass {
          position: absolute;
          top: 46.5px;
          right: 15px;
          font-size: 18px;
          color: #dedede;
          cursor: pointer;
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
        .item-list {
          width: 450px;
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          gap: 10px;
          flex-wrap: wrap;
        }
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          color: white;
          background-color: #30b5ff;
          padding: 10px 15px;
          border-radius: 500px;
        }
        .x-mark {
          cursor: pointer;
          font-size: 14px;
        }
        .err {
          align-self: flex-end;
          margin-top: 0px;
          font-size: 14px;
          color: #ff4848;
        }
      `}</style>
    </div>
  );
}
