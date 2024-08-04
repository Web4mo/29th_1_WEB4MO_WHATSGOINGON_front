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
  const gotoHome2 = useGotoHome2();
  const gotoHome3 = useGotoHome3();
  const gotoHome4 = useGotoHome4();
  const [num, setNum] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isRedirectOpen, setIsRedirectOpen] = useState(false);
  const [articleData, setArticleData] = useState({
    articleId: 1,
    category: "정치-국방",
    title: "우크라이나, 크름반도 배치 러시아 킬로급 잠수함 격침",
    date: "2024.08.04",
    articleLink:
      "https://n.news.naver.com/mnews/article/003/0012707823?sid=104",
    assignDate: "",
    scrap: false,
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/articles?articleId=${articleId}`);
        const response2 = await axios.get("/mypage/profile");
        if (
          response.status === 200 &&
          response.data.success &&
          response2.status === 200 &&
          response2.data.success
        ) {
          setArticleData(response.data.data);
          setNum(response.data.keywords.length);
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
  const handleHomeClick = () => {
    if (num === 2) {
      gotoHome2();
    } else if (num === 3) {
      gotoHome3();
    } else {
      gotoHome4();
    }
  };

  const handleArticleClick = () => {
    if (articleData.articleLink) {
      window.open(articleData.articleLink, "_blank");
    }
  };

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
          onClick={handleHomeClick}
          style={{ width: "150px", marginLeft: "300px", marginTop: "20px" }}
        />
      </div>
      <div style={{ marginLeft: "10vw", marginTop: "40px" }}>
        <p style={{ marginBottom: "-15px" }}>{articleData.category}</p>
        <h1 style={{ display: "inline-block", marginRight: "1rem" }}>
          {articleData.title}
        </h1>
        <p style={{ display: "inline-block" }}>{articleData.date}</p>
      </div>

      <Article
        style={{ width: "150px", marginLeft: "10vw", marginBottom: "-20px" }}
        onClick={handleArticleClick}
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
        <p style={{ padding: "40px", fontSize: "20px" }}>
          [서울=뉴시스]이재준 기자 = 우크라이나군은 3일(현지시각) 러시아가
          합병한 크름반도에 배치한 잠수함을 격침했다고 발표했다. <br />
          BBC와 폴리티코 등에 따르면 우크라이나군 참모본부는 페이스북을 통해
          크름반도 세바스토폴항을 전날 공격해 러시아 흑해함대 소속 B-237
          잠수함을 침몰시켰다고 밝혔다. 참모본부는 격침한 러시아
          잠수함(Rostov-on-Don)이 작년 9월 우크라이나군의 미사일 공격을 받아
          파손됐다가 수리한 것이라고 전했다.킬로급인 잠수함은 2014년 취역했으며
          순항미사일을 발사할 수 있는 능력을 갖추고 있는데 우크라이나군 미사일을
          맞고 바다로 가라앉았다고 한다.
          <br />
          잠수함은 보수 후 시험항해를 하던 중에 우크라이나군이 발사한 미사일에
          맞았다고 참모본부는 소개했다.침몰 잠수함은 칼리버 순항미사일을
          쏘아올릴 수 있는 흑해함대 잠수함 4척 가운데 하나다.이에 대해 러시아
          국방부는 아직 확인하지 않고 있다. B-237 잠수함은 건조비가 3억 달러(약
          4085억원)에 이른다.참모본부는 B-237 잠수함을 격침함으로써 러시아
          함대가 흑해의 우크라이나 수역에서는 더이상 안전한 곳이 없다는 사실을
          다시 한번 입증했다고 강조했다.
          <br />
          또한 참모본부는 이번 공격으로 크름반도에 있는 방공 미사일 시스템도
          파괴했다고 설명했다.참모본부는 크름반도로 날아오는 미사일의 요격을
          맡은 S-400 방공 시스템 4개를 무력화했다고 확인했다"
        </p>
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
