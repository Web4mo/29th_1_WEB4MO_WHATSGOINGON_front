import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Prev, Next } from "assets";
import { Q1, A1, B1 } from "assets";
import { Q2, A2, B2 } from "assets";
import { Q3, A3, B3 } from "assets";
import { Q4, A4, B4 } from "assets";

import "./Propensity_analysis.css";

function PropensityAnalysis() {
  const questions = [
    <Q1 key="Q1" />,
    <Q2 key="Q2" />,
    <Q3 key="Q3" />,
    <Q4 key="Q4" />,
  ];
  const answersA = [
    <A1 key="A1" />,
    <A2 key="A2" />,
    <A3 key="A3" />,
    <A4 key="A4" />,
  ];
  const answersB = [
    <B1 key="B1" />,
    <B2 key="B2" />,
    <B3 key="B3" />,
    <B4 key="B4" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );

  const clickA = () => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentIndex] = "A";
    setSelectedAnswers(newSelectedAnswers);
  };

  const clickB = () => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentIndex] = "B";
    setSelectedAnswers(newSelectedAnswers);
  };

  const PrevQ = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const navigate = useNavigate();

  const NextQ = () => {
    if (selectedAnswers[currentIndex]) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (currentIndex === questions.length - 1) {
        if (
          selectedAnswers[1] !== null &&
          selectedAnswers[2] !== null &&
          selectedAnswers[3] !== null
        ) {
          const resultKey =
            selectedAnswers[1] + selectedAnswers[2] + selectedAnswers[3];

          let resultPage = "/analy/resultpage1";

          switch (resultKey) {
            case "AAA":
              resultPage = "/analy/resultpage1";
              break;
            case "ABA":
              resultPage = "/analy/resultpage2";
              break;
            case "AAB":
              resultPage = "/analy/resultpage3";
              break;
            case "ABB":
              resultPage = "/analy/resultpage4";
              break;
            case "BAA":
              resultPage = "/analy/resultpage5";
              break;
            case "BAB":
              resultPage = "/analy/resultpage6";
              break;
            case "BBA":
              resultPage = "/analy/resultpage7";
              break;
            case "BBB":
              resultPage = "/analy/resultpage8";
              break;
            default:
              resultPage = "/analy/resultpage1";
          }
          navigate(resultPage);
        } else {
          alert("모든 질문에 응답했는지 확인하세요.");
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#D8D8D8", paddingTop: "1vh" }}>
      <div className="name"> 뉴스 성향 테스트 </div>
      <Logo className="logo" />
      <div className="ques">
        {currentIndex >= 1 && <Prev onClick={PrevQ} className="arrow" />}
        {questions[currentIndex]}
        {currentIndex < questions.length && (
          <Next onClick={NextQ} className="arrow" />
        )}
      </div>
      <div className="answerdiv">
        <div className="answer" onClick={clickA}>
          {React.cloneElement(answersA[currentIndex], {
            fill: selectedAnswers[currentIndex] === "A" ? "#B8B8B8" : "white",
          })}
        </div>
        <div className="answer" onClick={clickB}>
          {React.cloneElement(answersB[currentIndex], {
            fill: selectedAnswers[currentIndex] === "B" ? "#B8B8B8" : "white",
          })}
        </div>
      </div>
    </div>
  );
}

export default PropensityAnalysis;
