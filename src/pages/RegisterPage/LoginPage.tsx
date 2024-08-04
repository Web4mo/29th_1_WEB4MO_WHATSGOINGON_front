import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginButton, SignupButton } from "assets/export";
import "./LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <h1>로그인</h1>
      <div className="loginContainer">
        <label className="loginLabel">아이디</label>
        <br />
        <input
          type="text"
          placeholder="아이디를 입력해주세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="loginInput"
        ></input>
        <br />
        <label className="loginLabel">비밀번호</label>
        <br />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="loginInput"
        ></input>
        <br />
        <button
          type="submit"
          className="loginButton"
          onClick={() => navigate("/main/main_3")}
        >
          <LoginButton />
        </button>
        <div className="hrContainer">
          <hr className="loginPageHr" />
        </div>
        <Link to="/signup">
          <SignupButton />
        </Link>
      </div>
    </form>
  );
}

export default Login;
