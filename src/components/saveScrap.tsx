import React, { useState } from "react";
import Modal from "react-modal";
import { Folder, Folder2, Cancel, AddFolder, Save2, Explain } from "assets";
// Folder2 -> 기존폴더 불러올때 사용예정
const customStyles = {
  content: {
    margin: "auto",
    width: "400px",
    height: "500px",
  },
};

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (folderName: string) => void;
  onRedirectOpen: () => void; // 새로 추가된 부분
}

interface Folders {
  id: number;
  name: string;
}

const SaveScrap: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onSave,
  onRedirectOpen, // 새로 추가된 부분
}) => {
  const [folders, setFolders] = useState<Folders[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddFolder = () => {
    setFolders([...folders, { id: nextId, name: "새폴더" }]);
    setNextId(nextId + 1);
  };

  const handleFolderNameChange = (id: number, newName: string) => {
    setFolders(
      folders.map((folder) =>
        folder.id === id ? { ...folder, name: newName } : folder
      )
    );
  };

  const handleSave = () => {
    folders.forEach((folder) => onSave(folder.name));
    onRequestClose();
    onRedirectOpen(); // 새로 추가된 부분
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Explain />

      <div>
        {folders.map((folder) => (
          <div
            key={folder.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              width: "250px",
              height: "40px",
              borderRadius: "5px",
              backgroundColor: "#ECECEC",
              marginLeft: "70px",
            }}
          >
            <Folder style={{ marginLeft: "10px", marginTop: "2px" }} />
            <input
              type="text"
              value={folder.name}
              onChange={(e) =>
                handleFolderNameChange(folder.id, e.target.value)
              }
              style={{
                marginLeft: "10px",
                backgroundColor: "#ECECEC",
                border: "none",
              }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <AddFolder
            onClick={handleAddFolder}
            style={{ width: "150px", marginLeft: "200px" }}
          />
        </div>
        <div
          style={{
            marginLeft: "130px",
          }}
        >
          <Cancel
            onClick={onRequestClose}
            style={{
              width: "120px",
            }}
          />
          <Save2
            onClick={handleSave}
            style={{
              width: "120px",
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SaveScrap;
