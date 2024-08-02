import React from "react";
import Modal from "react-modal";
import { Home2, Study, Explain2 } from "assets";
import { useGotoHome2, useGotoScrap } from "./resultFunc";

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
  const gotoHome = useGotoHome2();
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
              gotoHome();
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
