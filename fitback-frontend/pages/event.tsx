import EventLayout from "../components/Event/EventLayout";
import { GetServerSideProps } from "next";
import Seo from "../components/Seo";

interface serverSideProps {
  banner: Array<string>;
}

export default function Event(props: serverSideProps) {
  const { banner } = props;
  return (
    <div className="container">
      <EventLayout banners={banner} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const tmp = [
      "https://user-images.githubusercontent.com/44965706/204178869-6211e40a-4bdd-444c-af42-17b94c75f36e.png",
      "https://user-images.githubusercontent.com/44965706/204179090-ff4d93c4-2ad6-4aee-9043-b4b07ab9a776.png",
      "https://user-images.githubusercontent.com/44965706/204179144-d17a581c-4865-4859-9187-9885df6e406c.png",
    ];

    return { props: { banner: tmp } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
