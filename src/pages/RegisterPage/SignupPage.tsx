import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignupPage1, SignupPage2 } from "assets/export";
import "./SignupPage.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
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
        <input
          type="text"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          placeholder="유형 결과를 입력해주세요."
          required
          className="signupInput"
        />
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
    </form>
  );
}

export default Signup;
