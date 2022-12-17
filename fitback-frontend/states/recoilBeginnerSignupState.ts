import { atom } from "recoil";

export enum Stage {
  ChoiceType,
  BeginnerFirst,
  BeginnerSecond,
  IncumbentFirst,
  IncumbentSecond,
  IncumbentThird,
  Complete,
}

export enum State {
  Student = "학생",
  Freelancer = "프리랜서",
  Looking = "취업 준비생",
  Junior = "주니어",
}

export interface BeginnerInfo {
  email: string;
  pwd: string;
  name: string;
  birth: string;
  state: State;
  profile: string;
  attachment: string;
  imgFile: File | null;
  nickname: string;
  InterestedCompany: Array<string>;
  InterestedJob: Array<string>;
}

const defaultInfo: BeginnerInfo = {
  email: "",
  pwd: "",
  name: "",
  birth: "",
  state: State.Student,
  profile: "",
  attachment: "",
  imgFile: null,
  nickname: "",
  InterestedCompany: [],
  InterestedJob: [],
};

export const BeginnerInfoState = atom<BeginnerInfo>({
  key: "beginner",
  default: defaultInfo,
});
