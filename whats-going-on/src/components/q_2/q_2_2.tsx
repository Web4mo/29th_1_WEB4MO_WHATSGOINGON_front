import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_2: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<{ num: string, path: string }[]>(() => {
    const savedTopics = localStorage.getItem('selectedTopics');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  const topics = [
    { name: '금융/증권', detail: '중기 대출금리 5분기 연속 금리 5%대...\n파산·개인회생 신청 급증', path: '/q_2/q_3' },
    { name: '산업', detail: '택시기사가 꼽은 전기차 1위는 \'아이오닉5\'\n반도체 생명 ‘초순수’ 국산화… 韓 성장에 日도 경계', path: '/q_2/q_3' },
    { name: '부동산', detail: '서울 아파트 가격\n10주 연속 오름세', path: '/q_2/q_3' },
    { name: '글로벌 경제', detail: '미국 더 주저앉은 GDP...\n증폭되는 스테그 플레이션 우려', path: '/q_2/q_3' },
    { name: '생활 경제', detail: '우유 원윳값 또 오를까...\n다음 달 11일부터 가격협상', path: '/q_2/q_3' }
  ];

  useEffect(() => {
    const paths = location.state?.paths || [];
    const currentIndex = location.state?.index || 0;
    if (paths.length > 0) {
      const currentPath = paths[currentIndex];
      if (currentPath !== '/q_2/q_2_2') {
        navigate(currentPath);
      }
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
        <h3>경제 분야를 선택하셨네요!<br />더 관심 있는 키워드가 있을까요?</h3>    
        <button className="q2-prev-button" onClick={handlePrev}>&lt;</button>  
        <button className="q2-next-button" onClick={handleNext}>&gt;</button>
      </div>
      <div className="q2-content-button-6">
        <div className="q2-button-grid-detail-6">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button-detail-6 ${selectedTopics.some(t => t.path === topic.path) ? 'selected' : ''}`}
              onClick={() => handleClick(topic.path)}
            >
              <div className="q2-name-6">{topic.name}</div>
              <div className="q2-separator-6"></div>
              <div className="q2-detail-6">
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
