import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Line } from "assets";
import axios from "axios";

const customStyles = {
  content: {
    width: "700px",
    height: "400px",
    margin: "auto",
  },
};

interface PasswordResetModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const updatePassword = async (
  existingPassword: string,
  password: string,
  password2: string
) => {
  try {
    const response = await axios.patch("/mypage/profile/edit", {
      existingPassword,
      password,
      password2,
    });

    if (response.status === 200) {
      console.log("Profile updated successfully:", response.data);
    } else {
      console.error("Failed to update profile:", response.data.message);
    }
  } catch (error) {
    console.error("Error occurred while updating the profile:", error);
  }
};

const PasswordResetModal: React.FC<PasswordResetModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/mypage/profile");
        if (response.status === 200 && response.data.success) {
          setOldPassword(response.data.password);
        } else {
          console.error("Failed", response.data.message);
        }
      } catch (error) {
        console.error("Eror occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d|.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,16}$/;
    return regex.test(password);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePassword(newPassword)) {
      setErrorMessage(
        "영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10자에서 16자 사이로 입력해주세요."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("새 비밀번호와 일치하지 않습니다.");
      return;
    }

    setErrorMessage(""); // 유효성 검사에 통과 시 에러 메시지를 초기화
    updatePassword(oldPassword, newPassword, confirmPassword);
    onRequestClose(); // 유효성 검사가 성공 시 모달 close
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="비밀번호 재설정 Modal"
    >
      <h2 style={{ marginLeft: "280px" }}>비밀번호 재설정</h2>
      <Line style={{ marginLeft: "-30px", marginBottom: "30px" }} />
      <form onSubmit={handleSubmit}>
        <div style={{ marginLeft: "200px" }}>
          <label>
            아이디
            <input
              style={{ marginLeft: "100px", marginBottom: "20px" }}
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <label>
            현재 비밀번호
            <input
              style={{ marginLeft: "55px", marginBottom: "20px" }}
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <label>
            새 비밀번호
            <input
              style={{ marginLeft: "70px", marginBottom: "20px" }}
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <label>
            새 비밀번호 확인
            <input
              style={{ marginLeft: "40px", marginBottom: "20px" }}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        {errorMessage && (
          <div style={{ color: "red", marginLeft: "40px" }}>{errorMessage}</div>
        )}
        <button
          type="submit"
          style={{
            width: "150px",
            height: "35px",
            marginLeft: "500px",
            marginTop: "50px",
          }}
        >
          비밀번호 변경하기
        </button>
      </form>
    </Modal>
  );
};

export default PasswordResetModal;
