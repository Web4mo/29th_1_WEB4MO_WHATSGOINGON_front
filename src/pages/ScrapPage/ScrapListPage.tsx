import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrapList from "components/ScrapList";
import { useScrap } from "../../components/ScrapContext";
import FolderAdd from "components/scrapPoppup/ScrapFolderAdd";
import { ScrapFolderAdd5 } from "assets/export";
import { Rectangle } from "assets";
import { SubInfo, Calendar } from "assets";
import { MainScrap } from "assets/export";
import ProfileUpload from "components/profileUpload";
import "./ScrapListPage.css";

const ScrapListPage: React.FC = () => {
  const { scraps, createFolder } = useScrap();
  const [newFolder, setNewFolder] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();

  const handleAddClick = () => {
    setShowAdd(true);
  };

  const handleFolderSelect = (folder: string) => {
    setSelectedFolder(folder);
    navigate(`/scraplist/${folder}`);
  };

  const handleConfirmAdd = () => {
    createFolder(newFolder);
    setShowAdd(false);
  };

  const handleCancelAdd = () => {
    setShowAdd(false);
  };

  const handleInfoClick = () => {
    navigate("/mypage/profile");
  };

  const handleCalendarClick = () => {
    navigate("/cal/calendar");
  };

  return (
    <div>
      <ProfileUpload />
      <Rectangle className="scr-rec" />
      <SubInfo className="scr-info scr-clickable" onClick={handleInfoClick} />
      <Calendar
        className="scr-calen scr-clickable"
        onClick={handleCalendarClick}
      />
      <MainScrap className="scr-scrap" />
      <ProfileUpload />
      <div className="scrapList">
        <button className="folderAddButton" onClick={handleAddClick}>
          <ScrapFolderAdd5 />
        </button>
        <ScrapList
          selectedFolder={selectedFolder}
          onFolderSelect={handleFolderSelect}
          scraps={scraps}
        />
      </div>
      {showAdd && (
        <FolderAdd
          isOpen={showAdd}
          onClose={handleCancelAdd}
          onConfirm={handleConfirmAdd}
          setNewFolder={setNewFolder}
        />
      )}
      {selectedFolder && (
        <div>
          {scraps[selectedFolder].items.map((scrap, index) => (
            <div key={index} className="scrapItem">
              {scrap}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrapListPage;
