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
import ResultPage1 from "pages/Propensity_analysis/ResultPage1";
import ResultPage2 from "pages/Propensity_analysis/ResultPage2";
import ResultPage3 from "pages/Propensity_analysis/ResultPage3";
import ResultPage4 from "pages/Propensity_analysis/ResultPage4";
import ResultPage5 from "pages/Propensity_analysis/ResultPage5";
import ResultPage6 from "pages/Propensity_analysis/ResultPage6";
import ResultPage7 from "pages/Propensity_analysis/ResultPage7";
import ResultPage8 from "pages/Propensity_analysis/ResultPage8";
import PropensityAnalysis from "pages/Propensity_analysis/Propensity_analysis";
import Profile from "pages/My_page/Profile";
import ReadArticle from "pages/Article/Article";

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
        <Route path="/analy" element={<PropensityAnalysis />}></Route>
        <Route path="/analy/resultpage1" element={<ResultPage1 />}></Route>
        <Route path="/analy/resultpage2" element={<ResultPage2 />}></Route>
        <Route path="/analy/resultpage3" element={<ResultPage3 />}></Route>
        <Route path="/analy/resultpage4" element={<ResultPage4 />}></Route>
        <Route path="/analy/resultpage5" element={<ResultPage5 />}></Route>
        <Route path="/analy/resultpage6" element={<ResultPage6 />}></Route>
        <Route path="/analy/resultpage7" element={<ResultPage7 />}></Route>
        <Route path="/analy/resultpage8" element={<ResultPage8 />}></Route>
        <Route path="/mypage/profile" element={<Profile />}></Route>
        <Route path="/articles" element={<ReadArticle />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
