import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "pages/StartPage/StartPage";
import Login from "pages/RegisterPage/LoginPage";
import Signup from "pages/RegisterPage/SignupPage";
import ScrapListPage from "pages/ScrapPage/ScrapListPage";
import ScrapPage from "pages/ScrapPage/ScrapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scrap" element={<ScrapPage />} />
        <Route path="/scrap/:folder" element={<ScrapPage />} />
        <Route path="/scraplist" element={<ScrapListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
