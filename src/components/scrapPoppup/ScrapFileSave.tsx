import React from "react";
import { ScrapFileSave1, ScrapFileSave2, ScrapFileSave3 } from "assets/export";
import "./ScrapFolderDelete.css";

interface FileSavePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FileSave: React.FC<FileSavePopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="deleteModalOverlay">
      <div className="deleteModalContent">
        <ScrapFileSave1 />
        <div className="deleteModalButtons">
          <button onClick={onClose} className="deleteCancelButton">
            <ScrapFileSave2 />
          </button>
          <button onClick={onConfirm} className="deleteConfirmButton">
            <ScrapFileSave3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileSave;
