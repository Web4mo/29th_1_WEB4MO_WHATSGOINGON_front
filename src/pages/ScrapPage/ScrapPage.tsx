import React, { useState } from "react";
import { Logo2 } from "assets/export";
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
    setIsEditing(false);
  };

  const handleHomeClick = () => {
    setShowSaveCheck(true);
  };

  const handleConfirmHome = () => {
    navigate("/main/main_4");
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

  const articleContent = `(서울=연합뉴스) 서혜림 기자 = 11월 14일 치러지는 2025학년도 대학수학능력시험(수능)이 100여일 앞으로 다가왔다. 오는 6일이 'D-100일'이다.

3일 교육계에 따르면 올해 수능은 우선 '의대 증원' 이슈로 인한 변수가 크다는 것이 가장 큰 특징이다.

의대 정원이 27년 만에 대폭 늘어나면서 의대 열풍은 더 거세지고 있고, 이에 따라 'N수생'이 크게 늘어난 상위권 경쟁이 더욱 치열해질 것이라는 전망이 나온다.

상위권 학생들이 대거 유입된다면 수능 출제기관은 수험생 변별력을 갖추기 위해 고난도 문항 출제 기조를 유지할 수밖에 없다.

또한 2025학년도 대입은 자율전공(무전공) 정원이 전년보다 2만8천여명이나 늘었다. 이에 따른 입시 불확실성이 커져 기존 입시 정보를 바탕으로 한 합격선 예측이 쉽지 않은 상황이다.

킬러문항 배제 방침으로 인한 '기존에 접하지 못했던 어려운 문제' 출제도 큰 변수다.

킬러문항 배제 이후 처음 치러진 지난해 수능에서는 킬러문항 못지않게 까다로운 고난도 문항도 여럿 출제됐다.

입시 전문가들은 수능 출제기관인 한국교육과정평가원의 최근 모의평가 출제 경향 분석을 토대로 올해 수능 또한 변별력 높은 문항이 출제될 것 같다고 입을 모았다.

그렇기에 예상할 수 없는 문제가 나오고 돌발 상황이 발생했을 때 당혹감을 극복하고 평정심을 유지하는 것이 중요하다고 조언했다.

종로학원에 따르면 국어는 지난해 킬러문항 배제 발표 후 올해 6월 모의평가에서 표준점수 최고점이 148점으로 변별력이 매우 높게 출제됐다.

지난해 수능 때 국어 표준점수 최고점이 150점으로 매우 어려웠다는 평을 받고 있는데, 이와 비슷한 패턴이 유지된 것이다.

수학 또한 지난해 수능 때 표준점수 최고점(148점)보다 올해 6월 모의평가 표준점수 최고점이 152점으로 난도가 더욱 상승했다.

절대 평가인 영어 또한 1등급 비율이 지난해 수능 때는 4.71%였는데, 올해 6월 모의평가 때는 1.47%밖에 불과해 더욱 어려워졌다.

이에 입시업계에서는 올해 수능도 어렵게 출제될 것 같다는 전망이 지배적이다.

임성호 종로학원 대표는 "기존에는 어려운 문항이 (소수의) 킬러문항으로 특정됐지만, 이제는 광범위하게 출제되고 있다"며 "가령 수학은 기존에 마지막 문항이 킬러문항이었다면 이제는 어려운 문제가 광범위하게 포진됐다"고 분석했다.

그러면서 국어의 경우 고난도 기출문제를 재차 풀고, EBS 연계 지문 풀이뿐만 아니라 생소한 작품도 접하는 연습을 병행해야 한다고 조언했다.

수학은 중상 난이도 문항이 늘어났기 때문에 빠르고 정확하게 푸는 연습을 해야 한다고 당부했다.

영어는 매일 일정 시간을 정해놓고 문제 풀이의 감을 유지하는 것이 중요하다고 조언했다.

EBS는 수능을 100일 앞두고 '자신의 위치'를 점검하는 것이 가장 중요하다고 조언했다.

더불어 EBS 대표 강사들은 수능 출제가 EBS 교재와 연계되는 만큼 EBS 수능특강과 수능완성을 풀면서 '개념 학습'에 정성을 쏟아야 한다고 조언했다.

수능만큼 떨리는 긴장감
수능만큼 떨리는 긴장감
(서울=연합뉴스) 김도훈 기자 = 2024학년도 7월 고3 전국연합학력평가가 실시된 11일 오전 서울 광진구 광남고등학교에서 한 고3 수험생이 얼굴을 비비며 긴장을 풀고 있다. 2024.7.11 superdoo82@yna.co.kr

국어는 작년 수준과 비슷하게 출제될 가능성이 크다고 내다봤다.

수학의 경우 100일이 남은 만큼 본인이 익숙한 문제를 풀기보다는 취약 부분의 문제 풀이를 강화해야 한다고 당부했다.

영어 또한 하루에 지문 10개 정도를 꾸준히 풀면서 부족한 부분을 보완해야 한다고 덧붙였다.

이투스에듀는 100일 동안 각자 성적을 극대화할 수 있는 '타임 테이블'을 짜는 것이 중요하다고 조언했다.

김병진 이투스 교육평가연구소장은 "9월 모의평가 전까지 자신이 풀 수 있는 것은 완벽하게 풀 수 있도록 연습해야 한다"며 "9월 모의평가 이후 수능까지 남은 기간에는 풀 수 없었던 불완전한 부분을 학습하면서 성적을 극대화하는 것이 좋다"고 말했다.

sf@yna.co.kr
`;

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
          <button className="view-article-button">
            <ScrapFileArticle style={{ width: 130 }} />
          </button>
          <div className="article-meta">
            <span className="category">사회/문화</span>
            <span className="date">2024.08.03</span>
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
          <button className="ai-summary-button">
            <ScrapSummarize style={{ width: 130 }} />
          </button>
          <div className="ai-summary-content">
            2025학년도 대학수학능력시험(수능)이 100일 앞으로 다가왔다. 올해
            수능의 가장 큰 변수는 '의대 증원'으로 인해 상위권 경쟁이 치열해지고
            변별력 높은 고난도 문항이 출제될 가능성이 크다는 점이다. 자율전공
            정원도 늘어 입시 예측이 어려워졌다. 국어는 지난해와 비슷하게 어려울
            것으로 보이며, 수학과 영어도 난도가 상승할 전망이다. 입시 전문가들은
            돌발 상황에 대비하고 평정심을 유지하는 것이 중요하다고 조언했다.
            EBS는 자신의 위치를 점검하고 EBS 교재와 연계된 개념 학습을 강조했다.
            이투스에듀는 100일 동안 성적 극대화를 위한 '타임 테이블'을 짜는 것이
            중요하다고 했다.
          </div>
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
