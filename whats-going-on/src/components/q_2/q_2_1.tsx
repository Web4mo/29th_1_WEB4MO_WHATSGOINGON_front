import React from 'react';
import { useNavigate } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_1: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { name: '건강정보', detail: '숨 가쁜 직장인들...\n오래 앉아 있어서 그렇다고?', path: '/q_2/q_3' },
    { name: '음식.맛집', detail: '불닭볶음면은 어떻게 세계인을\n사로잡았나... 외신도 주목한 매운맛', path: '/q_2/q_3' },
    { name: '패션.뷰티', detail: '\'퍼스널 컬러\'로 MZ세대\n사로잡는 뷰티업계', path: '/q_2/q_3' },
    { name: '도로.교통', detail: '\'산사태\' 보은 봉계터널 1년여 만에\n양방향 개통... 31일 오후 3시부터', path: '/q_2/q_3' }
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
        <h3>생활 문화 분야를 선택하셨네요!<br></br>더 관심 있는 키워드가 있을까요?</h3>    
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

export default Q_2_1;
