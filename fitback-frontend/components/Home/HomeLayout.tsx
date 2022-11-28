import { Banner } from "../../interfaces/HomeInterface";
import HomeBanner from "./HomeBanner";
import SearchBox from "./SearchBox";

interface homeProps {
  banner: Banner;
}

export default function HomeLayout(props: homeProps) {
  const { banner } = props;
  return (
    <div className="home-container">
      <HomeBanner banner={banner} />
      <SearchBox />
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 90px;
        }
      `}</style>
    </div>
  );
}
