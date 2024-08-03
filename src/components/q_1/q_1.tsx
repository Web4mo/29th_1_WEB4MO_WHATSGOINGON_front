import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./q_1.css";
import WGO from "../../assets/icons/whats_going_on.svg";
import Q10 from "../../assets/icons/q_1_0.svg";
import Q11 from "../../assets/icons/q_1_1.svg";
import Q12 from "../../assets/icons/q_1_2.svg";
import Q13 from "../../assets/icons/q_1_3.svg";
import Q14 from "../../assets/icons/q_1_4.svg";
import Q15 from "../../assets/icons/q_1_5.svg";
import Q16 from "../../assets/icons/q_1_6.svg";
import Q17 from "../../assets/icons/q_1_7.svg";

const Q1: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<
    { num: string; path: string }[]
  >([]);

  const topics = [
    { num: "0", name: "정치", icon: Q10, path: "/q_2/q_2_0" },
    { num: "1", name: "생활 문화", icon: Q11, path: "/q_2/q_2_1" },
    { num: "2", name: "경제", icon: Q12, path: "/q_2/q_2_2" },
    { num: "3", name: "IT/과학", icon: Q13, path: "/q_2/q_2_3" },
    { num: "4", name: "사회", icon: Q14, path: "/q_2/q_2_4" },
    { num: "5", name: "세계", icon: Q15, path: "/q_2/q_2_5" },
    { num: "6", name: "스포츠", icon: Q16, path: "/q_2/q_2_6" },
    { num: "7", name: "연예", icon: Q17, path: "/q_2/q_2_7" },
  ];

  const handleTopicClick = (topic: { num: string; path: string }) => {
    setSelectedTopics((prevSelectedTopics) => {
      if (prevSelectedTopics.some((t) => t.num === topic.num)) {
        return prevSelectedTopics.filter((t) => t.num !== topic.num); // 이미 선택된 경우 선택 해제
      } else if (prevSelectedTopics.length < 4) {
        return [...prevSelectedTopics, topic]; // 선택된 주제가 4개 이하인 경우 선택 추가
      } else {
        return prevSelectedTopics; // 선택된 주제가 4개인 경우 아무 작업도 하지 않음
      }
    });
  };

  const handleNextClick = () => {
    if (selectedTopics.length >= 2 && selectedTopics.length <= 4) {
      navigate(selectedTopics[0].path, {
        state: { paths: selectedTopics.map((topic) => topic.path), index: 0 },
      });
    } else {
      alert("2-4개의 관심 분야를 선택해 주세요.");
    }
  };

  return (
    <div className="q1-app-container">
      <div className="q1-heading">
        <h6>
          <img src={WGO} alt="WGO" />
          &nbsp;What's going on
        </h6>
      </div>
      <div className="q1-content">
        <h5>관심 분야 테스트</h5>
        <div className="q1-bar"></div>
        <h1>Q. 1</h1>
        <h3>관심있는 분야를 선택해 주세요! (2-4개)</h3>
        <button className="q1-next-button" onClick={handleNextClick}>
          &gt;
        </button>
        <div className="q1-button-grid">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q1-topic-button ${selectedTopics.some((t) => t.num === topic.num) ? "selected" : ""}`}
              onClick={() => handleTopicClick(topic)}
            >
              <div className="q1-button-content">
                <img src={topic.icon} alt={`${topic.name} icon`} />
                <span>{topic.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q1;
