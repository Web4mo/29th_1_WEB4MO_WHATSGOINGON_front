import React from "react";
import { useNavigate } from "react-router-dom";
import WGO from "../../assets/icons/whats_going_on.svg";
import TITLE from "../../assets/icons/main_title.svg";
import IMG from "../../assets/icons/img.jpg";
import PENCIL from "../../assets/icons/pencil.svg";
import Q10 from "../../assets/icons/q_1_0.svg";
import Q12 from "../../assets/icons/q_1_2.svg";
import "./main.css";

const newsIcons = [
  require("../../assets/icons/news/news_0.svg").default,
  require("../../assets/icons/news/news_1.svg").default,
  require("../../assets/icons/news/news_2.svg").default,
  require("../../assets/icons/news/news_3.svg").default,
  require("../../assets/icons/news/news_4.svg").default,
  require("../../assets/icons/news/news_5.svg").default,
  require("../../assets/icons/news/news_6.svg").default,
  require("../../assets/icons/news/news_7.svg").default,
  require("../../assets/icons/news/news_8.svg").default,
  require("../../assets/icons/news/news_9.svg").default,
  require("../../assets/icons/news/news_10.svg").default,
  require("../../assets/icons/news/news_11.svg").default,
  require("../../assets/icons/news/news_12.svg").default,
  require("../../assets/icons/news/news_13.svg").default,
  require("../../assets/icons/news/news_14.svg").default,
  require("../../assets/icons/news/news_15.svg").default,
  require("../../assets/icons/news/news_16.svg").default,
  require("../../assets/icons/news/news_17.svg").default,
  require("../../assets/icons/news/news_18.svg").default,
  require("../../assets/icons/news/news_19.svg").default,
  require("../../assets/icons/news/news_20.svg").default,
  require("../../assets/icons/news/news_21.svg").default,
  require("../../assets/icons/news/news_22.svg").default,
  require("../../assets/icons/news/news_23.svg").default,
  require("../../assets/icons/news/news_24.svg").default,
];

const topics = [
  { name: "경향신문", path: "https://www.khan.co.kr/" },
  { name: "국민일보", path: "https://m.kmib.co.kr/" },
  { name: "내일신문", path: "https://www.naeil.com/" },
  { name: "동아일보", path: "https://www.donga.com/" },
  { name: "문화일보", path: "https://www.munhwa.com/" },
  { name: "서울신문", path: "https://www.seoul.co.kr/" },
  { name: "세계일보", path: "https://m.segye.com/" },
  { name: "연합뉴스", path: "https://www.yna.co.kr/" },
  { name: "중앙일보", path: "https://www.joongang.co.kr/" },
  { name: "한겨레", path: "https://www.hani.co.kr/" },
  { name: "한국일보", path: "https://www.hankookilbo.com/" },
  { name: "매일경제", path: "https://www.mk.co.kr/" },
  { name: "머니투데이", path: "https://www.mt.co.kr/" },
  { name: "서울경제", path: "https://m.sedaily.com/" },
  { name: "아시아경제", path: "https://www.asiae.co.kr/" },
  { name: "아주경제", path: "https://www.ajunews.com/" },
  { name: "파이낸셜뉴스", path: "https://www.fnnews.com/" },
  { name: "한국경제", path: "https://www.hankyung.com/" },
  { name: "헤럴드경제", path: "https://biz.heraldcorp.com/" },
  { name: "디지털타임스", path: "https://m.dt.co.kr/" },
  { name: "전자신문", path: "https://m.etnews.com/" },
  { name: "뉴욕타임스", path: "https://www.nytimes.com/" },
  { name: "월스트리트저널", path: "https://www.wsj.com/" },
  { name: "워싱턴포스트", path: "https://www.washingtonpost.com/" },
  { name: "데일리안", path: "https://www.dailian.co.kr/" },
];

const newsIndices: string[] = ["0"];

