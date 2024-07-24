import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultPage1 from 'pages/Propensity_analysis/ResultPage1';
import ResultPage2 from 'pages/Propensity_analysis/ResultPage2';
import ResultPage3 from 'pages/Propensity_analysis/ResultPage3';
import ResultPage4 from 'pages/Propensity_analysis/ResultPage4';
import ResultPage5 from 'pages/Propensity_analysis/ResultPage5';
import ResultPage6 from 'pages/Propensity_analysis/ResultPage6';
import ResultPage7 from 'pages/Propensity_analysis/ResultPage7';
import ResultPage8 from 'pages/Propensity_analysis/ResultPage8';
import Propensity_analysis from 'pages/Propensity_analysis/Propensity_analysis';
import Profile from 'pages/My_page/Profile';
import ProfileUpload from 'components/profileUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analy" element={<Propensity_analysis />}></Route>
        <Route path="/analy/resultpage1" element={<ResultPage1 />}></Route>
        <Route path="/analy/resultpage2" element={<ResultPage2 />}></Route>
        <Route path="/analy/resultpage3" element={<ResultPage3 />}></Route>
        <Route path="/analy/resultpage4" element={<ResultPage4 />}></Route>
        <Route path="/analy/resultpage5" element={<ResultPage5 />}></Route>
        <Route path="/analy/resultpage6" element={<ResultPage6 />}></Route>
        <Route path="/analy/resultpage7" element={<ResultPage7 />}></Route>
        <Route path="/analy/resultpage8" element={<ResultPage8 />}></Route>
        <Route path="/mypage/profile" element={<Profile />}></Route>
        <Route path="/test" element={<ProfileUpload />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
