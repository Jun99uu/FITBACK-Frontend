import { atom } from "recoil";

const defaultKeword = "";

export const SearchState = atom<string>({
  key: "layout",
  default: defaultKeword,
});

export enum Category {
  Job = "직무",
  Company = "회사",
  Career = "경력",
}

export const CategoryState = atom<Category>({
  key: "layout",
  default: Category.Job,
});
