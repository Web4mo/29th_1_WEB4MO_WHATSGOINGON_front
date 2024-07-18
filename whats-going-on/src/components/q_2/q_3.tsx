import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_3: React.FC = () => {
  const navigate = useNavigate();

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

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="app-container">
      <div className="heading">
        <h6>
          <img src={WGO} alt="WGO" />&nbsp;What's going on
        </h6>
      </div>
      <div className="content">
        <h5>관심 분야 테스트</h5>
        <div className="bar"></div>
        <h1>Q. 3</h1>
        <h3>관심 있는 뉴스사를 골라주세요.</h3>    
        <button className="prev-button">&lt;</button> 
        <button className="next-button">&gt;</button>
        <div className="button-grid-news">
          {topics.map((topic, index) => (
            <button key={index} className="topic-button" onClick={() => handleClick(topic.path)}>
              {topic.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q_3;
