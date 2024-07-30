import React from "react";
import {
  ScrapFileDelete1,
  ScrapFileDelete2,
  ScrapFileDelete3,
} from "assets/export";
import "./ScrapFolderDelete.css";

interface FileDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FileDelete: React.FC<FileDeletePopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="deleteModalOverlay">
      <div className="deleteModalContent">
        <ScrapFileDelete1 />
        <div className="deleteModalButtons">
          <button onClick={onClose} className="deleteCancelButton">
            <ScrapFileDelete2 />
          </button>
          <button onClick={onConfirm} className="deleteConfirmButton">
            <ScrapFileDelete3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileDelete;
