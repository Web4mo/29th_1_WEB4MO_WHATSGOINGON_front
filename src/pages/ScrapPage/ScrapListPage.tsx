import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrapList from "components/scrap/ScrapList";
import { useScrap } from "../../components/scrap/ScrapContext";
import Add from "components/scrap/scrapPoppup/ScrapFolderAdd";
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
    navigate(`/scrap/${folder}`);
  };

  const handleConfirmAdd = () => {
    createFolder(newFolder);
    setShowAdd(false);
  };

  const handleCancelAdd = () => {
    setShowAdd(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <ScrapList
          selectedFolder={selectedFolder}
          onFolderSelect={handleFolderSelect}
          scraps={scraps}
        />
      </div>
      {showAdd && (
        <Add
          isOpen={showAdd}
          onClose={handleCancelAdd}
          onConfirm={handleConfirmAdd}
          setNewFolder={setNewFolder}
        />
      )}
      <button className="FolderAddButton" onClick={handleAddClick}>
        폴더 추가하기
      </button>
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
