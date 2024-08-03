import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginButton, SignupButton } from "assets/export";
import "./LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        userId: username,
        password: password,
      });

      if (response.data.success) {
        alert("로그인에 성공했습니다");
        // Save tokens to local storage or any other state management solution
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate("/main/main_3"); // Redirect to a different page upon successful login
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    }
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
        <button type="submit" className="loginButton">
          <LoginButton />
        </button>
        {error && <p className="error">{error}</p>}
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
