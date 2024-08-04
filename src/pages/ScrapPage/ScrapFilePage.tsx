import React from "react";
import ScrapList2 from "components/ScrapList2";
import { useNavigate } from "react-router-dom";
import { Rectangle } from "assets";
import { SubInfo, Calendar } from "assets";
import { MainScrap } from "assets/export";
import ProfileUpload from "components/profileUpload";
import "./ScrapListPage.css";

const ScrapFilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate("/mypage/profile");
  };

  const handleCalendarClick = () => {
    navigate("/cal/calendar");
  };

  return (
    <div>
      <Rectangle className="scr-rec" />
      <SubInfo className="scr-info scr-clickable" onClick={handleInfoClick} />
      <Calendar
        className="scr-calen scr-clickable"
        onClick={handleCalendarClick}
      />
      <MainScrap className="scr-scrap" />
      <div className="profile-upload">
        <ProfileUpload />
      </div>
      <div className="scrap-list">
        <div className="scr-button-container">
          <button className="cal-home-button" onClick={() => navigate("/main")}>
            Home
          </button>
          <button className="cal-logout-button" onClick={() => navigate("/")}>
            Log Out
          </button>
        </div>
        <ScrapList2
          onFolderSelect={(folder) => navigate(`/scraplist/${folder}`)}
        />
      </div>
      <br />
    </div>
  );
};

export default ScrapFilePage;
