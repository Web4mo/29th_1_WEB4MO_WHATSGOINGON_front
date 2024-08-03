import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Home2, Study, Explain2 } from "assets";
import {
  useGotoHome2,
  useGotoHome3,
  useGotoHome4,
  useGotoScrap,
} from "./resultFunc";
import axios from "axios";

const customStyles = {
  content: {
    margin: "auto",
    width: "500px",
    height: "200px",
  },
};

interface RedirectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RedirectModal: React.FC<RedirectModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const gotoScrap = useGotoScrap();
  const gotoHome2 = useGotoHome2();
  const gotoHome3 = useGotoHome3();
  const gotoHome4 = useGotoHome4();

  // State for storing the number of keywords
  const [num, setNum] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/mypage/profile");
        if (response.status === 200 && response.data.success) {
          setNum(response.data.keywords.length);
        } else {
          console.error("Failed", response.data.message);
        }
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleHomeClick = () => {
    if (num === 2) {
      gotoHome2();
    } else if (num === 3) {
      gotoHome3();
    } else {
      gotoHome4();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Redirect Modal"
    >
      <div
        style={{
          marginTop: "20px",
          marginLeft: "100px",
        }}
      >
        <Explain2 style={{ width: "250px", marginLeft: "20px" }} />
        <div style={{ marginLeft: "140px", marginTop: "35px" }}>
          <Home2
            onClick={() => {
              onRequestClose();
              handleHomeClick();
            }}
            style={{ width: "120px", marginRight: "10px" }}
          />
          <Study
            onClick={() => {
              onRequestClose();
              gotoScrap();
            }}
            style={{ width: "120px" }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default RedirectModal;
