import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams 훅 임포트
import { Article, Home2, Logo2, Pencil2 } from "assets";
import {
  useGotoHome2,
  useGotoHome3,
  useGotoHome4,
} from "components/resultFunc";
import SaveScrap from "components/saveScrap";
import RedirectModal from "components/redirectModal";
import axios from "axios";

function ReadArticle() {
  const { articleId } = useParams(); // URL에서 articleId 추출
  const gotoHome = useGotoHome2();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isRedirectOpen, setIsRedirectOpen] = useState(false);
  const [articleData, setArticleData] = useState({
    articleId: 1,
    title: "",
    date: "",
    articleLink: "",
    assignDate: "",
    scrap: false,
    contents: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/articles?articleId=${articleId}`);
        if (response.status === 200 && response.data.success) {
          setArticleData(response.data.data);
        } else {
          console.error("Failed", response.data.message);
        }
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };

    if (articleId) {
      fetchUserData();
    }
  });

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
      <div style={{ backgroundColor: "white", height: "100px" }}>
        <Logo2 style={{ marginLeft: "30vw", marginTop: "15px" }} />
        <Home2
          onClick={gotoHome}
          style={{ width: "150px", marginLeft: "300px", marginTop: "20px" }}
        />
      </div>
      <div style={{ marginLeft: "10vw", marginTop: "40px" }}>
        <h1 style={{ display: "inline-block", marginRight: "1rem" }}>
          {articleData.title}
        </h1>
        <p style={{ display: "inline-block" }}>{articleData.date}</p>
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
      >
        <p style={{ padding: "20px" }}>{articleData.contents}</p>
      </div>
      <SaveScrap
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
        onRedirectOpen={handleRedirectOpen}
      />
      <RedirectModal
        isOpen={isRedirectOpen}
        onRequestClose={handleRedirectClose}
      />
    </>
  );
}

export default ReadArticle;
