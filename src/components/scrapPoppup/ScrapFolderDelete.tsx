import React from "react";
import {
  ScrapFolderDelete1,
  ScrapFolderDelete2,
  ScrapFolderDelete3,
} from "assets/export";
import "./ScrapFolderDelete.css";

interface FolderDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FolderDelete: React.FC<FolderDeletePopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="deleteModalOverlay">
      <div className="deleteModalContent">
        <ScrapFolderDelete1 />
        <div className="deleteModalButtons">
          <button onClick={onClose} className="deleteCancelButton">
            <ScrapFolderDelete2 />
          </button>
          <button onClick={onConfirm} className="deleteConfirmButton">
            <ScrapFolderDelete3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolderDelete;
