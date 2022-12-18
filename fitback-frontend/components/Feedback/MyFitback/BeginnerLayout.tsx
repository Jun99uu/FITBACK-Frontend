import { Incumbent } from "../../../interfaces/IncumbentInterface";
import { useState, useEffect } from "react";
import PaginationBar from "../../Mentor/PaginationBar";
import MentorItemForBeginner from "./MentorItemForBeginner";

enum Stage {
  New = "피드백 요청",
  Proceeding = "피드백 진행 중",
  Complete = "피드백 완료",
}

interface beginnerProps {
  stage: Stage;
}

interface item {
  stage: Stage;
  mentor: Incumbent;
  createdAt: string;
  type: string; //ex)포트폴리오 피드백
  content: string;
  link: string;
  accepted: boolean;
}

export default function BeginnerLayout(props: beginnerProps) {
  const { stage } = props;
  const [curPage, setCurPage] = useState(0);
  const [items, setItems] = useState<Array<Array<item>>>(dummyData);
  const [pages, setPages] = useState(dummyData.length);

  useEffect(() => {
    if (stage === Stage.New) setItems(dummyData);
    else if (stage === Stage.Proceeding) setItems(dummyDataProceeding);
    else if (stage === Stage.Complete) setItems(dummyDataComplete);
    setCurPage(0);
  }, [stage]);

  useEffect(() => {
    setPages(items.length);
  }, [items]);

  return (
    <div className="container">
      <div className="page-item-box">
        {items[curPage].map((item, index) =>
          item.stage === stage ? (
            <MentorItemForBeginner
              item={item}
              key={`${item.createdAt}-${index}`}
            />
          ) : (
            <></>
          )
        )}
      </div>
      <PaginationBar pages={pages} curPage={curPage} setCurPage={setCurPage} />
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .page-item-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 30px;
        }
      `}</style>
    </div>
  );
}

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

const dummyItem: item = {
  stage: Stage.New,
  mentor: tmp,
  createdAt: "2022-12-19",
  type: "포트폴리오 피드백",
  content:
    "Baby (baby), got me looking so crazy (crazy) 빠져버리는 daydream (daydream) Got me feeling you 너도 말해줄래? 누가 내게 뭐래든 남들과는 달라 넌 Maybe you could be the one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be the one Oh, baby (baby) 예민하대 나 lately (lately) 너 없이는 매일 매일이 yeah (매일이 yeah) 재미없어, 어쩌지? I just want you call my phone right now I just wanna hear you're mine 'Cause I know what you like boy (ah-ah) You're my chemical hype boy (ah-ah) 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가 전해 And we can go hi-i-i-i-i-igh 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 눈을 감아-ah-ah-ah-ah-ah 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 잠에 들려고 잠에 들려 해도 니 생각에 또 새벽 세 시 uh-oh 알려줄 거야 they can't have you no more 봐봐, 여기 내 이름 써있다고 yeah",
  link: "https://github.com/Jun99uu",
  accepted: true,
};

const dummyItem2: item = {
  stage: Stage.New,
  mentor: tmp,
  createdAt: "2022-12-19",
  type: "포트폴리오 피드백",
  content:
    "Baby (baby), got me looking so crazy (crazy) 빠져버리는 daydream (daydream) Got me feeling you 너도 말해줄래? 누가 내게 뭐래든 남들과는 달라 넌 Maybe you could be the one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be the one Oh, baby (baby) 예민하대 나 lately (lately) 너 없이는 매일 매일이 yeah (매일이 yeah) 재미없어, 어쩌지? I just want you call my phone right now I just wanna hear you're mine 'Cause I know what you like boy (ah-ah) You're my chemical hype boy (ah-ah) 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가 전해 And we can go hi-i-i-i-i-igh 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 눈을 감아-ah-ah-ah-ah-ah 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 잠에 들려고 잠에 들려 해도 니 생각에 또 새벽 세 시 uh-oh 알려줄 거야 they can't have you no more 봐봐, 여기 내 이름 써있다고 yeah",
  link: "https://github.com/Jun99uu",
  accepted: false,
};

const dummyItem3: item = {
  stage: Stage.Proceeding,
  mentor: tmp,
  createdAt: "2022-12-19",
  type: "포트폴리오 피드백",
  content:
    "Baby (baby), got me looking so crazy (crazy) 빠져버리는 daydream (daydream) Got me feeling you 너도 말해줄래? 누가 내게 뭐래든 남들과는 달라 넌 Maybe you could be the one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be the one Oh, baby (baby) 예민하대 나 lately (lately) 너 없이는 매일 매일이 yeah (매일이 yeah) 재미없어, 어쩌지? I just want you call my phone right now I just wanna hear you're mine 'Cause I know what you like boy (ah-ah) You're my chemical hype boy (ah-ah) 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가 전해 And we can go hi-i-i-i-i-igh 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 눈을 감아-ah-ah-ah-ah-ah 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 잠에 들려고 잠에 들려 해도 니 생각에 또 새벽 세 시 uh-oh 알려줄 거야 they can't have you no more 봐봐, 여기 내 이름 써있다고 yeah",
  link: "https://github.com/Jun99uu",
  accepted: true,
};

const dummyItem4: item = {
  stage: Stage.Complete,
  mentor: tmp,
  createdAt: "2022-12-19",
  type: "포트폴리오 피드백",
  content:
    "Baby (baby), got me looking so crazy (crazy) 빠져버리는 daydream (daydream) Got me feeling you 너도 말해줄래? 누가 내게 뭐래든 남들과는 달라 넌 Maybe you could be the one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be the one Oh, baby (baby) 예민하대 나 lately (lately) 너 없이는 매일 매일이 yeah (매일이 yeah) 재미없어, 어쩌지? I just want you call my phone right now I just wanna hear you're mine 'Cause I know what you like boy (ah-ah) You're my chemical hype boy (ah-ah) 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가 전해 And we can go hi-i-i-i-i-igh 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 눈을 감아-ah-ah-ah-ah-ah 말해봐 yeah 느껴봐 mm-mm Take him to the sk-y-y-y-y-y You know, I hype you boy 잠에 들려고 잠에 들려 해도 니 생각에 또 새벽 세 시 uh-oh 알려줄 거야 they can't have you no more 봐봐, 여기 내 이름 써있다고 yeah",
  link: "https://github.com/Jun99uu",
  accepted: true,
};

const dummyData = [
  [dummyItem, dummyItem, dummyItem, dummyItem, dummyItem],
  [dummyItem, dummyItem, dummyItem, dummyItem2, dummyItem2],
  [dummyItem2, dummyItem2, dummyItem2, dummyItem2, dummyItem2],
  [dummyItem2, dummyItem2, dummyItem2],
];

const dummyDataProceeding = [
  [dummyItem3, dummyItem3, dummyItem3, dummyItem3, dummyItem3],
  [dummyItem3, dummyItem3, dummyItem3, dummyItem3, dummyItem3],
  [dummyItem3, dummyItem3, dummyItem3, dummyItem3, dummyItem3],
];

const dummyDataComplete = [[dummyItem4, dummyItem4, dummyItem4]];