const MAIN_2: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="main-container">
      <div className="main-header">
        <img src={WGO} alt="WGO" className="main-wgo-image" />
        <div className="main-header-buttons">
          <button className="main-logout-button" onClick={() => navigate("/")}>
            Log Out
          </button>
          <button
            className="main-mypage-button"
            onClick={() => navigate("/mypage/profile")}
          >
            My Page
          </button>
        </div>
      </div>
      <div className="main-content">
        <img src={TITLE} alt="TITLE" className="main-title-image" />
        <div className="main-content-container">
          <div className="main-left-box">
            <p className="main-left-text-main">안녕하세요 기사 제목입니다.</p>
            <p className="main-left-text">
              2024.05.06
              <img src={PENCIL} alt="Edit" className="main-pencil-icon-left" />
            </p>
            <img src={IMG} alt="Example" className="main-left-image" />
          </div>
          <div className="main-right-box">
            <div className="main-header-buttons">
              {newsIndices.length > 0 ? (
                newsIndices.map((index) => {
                  const iconIndex = parseInt(index, 10);
                  if (iconIndex >= 0 && iconIndex < newsIcons.length) {
                    const topic = topics[iconIndex];
                    return (
                      <button
                        key={index}
                        className="main-news-button"
                        onClick={() => handleButtonClick(topic.path)}
                      >
                        <img
                          src={newsIcons[iconIndex]}
                          alt={`News Icon ${index}`}
                          className="main-news-icon"
                        />
                      </button>
                    );
                  }
                  return null;
                })
              ) : (
                <button className="main-disabled-button" disabled>
                  X
                </button>
              )}
            </div>
            <p className="main-HAD">How About This?</p>
            <button className="main-headline-button">
              데일리 헤드라인 추천 기사입니다.
            </button>
            <button className="main-headline-button">
              데일리 헤드라인 추천 기사입니다.
            </button>
            <button className="main-headline-button">
              데일리 헤드라인 추천 기사입니다.
            </button>
            <button className="main-headline-button">
              데일리 헤드라인 추천 기사입니다.
            </button>
            <button className="main-headline-button">
              데일리 헤드라인 추천 기사입니다.
            </button>
          </div>
        </div>
        <div className="main-table-container">
          <div className="main-table-row main-table-header">
            <div className="main-table-cell-3">
              <div className="main-table-text-container">
                <img src={Q10} alt="Politics" className="main-question-icon" />
                <p className="main-table-text">Politics +</p>
              </div>
            </div>
            <div className="main-table-cell-3">
              <div className="main-table-text-container">
                <img src={Q12} alt="Economy" className="main-question-icon" />
                <p className="main-table-text">Economy +</p>
              </div>
            </div>
            <div className="main-table-cell-3">
              <div className="main-table-text-container">
                <p className="main-table-text">+ 더보기</p>
              </div>
            </div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div className="main-table-row-3" key={index}>
              <div className="main-table-cell-3">
                <img
                  src={IMG}
                  alt="Example"
                  className="main-fixed-size-image"
                />
                <p className="main-table-text">안녕하세요 기사 제목입니다.</p>
                <p className="main-table-subtext">
                  2024.05.06
                  <img src={PENCIL} alt="Edit" className="main-pencil-icon" />
                </p>
              </div>
              <div className="main-table-cell-3">
                <img
                  src={IMG}
                  alt="Example"
                  className="main-fixed-size-image"
                />
                <p className="main-table-text">안녕하세요 기사 제목입니다.</p>
                <p className="main-table-subtext">
                  2024.05.06
                  <img src={PENCIL} alt="Edit" className="main-pencil-icon" />
                </p>
              </div>
              <div className="main-table-cell-3">
                {index === 0 ? (
                  <button
                    className="main-button"
                    onClick={() => navigate("/mypage/profile")}
                  >
                    관심 분야 추가하러 이동하기
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MAIN_2;
