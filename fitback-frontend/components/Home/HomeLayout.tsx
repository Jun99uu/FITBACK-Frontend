import { Banner } from "../../interfaces/HomeInterface";
import HomeBanner from "./HomeBanner";
import HomeIntroBox from "./HomeIntroBox";
import IncumbentCarousel from "./IncumbentCarousel";
import ReviewCarousel from "./ReviewCarousel";
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
        <IncumbentCarousel />
        <ReviewCarousel />
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
          gap: 150px;
          padding: 150px 0px;
        }
      `}</style>
    </div>
  );
}
