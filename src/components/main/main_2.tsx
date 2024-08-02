import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import WGO from "../../assets/icons/whats_going_on.svg";
import TITLE from "../../assets/icons/main_title.svg";
import IMG from "../../assets/icons/img.jpg";
import PENCIL from "../../assets/icons/pencil.svg";
import Q10 from "../../assets/icons/q_1_0.svg";
import Q11 from "../../assets/icons/q_1_1.svg";
import Q12 from "../../assets/icons/q_1_2.svg";
import Q13 from "../../assets/icons/q_1_3.svg";
import Q14 from "../../assets/icons/q_1_4.svg";
import Q15 from "../../assets/icons/q_1_5.svg";
import Q16 from "../../assets/icons/q_1_6.svg";
import Q17 from "../../assets/icons/q_1_7.svg";
import SaveScrap from "components/saveScrap";
import RedirectModal from "components/redirectModal";
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

const interestsTopics = [
  { num: "0", name: "정치", icon: Q10, eng: "Politics +" },
  { num: "1", name: "생활 문화", icon: Q11, eng: "Culture +" },
  { num: "2", name: "경제", icon: Q12, eng: "Economy +" },
  { num: "3", name: "IT/과학", icon: Q13, eng: "IT/Science +" },
  { num: "4", name: "사회", icon: Q14, eng: "Society +" },
  { num: "5", name: "세계", icon: Q15, eng: "World +" },
  { num: "6", name: "스포츠", icon: Q16, eng: "Sports +" },
  { num: "7", name: "연예", icon: Q17, eng: "Entertainment +" },
];

const dummyUserData = {
  name: "강해린",
  id: "Babycattttt00",
  userType: "자유로운 영혼의 도파민형",
  assignDate: "2024-04-21",
  interests: ["사회", "연예"],
  keywords: ["교육", "건강정보", "뮤직"],
  media: ["세계일보", "한겨레", "워싱턴포스트"],
  profileImg: "프로필 이미지 url",
  password: "existing password",
};

const dummyHeadlines = [
  { articleId: 1, title: "예시 기사 제목1" },
  { articleId: 2, title: "예시 기사 제목2" },
  { articleId: 3, title: "예시 기사 제목3" },
  { articleId: 4, title: "예시 기사 제목4" },
  { articleId: 5, title: "예시 기사 제목5" },
];

const dummyMainNews = {
  articleId: 1,
  title: "예시 기사 제목",
  previewImg:
    "https://i.namu.wiki/i/U_Z88LvTS9NYuuKFRvLXJ0xa0h4h7sARaA-lP-FaPYWHophKDSUTGWtjGNtv198ixmw_SPx2MYb8EqN9upOm3rYdKXvdk24bP3FHi3TfAHdYLOdmpQGyYF5EYn4uYQFxC0n4BFKiB5dVzs0nqHlL3g.webp",
  date: "2024-06-27",
  scrap: false,
};

const MAIN_2: React.FC = () => {
  const [userData, setUserData] = useState(dummyUserData); // 사용자 데이터 상태
  const [filteredTopics, setFilteredTopics] = useState<any[]>([]); // 필터링된 토픽 상태
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isRedirectOpen, setIsRedirectOpen] = useState(false);

  const handleHeadlineClick = (articleId: number) => {
    navigate(`/articles/${articleId}`);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRedirectOpen() {
    setIsOpen(false);
    setIsRedirectOpen(true);
  }

  function handleRedirectClose() {
    setIsRedirectOpen(false);
  }

  function handleSave(folderName: string) {
    console.log("Folder saved:", folderName);
  }

  useEffect(() => {
    setUserData(dummyUserData); // 실제로는 서버에서 데이터 가져오는 로직
  }, []);

  useEffect(() => {
    if (userData.media) {
      const filtered = topics.filter((topic) =>
        userData.media.includes(topic.name)
      );
      setFilteredTopics(filtered);
    }
  }, [userData]);

  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  const renderInterestTopics = () => {
    return interestsTopics
      .filter((topic) => userData.interests.includes(topic.name))
      .map((topic) => (
        <div className="main-table-cell-3" key={topic.num}>
          <div className="main-table-text-container">
            <img
              src={topic.icon}
              alt={topic.eng}
              className="main-question-icon"
            />
            <p className="main-table-text">{topic.eng}</p>
          </div>
        </div>
      ));
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
            <p className="main-left-text-main">{dummyMainNews.title}</p>
            <p className="main-left-text">
              {dummyMainNews.date}
              <img
                src={PENCIL}
                alt="Edit"
                className="main-pencil-icon-left"
                onClick={openModal}
              />
            </p>
            <img
              src={dummyMainNews.previewImg}
              alt="Example"
              className="main-left-image"
            />
          </div>
          <div className="main-right-box">
            <div className="main-header-buttons">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, index) => {
                  const iconIndex = topics.findIndex(
                    (t) => t.name === topic.name
                  );
                  if (iconIndex >= 0 && iconIndex < newsIcons.length) {
                    return (
                      <button
                        key={topic.name}
                        className="main-news-button"
                        onClick={() => handleButtonClick(topic.path)}
                      >
                        <img
                          src={newsIcons[iconIndex]}
                          alt={`News Icon ${iconIndex}`}
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
            {dummyHeadlines.map((headline) => (
              <button
                key={headline.articleId}
                className="main-headline-button"
                onClick={() => handleHeadlineClick(headline.articleId)}
              >
                {headline.title}
              </button>
            ))}
          </div>
        </div>
        <div className="main-table-container">
          <div className="main-table-row main-table-header">
            {renderInterestTopics()}
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
                  <img
                    src={PENCIL}
                    alt="Edit"
                    className="main-pencil-icon"
                    onClick={openModal}
                  />
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
                  <img
                    src={PENCIL}
                    alt="Edit"
                    className="main-pencil-icon"
                    onClick={openModal}
                  />
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
      <SaveScrap
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
        onRedirectOpen={handleRedirectOpen}
      />
      <RedirectModal
        isOpen={isRedirectOpen}
        onRequestClose={handleRedirectClose}
      />
    </div>
  );
};

export default MAIN_2;
