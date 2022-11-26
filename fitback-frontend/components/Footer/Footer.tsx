import Image from "next/image";
import logopure from "../../res/logo-pure.svg";
import logotight from "../../res/logo-tight.svg";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer-box">
        <ul className="left-ul">
          <li className="title-bar">
            <div>
              <Image src={logotight} alt="fitback" width={10} height={14.5} />
              <Image src={logopure} alt="fitback" width={77} height={14.5} />
            </div>
            <ul className="right-ul">
              <li className="policy">이용약관</li>
              <li className="policy">개인정보취급방침</li>
            </ul>
          </li>
          <li className="subcontent">
            핏백 | 서울특별시 동작구 사당로 50 숭실대학교 그 어딘가 | 사업자
            등록번호 : 123-456
          </li>
          <li className="subcontent">
            통신판매업 신고번호 : 제2022-어쩌구저쩌구으아아아아아아 복사하게해줘
          </li>
          <li className="subcontent">
            Copyright by FITBACK. All rights reserved.
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: center;
          border-top: 1px solid #dedede;
        }
        .footer-box {
          width: 80%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          display: flex;
          list-style-type: none;
          margin: 0px;
          padding: 0px;
        }
        .left-ul {
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        .subcontent {
          color: #757575;
          font-size: 14px;
        }
        .right-ul {
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }
        .policy {
          color: #3b3b3b;
          cursor: pointer;
          font-size: 14px;
        }
        .title-bar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
        }
        .title-bar div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
      `}</style>
    </div>
  );
}
