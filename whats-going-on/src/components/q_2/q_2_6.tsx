import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_6: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTopics, setSelectedTopics] = useState<string[]>(() => {
    const savedTopics = localStorage.getItem('selectedTopics');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  const topics = [
    { name: '야구', path: '/q_2/q_3' },
    { name: '해외 야구', path: '/q_2/q_3' },
    { name: '축구', path: '/q_2/q_3' },
    { name: '해외 축구', path: '/q_2/q_3' },
    { name: '농구', path: '/q_2/q_3' },
    { name: '배구', path: '/q_2/q_3' }
  ];

  useEffect(() => {
    // 페이지 전환 시 상태 유지
    const currentIndex = location.state?.index || 0;
    const paths = location.state?.paths || [];
    if (paths.length > 0 && paths[currentIndex] !== '/q_2/q_2_6') {
      navigate(paths[currentIndex]);
    }
  }, [location.state, navigate]);

  const handleClick = (path: string) => {
    navigate(path);
  };

  const handlePrev = () => {
    const prevIndex = (location.state?.index || 0) - 1;
    if (prevIndex >= 0) {
      navigate(location.state.paths[prevIndex], { state: { paths: location.state.paths, index: prevIndex } });
    } else {
      navigate('/');
    }
  };

  const handleNext = () => {
    const nextIndex = (location.state?.index || 0) + 1;
    if (nextIndex < location.state?.paths.length) {
      navigate(location.state.paths[nextIndex], { state: { paths: location.state.paths, index: nextIndex } });
    } else {
      navigate('/q_2/q_3');
    }
  };

  return (
    <div className="q2-app-container">
      <div className="q2-heading">
        <h6>
          <img src={WGO} alt="WGO" />&nbsp;What's going on
        </h6>
      </div>
      <div className="q2-content">
        <h5>관심 분야 테스트</h5>
        <div className="q2-bar"></div>
        <h1>Q. 2</h1>
        <h3>스포츠 분야를 선택하셨네요!<br />더 관심 있는 키워드가 있을까요?</h3>
        <button className="q2-prev-button" onClick={handlePrev}>&lt;</button> 
        <button className="q2-next-button" onClick={handleNext}>&gt;</button>
        <div className="q2-button-grid-6">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button ${selectedTopics.includes(topic.path) ? 'selected' : ''}`}
              onClick={() => {
                const updatedSelection = selectedTopics.includes(topic.path)
                  ? selectedTopics.filter(path => path !== topic.path)
                  : [...selectedTopics, topic.path];
                setSelectedTopics(updatedSelection);
                localStorage.setItem('selectedTopics', JSON.stringify(updatedSelection));
                handleClick(topic.path);
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

export default Q_2_6;
