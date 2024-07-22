import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_2: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '금융', detail: '중기 대출금리 5분기 연속 금리 5%대\n... 파산·개인회생 신청 급증', path: '/q_2/q_3' },
    { name: '산업', detail: '택시기사가 꼽은\n전기차 1위는 \'아이오닉5\'', path: '/q_2/q_3' },
    { name: '글로벌 경제', detail: '미국 더 주저앉은 GDP...\n증폭되는 스테그 플레이션 우려', path: '/q_2/q_3' },
    { name: '생활 경제', detail: '우유 원윳값 또 오를까...\n다음 달 11일부터 가격협상', path: '/q_2/q_3' }
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
        <h3>경제 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
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

export default Q_2_2;
