import { GetServerSideProps } from "next";
import Seo from "../../components/Seo";
import RegisterFeedbackLayout from "../../components/Feedback/Register/RegisterFeedbackLayout";

interface serversideProps {
  name: string;
}

export default function RegisterFeedback(props: serversideProps) {
  const { name } = props;
  return (
    <div className="container">
      <Seo title={`${name}님께 피드백 요청하기`} />
      <RegisterFeedbackLayout name={name} />
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
