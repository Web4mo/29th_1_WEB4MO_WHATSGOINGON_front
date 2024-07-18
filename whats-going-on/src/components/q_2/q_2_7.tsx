import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_7: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '방송, TV', path: '/q_2/q_3' },
    { name: '드라마', path: '/q_2/q_3' },
    { name: '뮤직', path: '/q_2/q_3' },
    { name: '해외 연예', path: '/q_2/q_3' }
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
        <h1>Q. 2</h1>
        <h3>연예 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
        <button className="prev-button">&lt;</button> 
        <button className="next-button">&gt;</button>
        <div className="button-grid-4">
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

export default Q_2_7;
