import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./q_2.css";
import WGO from "../../assets/icons/whats_going_on.svg";

const Q_2_2: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const statePaths = location.state?.paths || [];
    setPaths(statePaths);
    setCurrentIndex(location.state?.index || 0);
  }, [location.state]);

  const topics = [
    {
      name: "금융/증권",
      detail: "중기 대출금리 5분기 연속 금리 5%대...\n파산·개인회생 신청 급증",
      path: "/q_2/q_3",
    },
    {
      name: "산업",
      detail:
        "택시기사가 꼽은 전기차 1위는 '아이오닉5'\n반도체 생명 ‘초순수’ 국산화… 韓 성장에 日도 경계",
      path: "/q_2/q_3",
    },
    {
      name: "부동산",
      detail: "서울 아파트 가격\n10주 연속 오름세",
      path: "/q_2/q_3",
    },
    {
      name: "글로벌 경제",
      detail: "미국 더 주저앉은 GDP...\n증폭되는 스테그 플레이션 우려",
      path: "/q_2/q_3",
    },
    {
      name: "생활 경제",
      detail: "우유 원윳값 또 오를까...\n다음 달 11일부터 가격협상",
      path: "/q_2/q_3",
    },
  ];

  const handleButtonClick = (topicName: string) => {
    setSelectedTopics((prevSelected) => {
      const isSelected = prevSelected.includes(topicName);
      const updatedSelected = isSelected
        ? prevSelected.filter((name) => name !== topicName)
        : [...prevSelected, topicName];

      return updatedSelected;
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
          경제 분야를 선택하셨네요!
          <br />더 관심 있는 키워드가 있을까요?
        </h3>
        <button className="q2-prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="q2-next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="q2-content-button-6">
        <div className="q2-button-grid-detail-6">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button-detail-6 ${selectedTopics.includes(topic.name) ? "selected" : ""}`}
              onClick={() => handleButtonClick(topic.name)}
              style={{
                opacity:
                  selectedTopics.length === 0 ||
                  selectedTopics.includes(topic.name)
                    ? 1
                    : 0.5,
              }}
            >
              <div className="q2-name-6">{topic.name}</div>
              <div className="q2-separator-6"></div>
              <div className="q2-detail-6">
                {topic.detail.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q_2_2;
