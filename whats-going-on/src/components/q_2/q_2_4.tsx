import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_4: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTopics, setSelectedTopics] = useState<{ num: string, path: string }[]>(() => {
    const savedTopics = localStorage.getItem('selectedTopics');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  const topics = [
    { name: '사건사고', detail: '“민원에 불친절” 아파트 경비원 흉기로 찌른 20대 입주민/\n\'삼성전자 기밀\' 유출해 미서 소송 .. 전직 부사장 구속', path: '/q_2/q_3' },
    { name: '교육', detail: '내년 무전공 선발 비율 6.6% -28.6% 확대/\n5월 학력평가, 수학 어렵고 국어 평이했다..', path: '/q_2/q_3' },
    { name: '언론', detail: '헌재 "KBS 수신료.전기요금 분리 징수 시행령 합헌/\n동 안내면 스포츠 못보는 OTT 시대 .. 80% 부정적', path: '/q_2/q_3' },
    { name: '환경', detail: '\'기후법\' 10개 통과 땐 온실가스 ‘2030 목표 ‘달성/\n충남 서해안에 야광충 출몰', path: '/q_2/q_3' },
    { name: '인권.복지', detail: '인권위, \'얼차려 사망\' 훈련병 직권 조사 검토/\n대법원, 충남 학생인권조례 폐지 집행정지 신청 인용', path: '/q_2/q_3' },
    { name: '식품.의료', detail: '대한민국 의료는 죽었다/“늘 먹던 생리통 한약, \n가격 왜 이래?”…내일부터 달라진다는데', path: '/q_2/q_3' }
  ];

  useEffect(() => {
    const paths = location.state?.paths || [];
    const currentIndex = location.state?.index || 0;
    if (paths.length > 0) {
      const currentPath = paths[currentIndex];
      if (currentPath !== '/q_2/q_2_4') {
        navigate(currentPath);
      }
    }
  }, [location, navigate]);

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
        <h3>사회 분야를 선택하셨네요!<br />더 관심 있는 키워드가 있을까요?</h3>    
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

export default Q_2_4;
