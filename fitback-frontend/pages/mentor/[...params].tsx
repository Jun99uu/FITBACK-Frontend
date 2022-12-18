import DetailLayout from "../../components/Mentor/Dynamic/DetailLayout";
import { GetServerSideProps } from "next";
import { Incumbent } from "../../interfaces/IncumbentInterface";
import Seo from "../../components/Seo";

interface serversideProps {
  id: number;
  info: Incumbent;
}

export default function DynamicMentor(props: serversideProps) {
  const { id, info } = props;
  return (
    <div className="container">
      <Seo title={`Mentor|${info.name}`} />
      <DetailLayout item={info} id={id} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { params } = query;
    const tmp: Incumbent = {
      id: 0,
      name: "중규리",
      img: "https://i.pinimg.com/736x/49/fd/16/49fd16c2857d9ce982f4839958b1808a.jpg",
      ment: "토스 가고 싶어?\n나도 가고 싶어...",
      company: "비바리퍼블리카",
      job: "프론트엔드 개발",
      career: 1,
      reviews: 10,
      satisfaction: 99,
    };

    return { props: { id: params, info: tmp } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
