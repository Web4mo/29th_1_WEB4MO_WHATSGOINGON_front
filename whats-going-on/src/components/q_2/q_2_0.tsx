import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_0: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<{ num: string, path: string }[]>(() => {
    const savedTopics = localStorage.getItem('selectedTopics');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  useEffect(() => {
    const paths = location.state?.paths || [];
    const currentIndex = location.state?.index || 0;
    if (paths.length > 0) {
      const currentPath = paths[currentIndex];
      if (currentPath !== '/q_2/q_2_0') {
        navigate(currentPath);
      }
    }
  }, [location, navigate]);

  const topics = [
    { name: '국회.정당', detail: 'OO당 연급개혁 주장하며\n민생 주도권 잡나', path: '/q_2/q_3' },
    { name: '북한', detail: '北, GPS교란 - 미사일 발사... \n물풍선 이어 연쇄 도발', path: '/q_2/q_3' },
    { name: '국방.외교', detail: '한일중FTA 협상시기 미정,\n왜?.. "방법론부터 협의"', path: '/q_2/q_3' },
    { name: '행정', detail: '내달 3일 광주시,\n환경 보호 사업 도입 예정', path: '/q_2/q_3' }
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  const handlePrev = () => {
    navigate(location.state?.paths[location.state?.index - 1] || '/');
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
        <h3>정치 분야를 선택하셨네요!<br />더 관심 있는 키워드가 있을까요?</h3>    
        <button className="q2-prev-button" onClick={handlePrev}>&lt;</button>  
        <button className="q2-next-button" onClick={handleNext}>&gt;</button>
      </div>
      <div className="q2-content-button">
        <div className="q2-button-grid-detail">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button-detail ${selectedTopics.some(t => t.path === topic.path) ? 'selected' : ''}`}
              onClick={() => handleClick(topic.path)}
            >
              <div className="q2-name">{topic.name}</div>
              <div className="q2-separator"></div>
              <div className="q2-detail">
                {topic.detail.split('\n').map((line, i) => (
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

export default Q_2_0;
