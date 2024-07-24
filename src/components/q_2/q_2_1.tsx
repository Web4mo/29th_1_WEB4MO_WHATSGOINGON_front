import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './q_2.css';
import WGO from '../../assets/icons/whats_going_on.svg';

const Q_2_1: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const statePaths = location.state?.paths || [];
    setPaths(statePaths);
    setCurrentIndex(location.state?.index || 0);
  }, [location.state]);

  const topics = [
    { name: '건강정보', detail: '숨 가쁜 직장인들...\n오래 앉아 있어서 그렇다고?', path: '/q_2/q_3' },
    { name: '도로.교통', detail: '\'산사태\' 보은 봉계터널 1년여 만에\n양방향 개통... 31일 오후 3시부터', path: '/q_2/q_3' },
    { name: '여행.레저', detail: '춘천시 \'문화도시 박람회\' 개막...\n4일간 볼거리·체험 풍성', path: '/q_2/q_3' },
    { name: '음식.맛집', detail: '불닭볶음면은 어떻게 세계인을\n사로잡았나... 외신도 주목한 매운맛', path: '/q_2/q_3' },
    { name: '패션.뷰티', detail: '\'퍼스널 컬러\'로 MZ세대\n사로잡는 뷰티업계', path: '/q_2/q_3' },
    { name: '수정', detail: '더 넓어지고 깊어진\n\'세계 박물관 한국실\'', path: '/q_2/q_3' }
  ];

  const handleButtonClick = (topicName: string) => {
    setSelectedTopics(prevSelected => {
      const isSelected = prevSelected.includes(topicName);
      const updatedSelected = isSelected
        ? prevSelected.filter(name => name !== topicName)
        : [...prevSelected, topicName];

      return updatedSelected;
    });
  };

  const handleNext = () => {
    if (selectedTopics.length === 0) {
      alert('1개 이상 선택해야 합니다.');
    } else {
      const nextIndex = currentIndex + 1;
      if (nextIndex < paths.length) {
        navigate(paths[nextIndex], { state: { paths, index: nextIndex } });
      } else {
        navigate('/q_2/q_3');
      }
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      navigate(paths[prevIndex], { state: { paths, index: prevIndex } });
    } else {
      navigate('/');
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
        <h3>생활 문화 분야를 선택하셨네요!<br />더 관심 있는 키워드가 있을까요?</h3>    
        <button className="q2-prev-button" onClick={handlePrev}>&lt;</button>  
        <button className="q2-next-button" onClick={handleNext}>&gt;</button>
      </div>
      <div className="q2-content-button-6">
        <div className="q2-button-grid-detail-6">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`q2-topic-button-detail-6 ${selectedTopics.includes(topic.name) ? 'selected' : ''}`}
              onClick={() => handleButtonClick(topic.name)}
              style={{ opacity: selectedTopics.length === 0 || selectedTopics.includes(topic.name) ? 1 : 0.5 }}
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

export default Q_2_1;
