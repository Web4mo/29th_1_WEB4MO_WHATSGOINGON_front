import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "pages/StartPage/StartPage";
import Login from "pages/RegisterPage/LoginPage";
import Signup from "pages/RegisterPage/SignupPage";
import ScrapListPage from "pages/ScrapPage/ScrapListPage";
import ScrapPage from "pages/ScrapPage/ScrapPage";
import Q_1 from "./components/q_1/q_1";
import Q_2_0 from "./components/q_2/q_2_0";
import Q_2_1 from "./components/q_2/q_2_1";
import Q_2_2 from "./components/q_2/q_2_2";
import Q_2_3 from "./components/q_2/q_2_3";
import Q_2_4 from "./components/q_2/q_2_4";
import Q_2_5 from "./components/q_2/q_2_5";
import Q_2_6 from "./components/q_2/q_2_6";
import Q_2_7 from "./components/q_2/q_2_7";
import Q_3 from "./components/q_2/q_3";
import CAL from "./components/cal/calendar";
import MAIN_4 from "./components/main/main_4";
import MAIN_3 from "./components/main/main_3";
import MAIN_2 from "./components/main/main_2";
import TestResult from "./components/q_2/test_result";

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
        <Route path="/q_1/q_1" element={<Q_1 />} />
        <Route path="/q_2/q_2_0" element={<Q_2_0 />} />
        <Route path="/q_2/q_2_1" element={<Q_2_1 />} />
        <Route path="/q_2/q_2_2" element={<Q_2_2 />} />
        <Route path="/q_2/q_2_3" element={<Q_2_3 />} />
        <Route path="/q_2/q_2_4" element={<Q_2_4 />} />
        <Route path="/q_2/q_2_5" element={<Q_2_5 />} />
        <Route path="/q_2/q_2_6" element={<Q_2_6 />} />
        <Route path="/q_2/q_2_7" element={<Q_2_7 />} />
        <Route path="/q_2/q_3" element={<Q_3 />} />
        <Route path="/cal/calendar" element={<CAL />} />
        <Route path="/q_2/test_result" element={<TestResult />} />
        <Route path="/main/main_4" element={<MAIN_4 />} />
        <Route path="/main/main_3" element={<MAIN_3 />} />
        <Route path="/main/main_2" element={<MAIN_2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
