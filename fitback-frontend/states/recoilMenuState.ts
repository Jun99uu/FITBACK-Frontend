import { atom } from "recoil";

export enum CurrentMenu {
  Home = "index",
  Find = "find", //현직자
  Feedback = "feedback",
  Event = "event",
  Login = "login",
  Register = "register",
}

export const MenuState = atom<CurrentMenu>({
  key: "layout",
  default: CurrentMenu.Home,
});
