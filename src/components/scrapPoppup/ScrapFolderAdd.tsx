import React from "react";
import {
  ScrapFolderAdd2,
  ScrapFolderAdd3,
  ScrapFolderAdd4,
} from "assets/export";
import "./ScrapFolderAdd.css";

interface AddPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  setNewFolder: React.Dispatch<React.SetStateAction<string>>;
}

const FolderAdd: React.FC<AddPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  setNewFolder,
}) => {
  if (!isOpen) return null;

  return (
    <div className="addModalOverlay">
      <div className="addModalContent">
        <ScrapFolderAdd2 className="addFolderImg" />
        <h3 className="addFolderText">폴더 추가하기</h3>
        <br />
        <hr />
        <br />
        <label className="addFolderLabel">이름</label>
        <input
          type="text"
          placeholder="새 폴더"
          className="addFolderInput"
          onChange={(e) => setNewFolder(e.target.value)}
        />
        <br />
        <br />
        <br />
        <div>
          <button className="addcancelButton" onClick={onClose}>
            <ScrapFolderAdd3 />
          </button>
          <button className="addButton" onClick={onConfirm}>
            <ScrapFolderAdd4 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolderAdd;
