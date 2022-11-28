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
      <div className="content-box">
        <SearchBox />
      </div>
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 90px;
          padding: 90px 0px;
        }
      `}</style>
    </div>
  );
}
