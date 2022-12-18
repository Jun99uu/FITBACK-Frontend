import MyFitBackLayout from "../components/Feedback/MyFitback/MyFitBackLayout";
import { useState } from "react";
import Seo from "../components/Seo";

enum UserType {
  Beginner,
  Mentor,
}

export default function MyFeedBack() {
  const [userType, setUserType] = useState(UserType.Mentor);
  return (
    <div className="container">
      <Seo title="마이핏백" />
      <MyFitBackLayout userType={userType} />
    </div>
  );
}
