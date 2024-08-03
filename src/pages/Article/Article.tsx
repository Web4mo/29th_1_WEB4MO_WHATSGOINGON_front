import React, { useState } from "react";
import { Article, Home2, Logo2, Pencil2 } from "assets";
import { useGotoHome2 } from "components/resultFunc";
// 오류나서 잠깐 바꿧다!!!!!!!!!!!!!!!! 기억하기
import SaveScrap from "components/saveScrap";
import RedirectModal from "components/redirectModal";

function ReadArticle() {
  const gotoHome = useGotoHome2();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isRedirectOpen, setIsRedirectOpen] = useState(false); // 새로 추가된 부분

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRedirectOpen() {
    setIsOpen(false);
    setIsRedirectOpen(true);
  }

  function handleRedirectClose() {
    setIsRedirectOpen(false);
  }

  function handleSave(folderName: string) {
    console.log("Folder saved:", folderName);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          height: "100px",
        }}
      >
        <Logo2 style={{ marginLeft: "30vw", marginTop: "15px" }} />
        <Home2
          onClick={gotoHome}
          style={{ width: "150px", marginLeft: "300px", marginTop: "20px" }}
        />
      </div>
      <div style={{ marginLeft: "10vw", marginTop: "40px" }}>
        <h1 style={{ display: "inline-block", marginRight: "1rem" }}>제목</h1>
        <p style={{ display: "inline-block" }}>기사날짜</p>
      </div>

      <Article
        style={{ width: "150px", marginLeft: "10vw", marginBottom: "-20px" }}
      />
      <Pencil2
        onClick={openModal}
        style={{
          width: "30px",
          marginLeft: "1500px",
          marginTop: "-20px",
          marginBottom: "15px",
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "1400px",
          height: "800px",
          marginLeft: "10vw",
          borderRadius: "10px",
        }}
      ></div>
      <SaveScrap
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
        onRedirectOpen={handleRedirectOpen} // 새로 추가된 부분
      />
      <RedirectModal
        isOpen={isRedirectOpen}
        onRequestClose={handleRedirectClose}
      />
    </>
  );
}

export default ReadArticle;
