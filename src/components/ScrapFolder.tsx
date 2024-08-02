import React, { useState, useRef, useEffect } from "react";
import { IconArrow, ScrapFolderImg, IconDelete } from "assets/export";
import { Link } from "react-router-dom";
import { useScrap } from "./ScrapContext";
import FolderDelete from "./scrapPoppup/ScrapFolderDelete";
import "./ScrapFolder.css";

interface ScrapFolderProps {
  folder: string;
  news: string[];
  createdDate?: Date;
}

const ScrapFolder: React.FC<ScrapFolderProps> = ({
  folder,
  news,
  createdDate,
}) => {
  const { deleteFolder } = useScrap();
  const [showEdit, setShowEdit] = useState(false);
  const [newFolderName, setNewFolderName] = useState(folder);
  const [currentFolderName, setCurrentFolderName] = useState(folder);
  const [showDelete, setShowDelete] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleRenameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentFolderName(newFolderName);
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
          <h3 className="folderName">{currentFolderName}</h3>
          <IconArrow onClick={handleEdit} className="folderEditIcon" />
        </div>
        {createdDate && (
          <p className="folderDate">{createdDate.toLocaleDateString()}</p>
        )}
        {showEdit && (
          <div ref={popupRef} className="popupMenu">
            <form onSubmit={handleRenameSubmit} className="renameForm">
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
                <IconDelete className="deleteIcon" />
                <p className="deleteText">폴더 삭제하기</p>
              </button>
            </form>
          </div>
        )}
      </div>
      <ul>
        {news.map((newsItem, index) => (
          <li key={index}>{newsItem}</li>
        ))}
      </ul>
      <FolderDelete
        isOpen={showDelete}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ScrapFolder;
