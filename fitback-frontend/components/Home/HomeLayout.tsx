import { Banner } from "../../interfaces/HomeInterface";
import HomeBanner from "./HomeBanner";
import HomeIntroBox from "./HomeIntroBox";
import SearchBox from "./SearchBox";

interface homeProps {
  banner: Banner;
}

export default function HomeLayout(props: homeProps) {
  const { banner } = props;
  return (
    <div className="home-container">
      <HomeBanner banner={banner} />
      <HomeIntroBox />
      <SearchBox />
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
