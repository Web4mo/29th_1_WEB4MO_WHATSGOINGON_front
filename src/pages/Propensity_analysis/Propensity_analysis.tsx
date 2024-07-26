import React, { useState } from "react";
import { Logo, Prev, Next } from "assets";
import { Q1, A1, B1 } from "assets";
import { Q2, A2, B2 } from "assets";
import { Q3, A3, B3 } from "assets";
import { Q4, A4, B4 } from "assets";
import { Q5, A5, B5 } from "assets";
import { Q6, A6, B6 } from "assets";
import { Q7, A7, B7 } from "assets";
import { Q8, A8, B8 } from "assets";
import "./Propensity_analysis.css";

function Propensity_analysis() {
  const questions = [
    <Q1 key="Q1" />,
    <Q2 key="Q2" />,
    <Q3 key="Q3" />,
    <Q4 key="Q4" />,
    <Q5 key="Q5" />,
    <Q6 key="Q6" />,
    <Q7 key="Q7" />,
    <Q8 key="Q8" />,
  ];
  const answersA = [
    <A1 key="A1" />,
    <A2 key="A2" />,
    <A3 key="A3" />,
    <A4 key="A4" />,
    <A5 key="A5" />,
    <A6 key="A6" />,
    <A7 key="A7" />,
    <A8 key="A8" />,
  ];
  const answersB = [
    <B1 key="B1" />,
    <B2 key="B2" />,
    <B3 key="B3" />,
    <B4 key="B4" />,
    <B5 key="B5" />,
    <B6 key="B6" />,
    <B7 key="B7" />,
    <B8 key="B8" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const clickA = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const clickB = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const PrevQ = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const NextQ = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div style={{ backgroundColor: "#D8D8D8", paddingTop: "1vh" }}>
      <div className="name"> 뉴스 성향 테스트 </div>
      <Logo className="logo" />
      <div className="ques">
        {currentIndex >= 1 && <Prev onClick={PrevQ} className="arrow" />}
        {questions[currentIndex]}
        <Next onClick={NextQ} className="arrow" />
      </div>
      <div className="answerdiv">
        <div className="answer" onClick={clickA}>
          {answersA[currentIndex]}
        </div>
        <div className="answer" onClick={clickB}>
          {answersB[currentIndex]}
        </div>
      </div>
    </div>
  );
}

export default Propensity_analysis;
