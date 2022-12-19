import { atom } from "recoil";

export enum UserType {
    None,
    Beginner,
    Mentor,
  }

const defaultAuth: UserType = UserType.None

export const AuthState = atom<UserType>({
  key: "auth",
  default: defaultAuth,
});