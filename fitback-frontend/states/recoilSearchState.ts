import { atom } from "recoil";

const defaultKeword: Array<string> = [];

export const SearchState = atom<Array<string>>({
  key: "keyword",
  default: defaultKeword,
});

export enum Category {
  Job = "직무",
  Company = "회사",
  Career = "경력",
}

export const CategoryState = atom<Category>({
  key: "category",
  default: Category.Job,
});
