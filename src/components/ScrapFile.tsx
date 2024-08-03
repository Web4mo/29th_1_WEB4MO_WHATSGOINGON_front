import React, { useState, useRef, useEffect } from "react";
import "../pages/ScrapPage/ScrapFilePage.css";
import { IconArrow, ScrapFileImg, ScrapFolderDelete4 } from "assets/export";
import { Link } from "react-router-dom";
import { useScrap2 } from "./ScrapContext2";
import FolderDelete from "./scrapPoppup/ScrapFolderDelete";
import "./ScrapFolder.css";

interface NewsItem {
  scrapId: number;
  articleId: number;
  previewImg: string;
  title: string;
  date: string;
}

interface ScrapFileProps {
  news: NewsItem[];
}

const ScrapFile: React.FC<ScrapFileProps> = ({ news }) => {
  const { deleteFile, renameFile } = useScrap2();
  const [showEdit, setShowEdit] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const [showDelete, setShowDelete] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleEdit = (item: NewsItem) => {
    setSelectedItem(item);
    setNewFileName(item.title);
    setShowEdit(true);
  };

  const handleRenameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItem) {
      renameFile(selectedItem.title, newFileName); // Adjust according to your context function
      setShowEdit(false);
    }
  };

  const handleDeleteClick = () => {
    setShowDelete(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      deleteFile(selectedItem.title);
      setShowDelete(false);
      setShowEdit(false);
    }
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
    <div>
      <div className="newsList">
        {news.map((item) => (
          <div key={item.scrapId} className="newsItemWithFolder">
            <Link to={`/scrap`}>
              <ScrapFileImg style={{ width: 200, height: 200 }} />
            </Link>
            <div className="folderHeader">
              <div className="folderTitleWrapper">
                <h3 className="folderName">{item.title}</h3>
                <IconArrow
                  onClick={() => handleEdit(item)}
                  className="folderEditIcon"
                />
                <br />
              </div>
              <p className="folderDate">{item.date}</p>
              {showEdit &&
                selectedItem &&
                selectedItem.scrapId === item.scrapId && (
                  <div ref={popupRef} className="popupMenu">
                    <form onSubmit={handleRenameSubmit} className="renameForm">
                      <div className="inputWrapper">
                        <input
                          type="text"
                          value={newFileName}
                          onChange={(e) => setNewFileName(e.target.value)}
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
        ))}
      </div>
    </div>
  );
};

export default ScrapFile;
