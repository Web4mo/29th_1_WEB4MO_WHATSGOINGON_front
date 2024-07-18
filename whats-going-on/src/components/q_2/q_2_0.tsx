import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_0: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '국회.정당', detail: 'OO당 연급개혁 주장하며\n민생 주도권 잡나', path: '/q_2/q_3' },
    { name: '북한', detail: '北, GPS교란 - 미사일 발사... \n물풍선 이어 연쇄 도발', path: '/q_2/q_3' },
    { name: '국방.외교', detail: '한일중FTA 협상시기 미정,\n?.. "방법론부터 협의"', path: '/q_2/q_3' },
    { name: '행정', detail: '내달 3일 광주시,\n환경 보호 사업 도입 예정', path: '/q_2/q_3' }
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  const handlePrev = () => {
    navigate('/q_1');
  };

  const handleNext = () => {
    navigate('/q_2_1');
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
        <h1>Q. 2</h1>
        <h3>정치 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
        <button className="prev-button" onClick={handlePrev}>&lt;</button>  
        <button className="next-button" onClick={handleNext}>&gt;</button>
        <div className="button-grid-detail">
          {topics.map((topic, index) => (
            <button key={index} className="topic-button-detail" onClick={() => handleClick(topic.path)}>
              <div className="name">{topic.name}</div>
              <div className="separator"></div>
              <div className="detail">
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
