import { Banner } from "../../interfaces/HomeInterface";
import HomeBanner from "./HomeBanner";

interface homeProps {
  banner: Banner;
}

export default function HomeLayout(props: homeProps) {
  const { banner } = props;
  return (
    <div className="container">
      <HomeBanner banner={banner} />
    </div>
  );
}
