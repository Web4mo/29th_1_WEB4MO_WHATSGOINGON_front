import React, { useState } from "react";
import { Icon1, Logo2 } from "assets/export";
import { useNavigate } from "react-router-dom";
import FileSave from "components/scrapPoppup/ScrapFileSave";
import FileDelete from "components/scrapPoppup/ScrapFileDelete";
import {
  ScrapFileDelete,
  ScrapFileHome,
  ScrapFileArticle,
  ScrapSummarize,
} from "assets/export";
import "./ScrapPage.css";

const dummyScrap = {
  title: "우크라이나, 크름반도 배치 러시아 킬로급 잠수함 격침",
  category: "정치-국방",
  date: "2024.08.04",
  newsLink: "https://n.news.naver.com/mnews/article/003/0012707823?sid=104",
  scrap: true,
  img: "example url",
  contents: `[서울=뉴시스]이재준 기자 = 우크라이나군은 3일(현지시각) 러시아가 합병한 크름반도에 배치한 잠수함을 격침했다고 발표했다.

BBC와 폴리티코 등에 따르면 우크라이나군 참모본부는 페이스북을 통해 크름반도 세바스토폴항을 전날 공격해 러시아 흑해함대 소속 B-237 잠수함을 침몰시켰다고 밝혔다.

참모본부는 격침한 러시아 잠수함(Rostov-on-Don)이 작년 9월 우크라이나군의 미사일 공격을 받아 파손됐다가 수리한 것이라고 전했다.

킬로급인 잠수함은 2014년 취역했으며 순항미사일을 발사할 수 있는 능력을 갖추고 있는데 우크라이나군 미사일을 맞고 바다로 가라앉았다고 한다.

잠수함은 보수 후 시험항해를 하던 중에 우크라이나군이 발사한 미사일에 맞았다고 참모본부는 소개했다.

침몰 잠수함은 칼리버 순항미사일을 쏘아올릴 수 있는 흑해함대 잠수함 4척 가운데 하나다.

이에 대해 러시아 국방부는 아직 확인하지 않고 있다. B-237 잠수함은 건조비가 3억 달러(약 4085억원)에 이른다.

참모본부는 B-237 잠수함을 격침함으로써 러시아 함대가 흑해의 우크라이나 수역에서는 더이상 안전한 곳이 없다는 사실을 다시 한번 입증했다고 강조했다.

또한 참모본부는 이번 공격으로 크름반도에 있는 방공 미사일 시스템도 파괴했다고 설명했다.

참모본부는 크름반도로 날아오는 미사일의 요격을 맡은 S-400 방공 시스템 4개를 무력화했다고 확인했다.`,
  aiSummary:
    "우크라이나군이 크림반도 세바스토폴항에서 러시아 흑해함대 소속 B-237 잠수함을 미사일로 공격해 침몰시켰으며, 이 잠수함은 칼리버 순항미사일을 발사할 수 있는 킬로급 잠수함으로, 수리 후 시험 항해 중이었다고 밝혔습니다. ",
};

const ScrapPage: React.FC = () => {
  const [memo, setMemo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showSaveCheck, setShowSaveCheck] = useState<boolean>(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // 메모 저장 로직 추가
    setIsEditing(false);
  };

  const handleHomeClick = () => {
    setShowSaveCheck(true);
  };

  const handleConfirmHome = () => {
    navigate("/main/main_3");
  };

  const handleCancelSave = () => {
    setShowSaveCheck(false);
  };

  const handleDeleteClick = () => {
    setShowDelete(true);
  };

  const handleConfirmDelete = () => {
    // 스크랩 파일 삭제 로직 추가
    setShowDelete(false);
  };

  const handleCancelDelete = () => {
    setShowDelete(false);
  };

  const handleSummaryClick = () => {
    setShowSummary(!showSummary);
  };

  const handleViewArticleClick = () => {
    // newsLink로 이동
    window.open(dummyScrap.newsLink, "_blank");
  };

  return (
    <div className="scrap-container">
      <div className="scrap-header">
        <Logo2 className="headerLogo" />
        <div className="header-buttons">
          <button className="delete-button" onClick={handleDeleteClick}>
            <ScrapFileDelete />
          </button>
          <button className="home-button" onClick={handleHomeClick}>
            <ScrapFileHome />
          </button>
        </div>
      </div>
      <main className="scrap-content">
        <div className="article-section">
          <button
            className="view-article-button"
            onClick={handleViewArticleClick}
          >
            <ScrapFileArticle style={{ width: 130 }} />
          </button>
          <div className="article-meta">
            <Icon1 />
            <span className="category">{dummyScrap.category}</span>
            <span className="date">{dummyScrap.date}</span>
          </div>
          <div className="article-content">
            <p className="article-detail">{dummyScrap.contents}</p>
          </div>
        </div>
        <div className="memo-section">
          <textarea
            className="memo-textarea"
            value={memo}
            onChange={handleMemoChange}
            placeholder="메모를 작성하세요..."
            readOnly={!isEditing}
          ></textarea>
          <div className="memo-buttons">
            {isEditing ? (
              <button className="edit-memo-button" onClick={handleSaveClick}>
                메모 저장
              </button>
            ) : (
              <button className="edit-memo-button" onClick={toggleEditing}>
                메모 수정하기
              </button>
            )}
          </div>
          <button className="ai-summary-button" onClick={handleSummaryClick}>
            <ScrapSummarize style={{ width: 130 }} />
          </button>
          {showSummary && (
            <div className="ai-summary-content">{dummyScrap.aiSummary}</div>
          )}
        </div>
      </main>
      <FileDelete
        isOpen={showDelete}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <FileSave
        isOpen={showSaveCheck}
        onClose={handleCancelSave}
        onConfirm={handleConfirmHome}
      />
    </div>
  );
};

export default ScrapPage;
