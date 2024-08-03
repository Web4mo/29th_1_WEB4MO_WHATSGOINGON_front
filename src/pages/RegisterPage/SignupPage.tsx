import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupPage1, SignupPage2 } from "assets/export";
import "./SignupPage.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        name: name,
        loginId: username,
        password: password,
        confirmPassword: confirmPassword,
        type: userType,
      });

      if (response.data.success) {
        alert("회원가입에 성공했습니다.");
        navigate("/login");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signupForm">
      <h1>회원가입</h1>
      <br />
      <br />
      <div>
        <label className="signupLabel">이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요."
          required
          className="signupInput"
        ></input>
      </div>
      <br />
      <br />
      <div>
        <label className="signupLabel">아이디</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디를 입력해주세요."
          required
          className="signupInput"
        />
      </div>
      <br />
      <br />
      <div>
        <label className="signupLabel">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
          required
          className="signupInput"
        />
      </div>
      <br />
      <br />
      <div>
        <label className="signupLabel">비밀번호 확인</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          required
          className="signupInput"
        />
      </div>
      <br />
      <br />
      <div>
        <label className="signupLabel">유형 결과</label>
        <select
          className="signupSelect"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="">유형을 선택해주세요.</option>
          <option value="탐험가가 꿈인 범생이형">탐험가가 꿈인 범생이형</option>
          <option value="박사가 꿈인 한우물 범생이형">
            박사가 꿈인 한우물 범생이형
          </option>
          <option value="꿈 많은 명문가 자제형">꿈 많은 명문가 자제형</option>
          <option value="고집있는 명문가 자제형">고집있는 명문가 자제형</option>
          <option value="호기심왕 도련님형">호기심왕 도련님형</option>
          <option value="행동파 도련님형">행동파 도련님형</option>
          <option value="호기심왕 도파민형">호기심왕 도파민형</option>
          <option value="극심한 도파민형">극심한 도파민형</option>
        </select>{" "}
      </div>
      <br />
      <br />
      <br />
      <button type="submit" className="signupButton">
        <SignupPage1 />
      </button>
      <Link to="/" className="signupButton">
        <SignupPage2 />
      </Link>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Signup;
