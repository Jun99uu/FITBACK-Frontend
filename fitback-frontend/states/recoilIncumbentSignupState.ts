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

export enum IntroType {
  Exp = "경험",
  Company = "직장",
  Narration = "화법",
  Field = "분야",
  Strength = "강점",
}

export interface Shortcut {
  type: IntroType;
  content: string;
}

export interface IncumbentInfo {
  email: string;
  pwd: string;
  name: string;
  birth: string;
  job: string;
  company: string;
  career: string;
  companyEmail: string;
  bCardImgFile: File | null;
  profileImgFile: File | null;
  nickname: string;
  comment: string;
  intro: string;
  types: Array<Shortcut>;
}

const defaultInfo: IncumbentInfo = {
  email: "",
  pwd: "",
  name: "",
  birth: "",
  job: "",
  company: "",
  career: "",
  companyEmail: "",
  bCardImgFile: null,
  profileImgFile: null,
  nickname: "",
  comment: "",
  intro: "",
  types: [],
};

export const IncumbentInfoState = atom<IncumbentInfo>({
  key: "incumbent",
  default: defaultInfo,
});
