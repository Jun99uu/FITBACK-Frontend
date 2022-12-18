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
  Shortcut,
  IntroType,
} from "../../states/recoilIncumbentSignupState";
import { useRecoilState } from "recoil";
import Image from "next/image";
import people from "../../res/icons/people.svg";
import talk from "../../res/icons/talk.svg";
import bag from "../../res/icons/bag.svg";
import award from "../../res/icons/award.svg";
import grid from "../../res/icons/grid.svg";

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

interface thirdInfoInterface {
  nickname: string;
  profile: string;
  attachment: string;
  imgFile: File | null;
  comment: string;
  intro: string;
  types: Array<Shortcut>;
}

export default function IncumbentThird(props: incumbentProps) {
  const { setStage } = props;
  const [info, setInfo] = useRecoilState(IncumbentInfoState);
  const [thirdInfo, setThirdInfo] = useState<thirdInfoInterface>({
    nickname: "",
    profile: "",
    attachment: "",
    imgFile: null,
    comment: "",
    intro: "",
    types: [],
  });
  const [ac, setAc] = useState(false); // 모두 작성했는가
  const [typePeek, setTypePeek] = useState<Array<IntroType>>([]);
  const [typeContent, setTypeContent] = useState<Array<string>>([]);
  const iconStyle = { width: "25px", height: "25px" };

  const handleOnChange: Event<"input", "onChange"> = (e) => {
    if (window.FileReader) {
      const {
        currentTarget: { files, value },
      } = e;
      if (files !== null) {
        const theFile = files![0];
        const reader = new FileReader();
        setThirdInfo((prev) => ({
          nickname: prev.nickname,
          profile: value,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          comment: prev.comment,
          intro: prev.intro,
          types: prev.types,
        }));
        reader.onloadend = (finishedEvent: any) => {
          const {
            target: { result },
          } = finishedEvent;
          setThirdInfo((prev) => ({
            nickname: prev.nickname,
            profile: prev.profile,
            attachment: result,
            imgFile: theFile,
            comment: prev.comment,
            intro: prev.intro,
            types: prev.types,
          }));
        };
        reader.readAsDataURL(theFile);
      }
    }
  };

  const onChangeHandler = (name: string, value: string) => {
    switch (name) {
      case "nickname":
        setThirdInfo((prev) => ({
          nickname: value,
          profile: prev.profile,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          comment: prev.comment,
          intro: prev.intro,
          types: prev.types,
        }));
        break;
      case "comment":
        setThirdInfo((prev) => ({
          nickname: prev.nickname,
          profile: prev.profile,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          comment: value,
          intro: prev.intro,
          types: prev.types,
        }));
        break;
      case "intro":
        setThirdInfo((prev) => ({
          nickname: prev.nickname,
          profile: prev.profile,
          attachment: prev.attachment,
          imgFile: prev.imgFile,
          comment: prev.comment,
          intro: value,
          types: prev.types,
        }));
        break;
    }
  };

  const onCheckHandler = (checked: boolean, type: IntroType) => {
    if (checked && typePeek.length < 3) {
      setTypePeek((prev) => [...prev, type]);
      setTypeContent((prev) => [...prev, ""]);
    } else if (!checked) {
      let i = typePeek.indexOf(type);
      const newTypes = typePeek.filter((t) => t !== type);
      setTypePeek(newTypes);
      const newContent = typeContent.filter((t, ind) => ind !== i);
      setTypeContent(newContent);
    }
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
        companyEmail: info.companyEmail,
        bCardImgFile: info.bCardImgFile,
        profileImgFile: thirdInfo.imgFile,
        nickname: thirdInfo.nickname,
        comment: thirdInfo.comment,
        intro: thirdInfo.comment,
        types: typePeek.map((t, ind) => ({
          type: t,
          content: typeContent[ind],
        })),
      };
      setInfo(newInfo);
      setStage(Stage.Complete);
    }
  };

  useEffect(() => {
    if (
      thirdInfo.imgFile !== null &&
      thirdInfo.nickname !== "" &&
      thirdInfo.comment !== "" &&
      thirdInfo.intro !== "" &&
      typePeek.length === 3 &&
      typeContent.length === 3
    )
      setAc(true);
    else setAc(false);
  }, [thirdInfo, typePeek, typeContent]);

  return (
    <div className="container">
      <div className="subtitle-box">
        <span className="subtitle">추가정보를 입력해주세요.</span>
        <span className="intro">
          정보를 정확하게 입력할수록, 초심자와의 매칭률이 높아져요!
        </span>
      </div>
      <div className="img-box">
        {thirdInfo.attachment !== "" ? (
          <Image
            src={thirdInfo.attachment}
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
            value={thirdInfo.profile}
          />
        </div>
      </div>
      <ul>
        <li>
          <label htmlFor="nickname" className="label">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요."
            className={thirdInfo.nickname !== "" ? "valued" : "non-valued"}
            value={thirdInfo.nickname}
            onChange={(e) => onChangeHandler("nickname", e.target.value)}
          />
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="comment" className="label">
            멘토님의 한 마디
          </label>
          <textarea
            id="comment"
            placeholder={
              "나를 한 마디로 표현한다면?\n나의 피드백은 이렇게 진행된다!\n현직자님을 드러내는 한 마디를 작성해주세요."
            }
            className={thirdInfo.comment !== "" ? "valued" : "non-valued"}
            value={thirdInfo.comment}
            onChange={(e) => onChangeHandler("comment", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="intro" className="label">
            멘토님 소개
          </label>
          <textarea
            id="intro"
            placeholder={"간단한 소개부터, 이력 경험 등에 대해서 공유해주세요."}
            className={thirdInfo.intro !== "" ? "valued" : "non-valued"}
            value={thirdInfo.intro}
            onChange={(e) => onChangeHandler("intro", e.target.value)}
          />
        </li>
        <li>
          <div className="deco-box">
            <span className="deco">멘토님을 3가지로 표현해주세요.</span>
            <span className="sub-deco">
              본인을 잘 나타낼 수 있는 3가지 키워드를 선택하여, 내용을
              입력해주세요.
            </span>
          </div>
          <ul className="opt-list">
            <li className="opt">
              <label htmlFor="exp" className="opt-name">
                경험
              </label>
              <label
                htmlFor="exp"
                className={`opt-icon ${
                  typePeek.includes(IntroType.Exp) ? "selected" : "non-selected"
                }`}
              >
                <Image style={iconStyle} src={people} alt="경험"></Image>
              </label>
              <input
                type="checkbox"
                id="exp"
                checked={typePeek.includes(IntroType.Exp)}
                onChange={(e) =>
                  onCheckHandler(e.target.checked, IntroType.Exp)
                }
              />
            </li>
            <li className="opt">
              <label htmlFor="com" className="opt-name">
                직장
              </label>
              <label
                htmlFor="com"
                className={`opt-icon ${
                  typePeek.includes(IntroType.Company)
                    ? "selected"
                    : "non-selected"
                }`}
              >
                <Image style={iconStyle} src={bag} alt="직장"></Image>
              </label>
              <input
                type="checkbox"
                id="com"
                checked={typePeek.includes(IntroType.Company)}
                onChange={(e) =>
                  onCheckHandler(e.target.checked, IntroType.Company)
                }
              />
            </li>
            <li className="opt">
              <label htmlFor="nar" className="opt-name">
                화법
              </label>
              <label
                htmlFor="nar"
                className={`opt-icon ${
                  typePeek.includes(IntroType.Narration)
                    ? "selected"
                    : "non-selected"
                }`}
              >
                <Image style={iconStyle} src={talk} alt="화법"></Image>
              </label>
              <input
                type="checkbox"
                id="nar"
                checked={typePeek.includes(IntroType.Narration)}
                onChange={(e) =>
                  onCheckHandler(e.target.checked, IntroType.Narration)
                }
              />
            </li>
            <li className="opt">
              <label htmlFor="field" className="opt-name">
                분야
              </label>
              <label
                htmlFor="field"
                className={`opt-icon ${
                  typePeek.includes(IntroType.Field)
                    ? "selected"
                    : "non-selected"
                }`}
              >
                <Image style={iconStyle} src={grid} alt="분야"></Image>
              </label>
              <input
                type="checkbox"
                id="field"
                checked={typePeek.includes(IntroType.Field)}
                onChange={(e) =>
                  onCheckHandler(e.target.checked, IntroType.Field)
                }
              />
            </li>
            <li className="opt">
              <label htmlFor="str" className="opt-name">
                강점
              </label>
              <label
                htmlFor="str"
                className={`opt-icon ${
                  typePeek.includes(IntroType.Strength)
                    ? "selected"
                    : "non-selected"
                }`}
              >
                <Image style={iconStyle} src={award} alt="강점"></Image>
              </label>
              <input
                type="checkbox"
                id="str"
                checked={typePeek.includes(IntroType.Strength)}
                onChange={(e) =>
                  onCheckHandler(e.target.checked, IntroType.Strength)
                }
              />
            </li>
          </ul>
          <ul className="add-list">
            {typePeek.map((t, index) => (
              <li key={t} className="add">
                <span className="add-icon">
                  <Image
                    style={iconStyle}
                    src={
                      t === IntroType.Exp
                        ? people
                        : t === IntroType.Company
                        ? bag
                        : t === IntroType.Field
                        ? grid
                        : t === IntroType.Narration
                        ? talk
                        : t === IntroType.Strength
                        ? award
                        : ""
                    }
                    alt={t}
                  />
                </span>
                <span className="add-content">
                  <span>나는</span>
                  <input
                    type="text"
                    className="under-line-input"
                    placeholder="내용입력"
                    value={typeContent[index]}
                    onChange={(e) =>
                      setTypeContent((prev) =>
                        prev.map((p, pInd) =>
                          pInd === index ? e.target.value : p
                        )
                      )
                    }
                  />
                  <span>
                    {t === IntroType.Exp
                      ? "한 경험이 있습니다."
                      : t === IntroType.Company
                      ? "에 재직 중 입니다."
                      : t === IntroType.Field
                      ? "를 전문적으로 다루고 있습니다."
                      : t === IntroType.Narration
                      ? "으로 피드백을 해줍니다."
                      : t === IntroType.Strength
                      ? "한 것이 강점입니다."
                      : ""}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button className="submit" onClick={() => goNextStage()}>
        가입 완료 (3/3)
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
          white-space: pre-line;
          text-align: center;
        }
        ul:not(.opt-list, .add-list) {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin: 0px;
          padding: 0px;
        }
        li:not(.opt, .add) {
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
        .deco,
        .label {
          font-size: 18px;
          font-weight: 700;
          color: #3b3b3b;
        }
        .sub-deco {
          font-size: 15px;
          color: #757575;
        }
        input[type="text"]:not(.under-line-input) {
          width: 100%;
          min-height: 55px;
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
        .opt-list {
          width: 450px;
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin: 30px 0px;
        }
        .opt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .opt-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          cursor: pointer;
          transition: all 0.15s;
        }
        .selected {
          background-color: #30b5ff;
        }
        .non-selected {
          background-color: #0a0a0a;
        }
        input[type="checkbox"] {
          display: none;
        }
        .add-list {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .add {
          width: 550px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 15px;
        }
        .add-icon {
          width: 55px;
          height: 55px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #30b5ff;
        }
        .add-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          color: #3b3b3b;
          font-size: 16px;
          font-weight: 700;
          gap: 5px;
        }
        .under-line-input {
          width: 130px;
          height: 50px;
          border: none;
          text-align: center;
          font-family: "SUIT Variable", sans-serif;
          color: #30b5ff;
          font-size: 16px;
          font-weight: 700;
          outline: none;
        }
        .under-line-input:focus {
          border-bottom: 2px solid #30b5ff;
        }
        textarea {
          resize: none;
          width: 100%;
          color: #232323;
          border-radius: 15px;
          padding: 15px;
          font-size: 16px;
          font-family: "SUIT Variable", sans-serif;
          transition: all 0.15s;
          outline: none;
          text-align: start;
          overflow: hidden;
        }
        textarea::placeholder {
          text-align: start;
          font-weight: 700;
          color: #dedede;
        }
        #comment {
          height: 200px;
        }
        #intro {
          height: 350px;
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
