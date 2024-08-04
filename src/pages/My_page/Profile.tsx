import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGotoRetest,
  useGotoHome2,
  useGotoHome3,
  useGotoHome4,
} from "components/resultFunc";
import "./Profile.css";
import ProfileUpload from "components/profileUpload";
import EditInfo from "components/editInfo";
import { Logout, Home, Rectangle } from "assets";
import { Info, Calendar, Scrap } from "assets";
import { Modify, Retest2 } from "assets";
import axios from "axios";

function Profile(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "김솔룩",
    id: "solux",
    userType: "호기심왕 도파민형",
    assignDate: "2024-08-04",
    interests: ["IT과학", "정치", "스포츠"],
    keywords: ["국방", "양궁", "스포츠"],
    media: ["서울신문", "한겨레", "한국일보"],
    profileImg: "",
  });

  const gotoRetest = useGotoRetest();
  const gotoHome2 = useGotoHome2();
  const gotoHome3 = useGotoHome3();
  const gotoHome4 = useGotoHome4();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/mypage/profile");
        if (response.status === 200 && response.data.success) {
          setUserData(response.data.data);
        } else {
          console.error("Failed", response.data.message);
        }
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUserData((prevData) => ({
      ...prevData,
      name: "김솔룩",
      id: "solux",
      userType: "호기심왕 도파민형",
      assignDate: "2024-08-04",
      interests: ["정치", "사회", "경제", "스포츠"],
      keywords: ["국방", "교육", "환경", "부동산", "축구", "야구"],
      media: ["서울신문", "한겨레", "한국일보"],
    }));
  };

  const handleCalendarClick = () => {
    navigate("/cal/calendar");
  };

  const handleScrapClick = () => {
    navigate("/scraplist");
  };

  const handleHomeClick = () => {
    //   if (userData.keywords.length === 2) {
    //     gotoHome2();
    //   } else if (userData.keywords.length === 3) {
    //     gotoHome3();
    //   } else {
    //     gotoHome4();
    //   }
    navigate("/main/main_3_edit");
  };

  return (
    <div>
      <div className="topdiv">
        <Logout />
        <Home onClick={handleHomeClick} />
      </div>
      <Rectangle className="scr-rec" />
      <Info className="info" />
      <Calendar className="calen clickable" onClick={handleCalendarClick} />
      <Scrap className="scrap clickable" onClick={handleScrapClick} />
      <div className="userinfo">
        <div className="ex"> 이름 </div>
        <div className="ex"> 아이디 </div>
        <div className="ex"> 유형 결과 </div>
        <div className="ex"> 가입일 </div>
        <div className="ex"> 관심 분야 </div>
        <div className="ex"> 관심 키워드 </div>
        <div className="ex"> 관심 언론사 </div>
        <div className="divp">
          <p className="p">{userData.name}</p>
          <p className="p">{userData.id}</p>
          <p className="p">{userData.userType}</p>
          <p className="p">{userData.assignDate}</p>
          <p className="p">{userData.interests.join(", ")}</p>
          <p className="p">{userData.keywords.join(", ")}</p>
          <p className="p">{userData.media.join(", ")}</p>
        </div>
      </div>
      <ProfileUpload profileImg={userData.profileImg} />
      <div
        style={{
          marginTop: "40vh",
          marginBottom: "10vh",
          marginLeft: "47vw",
        }}
      >
        <Modify onClick={openModal} />
        <Retest2 className="rete" onClick={gotoRetest} />
        <EditInfo isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
}

export default Profile;
