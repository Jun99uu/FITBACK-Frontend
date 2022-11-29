import { atom } from "recoil";

export enum CurrentMenu {
  Home = "index",
  Mentor = "mentor", //현직자
  Feedback = "myfeedback",
  Event = "event",
  Login = "login",
  Register = "register",
}

export const MenuState = atom<CurrentMenu>({
  key: "layout",
  default: CurrentMenu.Home,
});
