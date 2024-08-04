import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Folder, Folder2, Cancel, AddFolder, Save2, Explain } from "assets";
// Folder2 -> 기존폴더 불러올때 사용예정
import axios from "axios";

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
  onRedirectOpen: () => void;
}

interface Folders {
  id: number;
  name: string;
}

const SaveScrap: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onSave,
  onRedirectOpen,
}) => {
  const [folders, setFolders] = useState<Folders[]>([]);
  const [nextId, setNextId] = useState(0);
  const [folderData, setFolderData] = useState({
    folderCount: 0,
    data: [],
  });
  useEffect(() => {
    const getFolderData = async () => {
      try {
        const response = await axios.get("/mypage/scrapList");
        if (response.status === 200 && response.data.success) {
          setFolderData({
            folderCount: response.data.folderCount,
            data: response.data.data,
          });

          setNextId(response.data.folderCount);
        } else {
          console.error("Failed", response.data.message);
        }
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };
    getFolderData();
  });

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
        <div
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
          <Folder2 style={{ marginLeft: "10px", marginTop: "2px" }} />
          <input
            type="text"
            value="기본폴더"
            style={{
              marginLeft: "10px",
              backgroundColor: "#ECECEC",
              border: "none",
            }}
          />
        </div>
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
