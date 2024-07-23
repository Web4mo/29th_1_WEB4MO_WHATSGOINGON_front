import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './q_3.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const newsIcons = [
    require('../../assets/icons/news/news_0.svg').default,
    require('../../assets/icons/news/news_1.svg').default,
    require('../../assets/icons/news/news_2.svg').default,
    require('../../assets/icons/news/news_3.svg').default,
    require('../../assets/icons/news/news_4.svg').default,
    require('../../assets/icons/news/news_5.svg').default,
    require('../../assets/icons/news/news_6.svg').default,
    require('../../assets/icons/news/news_7.svg').default,
    require('../../assets/icons/news/news_8.svg').default,
    require('../../assets/icons/news/news_9.svg').default,
    require('../../assets/icons/news/news_10.svg').default,
    require('../../assets/icons/news/news_11.svg').default,
    require('../../assets/icons/news/news_12.svg').default,
    require('../../assets/icons/news/news_13.svg').default,
    require('../../assets/icons/news/news_14.svg').default,
    require('../../assets/icons/news/news_15.svg').default,
    require('../../assets/icons/news/news_16.svg').default,
    require('../../assets/icons/news/news_17.svg').default,
    require('../../assets/icons/news/news_18.svg').default,
    require('../../assets/icons/news/news_19.svg').default,
    require('../../assets/icons/news/news_20.svg').default,
    require('../../assets/icons/news/news_21.svg').default,
    require('../../assets/icons/news/news_22.svg').default,
    require('../../assets/icons/news/news_23.svg').default,
    require('../../assets/icons/news/news_24.svg').default
];

const topics = [
    { name: '경향신문', path: '/cal/calendar' },
    { name: '국민일보', path: '/q_2/test_result' },
    { name: '내일신문', path: '/q_2/test_result' },
    { name: '동아일보', path: '/q_2/test_result' },
    { name: '문화일보', path: '/q_2/test_result' },
    { name: '서울신문', path: '/q_2/test_result' },
    { name: '세계일보', path: '/q_2/test_result' },
    { name: '조선일보', path: '/q_2/test_result' },
    { name: '중앙일보', path: '/q_2/test_result' },
    { name: '한겨레', path: '/q_2/test_result' },
    { name: '한국일보', path: '/q_2/test_result' },
    { name: '매일경제', path: '/q_2/test_result' },
    { name: '머니투데이', path: '/q_2/test_result' },
    { name: '서울경제', path: '/q_2/test_result' },
    { name: '아시아경제', path: '/q_2/test_result' },
    { name: '아주경제', path: '/q_2/test_result' },
    { name: '파이낸셜뉴스', path: '/q_2/test_result' },
    { name: '한국경제', path: '/q_2/test_result' },
    { name: '헤럴드경제', path: '/q_2/test_result' },
    { name: '디지털타임스', path: '/q_2/test_result' },
    { name: '전자신문', path: '/q_2/test_result' },
    { name: '강원도민일보', path: '/q_2/test_result' },
    { name: '강원일보', path: '/q_2/test_result' },
    { name: '경기일보', path: '/q_2/test_result' },
    { name: '경남도민일보', path: '/q_2/test_result' }
];

const Q_3: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = useCallback((topicName: string) => {
    setSelectedTopics(prevSelected => {
      const isSelected = prevSelected.includes(topicName);
      const updatedSelected = isSelected
        ? prevSelected.filter(name => name !== topicName)
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
      alert('최대 3개까지 선택할 수 있습니다.');
      setShowAlert(false);
    }
  }, [showAlert]);

  const handleNext = () => {
    if (selectedTopics.length === 0) {
      alert('1개 이상 선택해야 합니다.');
    } else {
      navigate('/resulteunyoung');
    }
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div className="q3-app-container">
      <div className="q3-heading">
        <h6>
          <img src={WGO} alt="WGO" />&nbsp;What's going on
        </h6>
      </div>
      <div className="q3-content">
        <h5>관심 언론사 선택하기</h5>
        <div className="q3-bar"></div>
        <h1>Q. 3</h1>
        <h3>관심 있는 뉴스사를 골라주세요! (1-3개)</h3>    
        <p>언론사 선택은 선택 사항이며, 원하지 않으실 경우 이 단계를 건너뛰실 수 있습니다.</p>
        <button className="q3-prev-button" onClick={handlePrev}>&lt;</button> 
        <button className="q3-next-button" onClick={handleNext}>&gt;</button>
      </div>
      <div className="q3-content-button">
        <div className="q3-button-grid-news">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q3-news-button ${selectedTopics.includes(topic.name) ? 'selected' : ''}`}
              onClick={() => handleButtonClick(topic.name)}
            >
              <img src={newsIcons[index]} alt={topic.name} className="q3-news-icon" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q_3;
