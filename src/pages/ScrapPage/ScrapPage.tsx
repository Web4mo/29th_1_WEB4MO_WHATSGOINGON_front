import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Logo2 } from "assets/export";
import "./ScrapPage.css";

const ScrapPage: React.FC = () => {
  const { folder } = useParams<{ folder: string }>();
  const [memo, setMemo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [Content, setContent] = useState<string>("");

  useEffect(() => {
    // folder 파라미터에 따라 데이터 가져오기
    // 로직 추가
    if (folder) {
      setContent(`폴더: ${folder} 내용`);
    }
  }, [folder]);

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveMemo = () => {
    alert("메모가 저장되었습니다.");
    setIsEditing(false);
  };

  return (
    <div className="container">
      <header className="header">
        <Logo2 className="headerLogo" />
        <button className="delete-button">Delete</button>
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </header>
      <main className="main-content">
        <div className="article-section">
          <button className="view-article-button">기사 원문 보기</button>
          <div className="article-meta">
            <span className="category">(기사 분야)</span>
            <span className="date">(기사 작성 날짜)</span>
          </div>
          <div className="article-content">
            <p className="article-detail">{Content}</p>
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
              <button className="edit-memo-button" onClick={saveMemo}>
                메모 저장
              </button>
            ) : (
              <button className="edit-memo-button" onClick={toggleEditing}>
                메모 수정하기
              </button>
            )}
          </div>
          <button className="ai-summary-button">AI 요약</button>
          <div className="ai-summary-content">(요약된 내용)</div>
        </div>
      </main>
    </div>
  );
};

export default ScrapPage;
