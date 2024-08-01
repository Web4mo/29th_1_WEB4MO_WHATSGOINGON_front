import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./q_2.css";
import WGO from "../../assets/icons/whats_going_on.svg";

const Q_2_5: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const topics = [
    { name: "아시아, 호주", path: "/q_2/q_3" },
    { name: "미국, 중남미", path: "/q_2/q_3" },
    { name: "유럽", path: "/q_2/q_3" },
    { name: "중동, 아프리카", path: "/q_2/q_3" },
  ];

  useEffect(() => {
    const statePaths = location.state?.paths || [];
    setPaths(statePaths);
    setCurrentIndex(location.state?.index || 0);
  }, [location.state]);

  const handleButtonClick = (topicName: string) => {
    setSelectedTopics((prevSelected) => {
      const isSelected = prevSelected.includes(topicName);
      const updatedSelection = isSelected
        ? prevSelected.filter((name) => name !== topicName)
        : [...prevSelected, topicName];

      return updatedSelection;
    });
  };

  const handleNext = () => {
    if (selectedTopics.length === 0) {
      alert("1개 이상 선택해야 합니다.");
    } else {
      const nextIndex = currentIndex + 1;
      if (nextIndex < paths.length) {
        navigate(paths[nextIndex], { state: { paths, index: nextIndex } });
      } else {
        navigate("/q_2/q_3");
      }
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      navigate(paths[prevIndex], { state: { paths, index: prevIndex } });
    } else {
      navigate("/q_1/q_1");
    }
  };

  return (
    <div className="q2-app-container">
      <div className="q2-heading">
        <h6>
          <img src={WGO} alt="WGO" />
          &nbsp;What's going on
        </h6>
      </div>
      <div className="q2-content">
        <h5>관심 분야 테스트</h5>
        <div className="q2-bar"></div>
        <h1>Q. 2</h1>
        <h3>
          세계 분야를 선택하셨네요!
          <br />더 관심 있는 키워드가 있을까요?
        </h3>
        <button className="q2-prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="q2-next-button" onClick={handleNext}>
          &gt;
        </button>
        <div className="q2-button-grid-4">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button ${selectedTopics.includes(topic.name) ? "selected" : ""}`}
              onClick={() => handleButtonClick(topic.name)}
              style={{
                backgroundColor: selectedTopics.includes(topic.name)
                  ? "#e9e9e9"
                  : "white",
              }}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q_2_5;
