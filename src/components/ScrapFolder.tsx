import React, { useState, useRef, useEffect } from "react";
import { IconArrow, ScrapFolderImg, ScrapFolderDelete4 } from "assets/export";
import { Link } from "react-router-dom";
import { useScrap } from "./ScrapContext";
import FolderDelete from "./scrapPoppup/ScrapFolderDelete";
import "./ScrapFolder.css";

interface ScrapFolderProps {
  folder: string;
  createdDate?: Date;
}

const ScrapFolder: React.FC<ScrapFolderProps> = ({ folder, createdDate }) => {
  const { deleteFolder, renameFolder } = useScrap();
  const [showEdit, setShowEdit] = useState(false);
  const [newFolderName, setNewFolderName] = useState(folder);
  const [showDelete, setShowDelete] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleRenameSubmit = (e: React.FormEvent) => {
    // 추가한 부분
    e.preventDefault();
    renameFolder(folder, newFolderName);
    setShowEdit(false);
  };

  const handleDeleteClick = () => {
    setShowDelete(true);
  };

  const handleConfirmDelete = () => {
    deleteFolder(folder);
    setShowDelete(false);
    setShowEdit(false);
  };

  const handleCancelDelete = () => {
    setShowDelete(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="scrapList">
      <Link to={`/scraplist/${folder}`}>
        <ScrapFolderImg style={{ width: 200, height: 200 }} />
      </Link>
      <div className="folderHeader">
        <div className="folderTitleWrapper">
          <h3 className="folderName">{newFolderName}</h3>
          <IconArrow onClick={handleEdit} className="folderEditIcon" />
        </div>
        {createdDate && (
          <p className="folderDate">{createdDate.toLocaleDateString()}</p>
        )}
        {showEdit && (
          <div ref={popupRef} className="popupMenu">
            <form onSubmit={handleRenameSubmit} className="renameForm">
              {" "}
              {/* 추가한 부분 */}
              <div className="inputWrapper">
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="folderRenameInput"
                />
                <button type="submit" className="saveButton">
                  저장
                </button>
              </div>
              <button
                type="button"
                onClick={handleDeleteClick}
                className="deleteButton"
              >
                <p className="deleteText">
                  <ScrapFolderDelete4 style={{ width: 150 }} />
                </p>
              </button>
            </form>
          </div>
        )}
      </div>
      <FolderDelete
        isOpen={showDelete}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ScrapFolder;
