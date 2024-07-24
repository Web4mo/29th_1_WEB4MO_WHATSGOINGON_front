import React from 'react';
import { useNavigate } from 'react-router-dom';
import WGO from '../../assets/icons/whats_going_on.svg';
import TITLE from '../../assets/icons/main_title.svg';
import IMG from '../../assets/icons/img.jpg';
import PENCIL from '../../assets/icons/pencil.svg';
import Q10 from '../../assets/icons/q_1_0.svg';
import Q12 from '../../assets/icons/q_1_2.svg';
import Q13 from '../../assets/icons/q_1_3.svg';
import './main.css';

const newsIcons = [
    require('../../assets/icons/news/news_0.svg').default,
    require('../../assets/icons/news/news_1.svg').default,
    require('../../assets/icons/news/news_2.svg').default,
    require('../../assets/icons/news/news_3.svg').default,
    require('../../assets/icons/news/news_4.svg').default,
    require('../../assets/icons/news/news_5.svg').default,
    require('../../assets/icons/news/news_6.svg').default,
    require('../../assets/icons/news/news_7.svg').default,
    require('../../assets/icons/news/news_8.svg').default,
    require('../../assets/icons/news/news_9.svg').default,
    require('../../assets/icons/news/news_10.svg').default,
    require('../../assets/icons/news/news_11.svg').default,
    require('../../assets/icons/news/news_12.svg').default,
    require('../../assets/icons/news/news_13.svg').default,
    require('../../assets/icons/news/news_14.svg').default,
    require('../../assets/icons/news/news_15.svg').default,
    require('../../assets/icons/news/news_16.svg').default,
    require('../../assets/icons/news/news_17.svg').default,
    require('../../assets/icons/news/news_18.svg').default,
    require('../../assets/icons/news/news_19.svg').default,
    require('../../assets/icons/news/news_20.svg').default,
    require('../../assets/icons/news/news_21.svg').default,
    require('../../assets/icons/news/news_22.svg').default,
    require('../../assets/icons/news/news_23.svg').default,
    require('../../assets/icons/news/news_24.svg').default
];

const MAIN_3: React.FC = () => {
    const navigate = useNavigate();
    const newsIndices: string[] = ["2", "5"];

    return (
        <div className="main-container">
            <div className="main-header">
                <img src={WGO} alt="WGO" className="main-wgo-image" />
                <div className="main-header-buttons">
                    <button className="main-logout-button" onClick={() => navigate('/logout')}>Log Out</button>
                    <button className="main-mypage-button" onClick={() => navigate('/mypage')}>My Page</button>
                </div>
            </div>
            <div className="main-content">
                <img src={TITLE} alt="TITLE" className="main-title-image" />
                <div className="main-content-container">
                    <div className="main-left-box">
                        <p className="main-left-text-main">안녕하세요 기사 제목입니다.</p>
                        <p className="main-left-text">2024.05.06<img src={PENCIL} alt="Edit" className="main-pencil-icon-left" /></p>
                        <img src={IMG} alt="Example" className="main-left-image" />
                    </div>
                    <div className="main-right-box">
                        <div className="main-header-buttons">
                            {newsIndices.length > 0 ? (
                                newsIndices.map((index) => {
                                    const iconIndex = parseInt(index, 10);
                                    if (iconIndex >= 0 && iconIndex < newsIcons.length) {
                                        return (
                                            <button key={index} className="main-news-button" onClick={() => navigate('/news')}>
                                                <img src={newsIcons[iconIndex]} alt={`News Icon ${index}`} className="main-news-icon" />
                                            </button>
                                        );
                                    }
                                    return null;
                                })
                            ) : (
                                <button className="main-disabled-button" disabled></button>
                            )}
                        </div>
                        <p className="main-HAD">How About This?</p>
                        <button className="main-headline-button">데일리 헤드라인 추천 기사입니다.</button>
                        <button className="main-headline-button">데일리 헤드라인 추천 기사입니다.</button>
                        <button className="main-headline-button">데일리 헤드라인 추천 기사입니다.</button>
                        <button className="main-headline-button">데일리 헤드라인 추천 기사입니다.</button>
                        <button className="main-headline-button">데일리 헤드라인 추천 기사입니다.</button>
                    </div>
                </div>
                <div className="main-table-container">
                    <div className="main-table-row main-table-header">
                        <div className="main-table-cell-3">
                            <div className="main-table-text-container">
                                <img src={Q10} alt="Politics" className="main-question-icon" />
                                <p className="main-table-text">Politics +</p>
                            </div>
                        </div>
                        <div className="main-table-cell-3">
                            <div className="main-table-text-container">
                                <img src={Q12} alt="Economy" className="main-question-icon" />
                                <p className="main-table-text">Economy +</p>
                            </div>
                        </div>
                        <div className="main-table-cell-3">
                            <div className="main-table-text-container">
                                <img src={Q13} alt="IT/Science" className="main-question-icon" />
                                <p className="main-table-text">IT/Science +</p>
                            </div>
                        </div>
                    </div>
                    {[...Array(3)].map((_, index) => (
                        <div className="main-table-row-3" key={index}>
                            <div className="main-table-cell-3">
                                <img src={IMG} alt="Example" className="main-fixed-size-image" />
                                <p className="main-table-text">안녕하세요 기사 제목입니다.</p>
                                <p className="main-table-subtext">
                                    2024.05.06
                                    <img src={PENCIL} alt="Edit" className="main-pencil-icon" />
                                </p>
                            </div>
                            <div className="main-table-cell-3">
                                <img src={IMG} alt="Example" className="main-fixed-size-image" />
                                <p className="main-table-text">안녕하세요 기사 제목입니다.</p>
                                <p className="main-table-subtext">
                                    2024.05.06
                                    <img src={PENCIL} alt="Edit" className="main-pencil-icon" />
                                </p>
                            </div>
                            <div className="main-table-cell-3">
                                <img src={IMG} alt="Example" className="main-fixed-size-image" />
                                <p className="main-table-text">안녕하세요 기사 제목입니다.</p>
                                <p className="main-table-subtext">
                                    2024.05.06
                                    <img src={PENCIL} alt="Edit" className="main-pencil-icon" />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MAIN_3;
