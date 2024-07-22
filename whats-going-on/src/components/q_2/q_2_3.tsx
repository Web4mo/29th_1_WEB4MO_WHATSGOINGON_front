import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_3: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '인터넷.SNS', detail: 'CJ온스타일 \'숏츠\'전략 통했다...\n고객수·조회수 다 잡아', path: '/q_2/q_3' },
    { name: '모바일', detail: '아이폰 내구성,\n이렇게 테스트한다', path: '/q_2/q_3' },
    { name: '보안.해킹', detail: '美 법무부, 봇넷 폐쇄...\n중국인 운영자 체포', path: '/q_2/q_3' },
    { name: '게임', detail: '숲에서는 WWE도 애니도 무료…\n이색 K팝 프로그램까지', path: '/q_2/q_3' }
  ];

  const handleClick = (path: string) => {
    navigate(path);
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
        <h3>IT/과학 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
        <button className="q2-prev-button">&lt;</button>  
        <button className="q2-next-button">&gt;</button>
        <div className="q2-button-grid-detail">
          {topics.map((topic, index) => (
            <button key={index} className="q2-topic-button-detail" onClick={() => handleClick(topic.path)}>
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

export default Q_2_3;
