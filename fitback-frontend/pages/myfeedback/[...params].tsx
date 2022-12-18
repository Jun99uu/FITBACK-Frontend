import { GetServerSideProps } from "next";
import Seo from "../../components/Seo";
import FeedBackContentLayout from "../../components/Feedback/Dynamic/FeedBackContentLayout";
import { useState } from "react";
import CompleteLayout from "../../components/Feedback/Dynamic/CompleteLayout";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

enum Type {
  Portfolio = "40,000",
  Personal = "5,000",
  Team = "20,000",
  Code = "2,000",
}

interface item {
  name: string;
  type: Type;
  link: string;
  question: string;
  stage: Stage;
  accept: boolean;
}

interface serversideProps {
  id: string;
}

enum UserType {
  Beginner,
  Mentor,
}

export default function MyFeedBackContent(props: serversideProps) {
  const { id } = props;
  const [userType, setUserType] = useState(UserType.Beginner);
  return (
    <div className="container">
      <Seo title="마이핏백" />
      {userType === UserType.Beginner ? (
        dummyData.stage === Stage.Complete ? (
          <CompleteLayout item={dummyData} />
        ) : (
          <FeedBackContentLayout item={dummyData} />
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { params } = query;
    return { props: { name: params } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

const dummyData: item = {
  name: "중규리",
  type: Type.Portfolio,
  link: "https://github.com/Jun99uu",
  question:
    "최근 포트폴리오를 수정한 상태인데 이전까지 기업에 지원했을 때 항상 면접에서 떨어져서 포트폴리오에 문제가 있는 것 같아 현직자분의 시선에서 보완할 점과 괜찮은 부분을 알고 싶습니다!\n\n질문을 정리하자면,\n1. 포트폴리오를 짧은 시간 훑어보셨을 때 전반적인 느낌이 궁금합니다.\n2.피드백을 위해서 들여다보셨을 때 이건 반드시 수정해야한다는 부분이 궁금합니다.\n3.직접 면접을 보신다면 꼭 물어보실 것 같은 부분이 궁금합니다.\n4.추가적으로 도움되는 조언은 환영합니다!",
  stage: Stage.Complete,
  accept: false,
};
