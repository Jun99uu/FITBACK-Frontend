import { GetServerSideProps } from "next";
import Seo from "../components/Seo";
import HomeLayout from "../components/Home/HomeLayout";
import { Banner } from "../interfaces/HomeInterface";

interface serverSideProps {
  banner: Banner;
}

export default function Home(props: serverSideProps) {
  const { banner } = props;
  return (
    <>
      <Seo title="Home" />
      <HomeLayout banner={banner} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const tmp: Banner = {
      banners: [
        "https://i.pinimg.com/564x/6b/0e/34/6b0e34f23a883b9e127b07f0b84dd3fa.jpg",
        "https://i.pinimg.com/564x/37/c8/3e/37c83e262bc611d2f2a8e705560c499d.jpg",
        "https://i.pinimg.com/564x/68/f8/0a/68f80aa2a05b0dffa12062034d384468.jpg",
      ],
    };

    return { props: { banner: tmp } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
