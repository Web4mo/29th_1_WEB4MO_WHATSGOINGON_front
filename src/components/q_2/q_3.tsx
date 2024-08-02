import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./q_3.css";
import WGO from "../../assets/icons/whats_going_on.svg";

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

const Q_3: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = useCallback((topicName: string) => {
    setSelectedTopics((prevSelected) => {
      const isSelected = prevSelected.includes(topicName);
      const updatedSelected = isSelected
        ? prevSelected.filter((name) => name !== topicName)
        : [...prevSelected, topicName];

      if (updatedSelected.length > 3) {
        setShowAlert(true);
        return prevSelected;
      }

      return updatedSelected;
    });
  }, []);

  useEffect(() => {
    if (showAlert) {
      alert("최대 3개까지 선택할 수 있습니다.");
      setShowAlert(false);
    }
  }, [showAlert]);

  const handleNext = async () => {
    try {
      // 서버에서 사용자 데이터 가져오기
      const response = await axios.get("url 넣기");
      const { data } = response;

      // 관심사 개수에 따라서 페이지 이동
      const interestsCount = data.data.interests.length;
      let nextPath = "/login"; // 기본 경로

      switch (interestsCount) {
        case 2:
          nextPath = "/main/main_2";
          break;
        case 3:
          nextPath = "/main/main_3";
          break;
        case 4:
          nextPath = "/main/main_4";
          break;
        default:
          nextPath = "/login"; // 기본 경로
      }

      // 서버에 PATCH 요청 보내기
      await axios.patch("https://example.com/api/user", {
        media: selectedTopics,
      });

      // 성공 시 페이지로 이동
      navigate(nextPath);
    } catch (error) {
      console.error("Failed to update media:", error);
      alert("관심 언론사 업데이트에 실패했습니다.");
    }
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div className="q3-app-container">
      <div className="q3-heading">
        <h6>
          <img src={WGO} alt="WGO" />
          &nbsp;What's going on
        </h6>
      </div>
      <div className="q3-content">
        <h5>관심 언론사 선택하기</h5>
        <div className="q3-bar"></div>
        <h1>Q. 3</h1>
        <h3>관심 있는 뉴스사를 골라주세요! (1-3개)</h3>
        <p>
          언론사 선택은 선택 사항이며, 원하지 않으실 경우 이 단계를 건너뛰실 수
          있습니다.
        </p>
        <button className="q3-prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="q3-next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="q3-content-button">
        <div className="q3-button-grid-news">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q3-news-button ${selectedTopics.includes(topic.name) ? "selected" : ""}`}
              onClick={() => handleButtonClick(topic.name)}
            >
              <img
                src={newsIcons[index]}
                alt={topic.name}
                className="q3-news-icon"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q_3;
