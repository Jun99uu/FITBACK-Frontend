import MyFitBackLayout from "../components/Feedback/MyFitback/MyFitBackLayout";
import { useState } from "react";
import Seo from "../components/Seo";
import { AuthState, UserType } from "../states/recoilAuthState";
import { useRecoilState } from "recoil";

export default function MyFeedBack() {
  const [userType, setUserType] = useRecoilState(AuthState);
  return (
    <div className="container">
      <Seo title="마이핏백" />
      <MyFitBackLayout userType={userType} />
    </div>
  );
}
