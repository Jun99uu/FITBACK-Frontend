import { Banner } from "../../interfaces/HomeInterface";
import { Incumbent } from "../../interfaces/IncumbentInterface";
import HomeBanner from "../Home/HomeBanner";
import IncumbentCarousel from "../Home/IncumbentCarousel";
import SearchBox from "../Home/SearchBox";
import MentorPagination from "./MentorPagination";

interface homeProps {
  banner: Banner;
}

export default function MentorLayout(props: homeProps) {
  const { banner } = props;
  return (
    <div className="container">
      <HomeBanner banner={banner} />
      <div className="upper-carousel">
        <IncumbentCarousel header={`추천멘토`} />
      </div>
      <div className="bottom-box">
        <div className="search-box">
          <div className="title-box">
            <span>나에게 딱 맞는 멘토를 찾아보세요.</span>
          </div>
          <SearchBox />
        </div>
        <MentorPagination items={dummyData} />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .upper-carousel {
          width: 100%;
          background-color: #fffdf6;
          height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bottom-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 140px;
          padding: 100px 0px;
        }
        .search-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
        }
        .title-box {
          width: 1300px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
          padding: 0px 0px 0px 20px;
        }
      `}</style>
    </div>
  );
}

const tmp: Incumbent = {
  name: "중규리",
  img: "https://i.pinimg.com/736x/49/fd/16/49fd16c2857d9ce982f4839958b1808a.jpg",
  ment: "토스 가고 싶어?\n나도 가고 싶어...",
  company: "비바리퍼블리카",
  job: "프론트엔드 개발",
  career: 1,
  reviews: 10,
  satisfaction: 99,
};

const dummyData: Array<Array<Incumbent>> = [
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
  [
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
    tmp,
  ],
];
