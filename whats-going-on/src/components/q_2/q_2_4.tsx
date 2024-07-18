import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_4: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '교육', detail: '5월 학력평가, 수학 어렵고 국어 평이..\n선택과목 쏠림은 여전', path: '/q_2/q_3' },
    { name: '사건사고', detail: ' “민원에 불친절” 아파트 경비원\n흉기로 찌른 20대 입주민', path: '/q_2/q_3' },
    { name: '노동', detail: '미 신규 실업 수당 청구 21만 9천건..\n지난주 보다 3천건 증', path: '/q_2/q_3' },
    { name: '인권.복지', detail: '인권위, ‘얼차려 사망’\n훈련병 직권 조사 검토', path: '/q_2/q_3' }
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
        <h3>사회 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
        <button className="prev-button">&lt;</button>  
        <button className="next-button">&gt;</button>
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

export default Q_2_4;
