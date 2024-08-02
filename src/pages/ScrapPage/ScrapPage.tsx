import React, { useState } from "react";
import { Logo2 } from "assets/export";
import { useNavigate } from "react-router-dom";
import FileSave from "components/scrapPoppup/ScrapFileSave";
import FileDelete from "components/scrapPoppup/ScrapFileDelete";
import "./ScrapPage.css";

const ScrapPage: React.FC = () => {
  const [memo, setMemo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showSaveCheck, setShowSaveCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // 메모 저장 로직 추가
    setShowSaveCheck(true);
    setIsEditing(false);
  };

  const handleGoHome = () => {
    setShowSaveCheck(false);
    navigate(`/main/main_4`);
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

  const articleContent =
    "[뉴스투데이] ◀ 앵커 ▶ 디올백 수수 의혹과 도이치모터스 주가조작 의혹과 관련해 김건희 여사가 그제 현직대통령의 영부인으로는 처음으로 검찰 조사를 받았습니다. 그런데 검찰청사가 아닌 제3의 장소에서 조사했는데, 장소는 김 여사 측에서 정한 것으로 알려졌습니다. 조희원 기자입니다. ◀ 리포트 ▶ 김건희 여사가 그제 피의자 신분으로 검찰 조사를 받았습니다. 조사 장소는 검찰청사가 아니라 제3의 장소였습니다. 검찰은 김 여사의 출석을 요구했고, 협의 결과 경호와 안전상 이유로 서울중앙지검 관할 내 정부 보안청사에서 조사했다고 밝혔습니다. 대통령 경호처가 관리하는 서울 종로구 창성동 건물인 것으로 파악됐습니다. 김 여사 쪽에서 조사 하루 전인 금요일 오후 결정해 검찰에 알려준 것으로 전해졌습니다. 검찰은 도이치모터스 주가조작 연루 의혹과 디올백 수수 의혹 두 사건을 모두 조사했습니다. 그제 낮 1시30분부터 어제 새벽 1시20분까지 11시간 50분 조사했는데, 주가조작 의혹을 먼저 7시간쯤 하고, 디올백은 뒤이어 5시간 한 것으로 알려졌습니다. 조사는 주임검사들이 직접 했고, 수사를 지휘하는 차장검사들이 검찰청사에서 대기했습니다. 김 여사가 주가조작 가담 혐의로 고발된 것은 4년 전인 2020년 4월입니다. 그동안 대면 조사는 한 차례도 없었습니다. 명품백 수수 의혹은 지난해 12월 유튜브매체 '서울의소리'가 김 여사가 3백만 원 상당의 디올백을 받았다며 윤석열 대통령 부부를 청탁금지법 위반 등의 혐의로 고발하면서 불거졌습니다. 대통령 재임 중 영부인이 검찰 대면 조사를 받은 건 이번이 처음입니다. 2004년에는 전두환 비자금과 관련해 이순자 여사가, 2009년에는 노무현 전 대통령 부인 권양숙 여사가 참고인으로 비공개 검찰 소환 조사를 받긴 했지만, 모두 퇴임 후였습니다. 2012년에는 김윤옥 여사가 이명박 전 대통령 재임 중 내곡동 특검팀의 조사를 받았지만 서면조사였습니다. 김건희 여사 조사와 관련해 대통령실 관계자는 '수사 중 사안을 언급하는 건 적절치 않다'며 '김 여사 법률대리인이 입장을 낼 것'이라고 했습니다. 김 여사 대리인은 '성실히 조사에 임해 사실 그대로 진술했다'는 한 줄짜리 입장을 냈습니다. MBC뉴스 조희원입니다.";

  return (
    <div className="container">
      <header className="header">
        <Logo2 className="headerLogo" />
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="home-button" onClick={handleSaveClick}>
          Home
        </button>
      </header>
      <main className="scrap-content">
        <div className="article-section">
          <button className="view-article-button">기사 원문 보기</button>
          <div className="article-meta">
            <span className="category">(기사 분야)</span>
            <span className="date">(기사 작성 날짜)</span>
          </div>
          <div className="article-content">
            <p className="article-detail">{articleContent}</p>
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
          <button className="ai-summary-button">AI 요약</button>
          <div className="ai-summary-content">(요약된 내용)</div>
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
        onConfirm={handleGoHome}
      />
    </div>
  );
};

export default ScrapPage;
