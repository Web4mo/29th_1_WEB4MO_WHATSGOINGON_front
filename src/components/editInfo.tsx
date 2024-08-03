import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Password, Save, More } from "assets";
import PasswordResetModal from "./password";
import axios from "axios";

const customStyles = {
  content: {
    width: "1000px",
    height: "600px",
    margin: "auto",
  },
};

interface InterestKeywords {
  [key: string]: string[];
}
const updateInfo = async (
  userType: string,
  interests: string[],
  keywords: string[],
  media: string[]
) => {
  try {
    const response = await axios.patch("/mypage/profile/edit", {
      userType,
      interests,
      keywords,
      media,
    });

    if (response.status === 200) {
      console.log("Profile updated successfully:", response.data);
    } else {
      console.error("Failed to update profile:", response.data.message);
    }
  } catch (error) {
    console.error("Error occurred while updating the profile:", error);
  }
};

const interestKeywords: InterestKeywords = {
  정치: ["국회", "북한", "외교", "행정"],
  경제: ["금융", "산업", "부동산", "글로벌 경제", "생활 경제"],
  생활문화: ["건강정보", "도로", "여행", "음식", "패션", "공연"],
  사회: ["사건", "교육", "언론", "환경", "인권", "식품"],
  연예: ["방송", "드라마", "뮤직", "해외 연예"],
  세계: ["아시아", "미국", "유럽", "중동"],
  IT과학: ["모바일", "인터넷", "통신", "보안", "컴퓨터", "게임"],
  스포츠: ["야구", "해외야구", "축구", "해외축구", "농구", "배구"],
};

const mediaOptions = [
  "경향신문",
  "국민일보",
  "서울신문",
  "중앙일보",
  "머니투데이",
  "한국경제",
  "한국일보",
  "매일경제",
  "서울경제",
  "한겨레",
];

const moreMediaOptions = [
  "전자신문",
  "세계일보",
  "동아일보",
  "아시아경제",
  "연합뉴스 ",
  "내일신문",
  "문화일보",
  "아주경제",
  "파이낸셜뉴스",
  "데일리안",
  "뉴욕타임스",
  "디지털타임스",
  "해럴드경제",
  "월스트리트저널",
  "워싱턴 포스트",
];

Modal.setAppElement("#root");

interface PopUpProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const EditInfo: React.FC<PopUpProps> = ({ isOpen, onRequestClose }) => {
  const [userType, setUserType] = useState<string>(""); //사용자유형결과
  const [interests, setInterests] = useState<string[]>([]); //관심분야
  const [selectedKeywords, setSelectedKeywords] = useState<{
    [key: string]: string[];
  }>({}); //관심키워드
  const [media, setMedia] = useState<string[]>([]); //관심언론사
  const [errorMessage, setErrorMessage] = useState<string>(""); // 에러 메시지
  const [showMoreMediaOptions, setShowMoreMediaOptions] =
    useState<boolean>(false); // 추가 언론사 옵션 표시 여부
  const [isPasswordModalOpen, setPasswordModalOpen] = useState<boolean>(false); // 비밀번호 재설정 모달 열림 상태

  useEffect(() => {
    if (isOpen) {
      setShowMoreMediaOptions(false);
    }
  }, [isOpen]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value);
  };

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInterests((prevInterests) => {
      if (prevInterests.includes(value)) {
        setSelectedKeywords((prevKeywords) => {
          const updatedKeywords = { ...prevKeywords };
          delete updatedKeywords[value];
          return updatedKeywords;
        });
        return prevInterests.filter((interest) => interest !== value);
      } else if (prevInterests.length < 4) {
        return [...prevInterests, value];
      } else {
        return prevInterests;
      }
    });
  };

  const handleKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    interest: string
  ) => {
    const value = event.target.value;
    setSelectedKeywords((prevKeywords) => {
      const currentKeywords = prevKeywords[interest] || [];
      if (currentKeywords.includes(value)) {
        return {
          ...prevKeywords,
          [interest]: currentKeywords.filter((keyword) => keyword !== value),
        };
      } else if (currentKeywords.length < 2) {
        return {
          ...prevKeywords,
          [interest]: [...currentKeywords, value],
        };
      } else {
        return prevKeywords;
      }
    });
  };

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMedia((prevMedia) => {
      if (prevMedia.includes(value)) {
        return prevMedia.filter((mediaItem) => mediaItem !== value);
      } else if (prevMedia.length < 3) {
        return [...prevMedia, value];
      } else {
        return prevMedia;
      }
    });
  };

  const groupCheckboxes = (items: JSX.Element[], itemsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(
        <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
          {items.slice(i, i + itemsPerRow)}
        </div>
      );
    }
    return rows;
  };

  const renderKeywords = () => {
    return interests.map((interest) => (
      <div key={interest} style={{ marginLeft: "20px" }}>
        <h4>{interest}</h4>
        {interestKeywords[interest].map((keyword) => (
          <label key={keyword} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              value={keyword}
              checked={selectedKeywords[interest]?.includes(keyword) || false}
              onChange={(e) => handleKeywordChange(e, interest)}
              disabled={
                !selectedKeywords[interest]?.includes(keyword) &&
                (selectedKeywords[interest]?.length || 0) >= 2 //키워드 선택 수 제한
              }
            />
            {keyword}
          </label>
        ))}
      </div>
    ));
  };

  const renderMediaOptions = () => {
    const allMediaOptions = showMoreMediaOptions
      ? [...mediaOptions, ...moreMediaOptions]
      : mediaOptions;

    return groupCheckboxes(
      allMediaOptions.map((mediaItem) => (
        <label key={mediaItem} style={{ marginLeft: "40px", width: "100pt" }}>
          <input
            type="checkbox"
            value={mediaItem}
            checked={media.includes(mediaItem)}
            onChange={handleMediaChange}
          />
          {mediaItem}
        </label>
      )),
      5
    );
  };

  const handleSave = () => {
    if (interests.length < 2 || interests.length > 4) {
      setErrorMessage("관심분야를 2-4개 선택하세요.");
      return;
    }

    for (const interest of interests) {
      const selectedCount = selectedKeywords[interest]?.length || 0;
      if (selectedCount < 1 || selectedCount > 2) {
        setErrorMessage("관심키워드를 1-2개 선택하세요.");
        return;
      }
    }

    setErrorMessage(""); // error message
    updateInfo(
      userType,
      interests,
      Object.values(selectedKeywords).flat(),
      media
    ); // patch
    onRequestClose(); // Close modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="개인정보 Modal"
    >
      <form>
        <div
          style={{
            marginLeft: "7vw",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          <label htmlFor="userType">유형 결과</label>
          <select
            id="userType"
            value={userType}
            onChange={handleTypeChange}
            style={{ marginLeft: "200px" }}
          >
            <option value="">선택하세요</option>
            <option value="탐험가가 꿈인 범생이형">
              탐험가가 꿈인 범생이형
            </option>
            <option value="박사가 꿈인 한우물 범생이형">
              박사가 꿈인 한우물 범생이형
            </option>
            <option value="꿈 많은 명문가 자제형">꿈 많은 명문가 자제형</option>
            <option value="고집있는 명문가 자제형">
              고집있는 명문가 자제형
            </option>
            <option value="호기심왕 도련님형">호기심왕 도련님형</option>
            <option value="행동파 도련님형">행동파 도련님형</option>
            <option value="호기심왕 도파민형">호기심왕 도파민형</option>
            <option value="극심한 도파민형">극심한 도파민형</option>
          </select>
        </div>
        <div style={{ marginLeft: "7vw" }}>
          <label>관심 분야 (2-4개)</label>
          <div style={{ marginLeft: "100pt" }}>
            {groupCheckboxes(
              Object.keys(interestKeywords).map((interest) => (
                <label key={interest} style={{ marginLeft: "50px" }}>
                  <input
                    type="checkbox"
                    value={interest}
                    checked={interests.includes(interest)}
                    onChange={handleInterestChange}
                  />
                  {interest}
                </label>
              )),
              4
            )}
          </div>
        </div>
        <div
          style={{
            marginLeft: "7vw",
            marginTop: "20px",
            height: "280pt",
            width: "700pt",
          }}
        >
          <label>관심 키워드 (1-2개)</label>
          <div style={{ marginLeft: "100pt" }}>{renderKeywords()}</div>
        </div>
        <div
          style={{
            marginLeft: "7vw",
            marginTop: "20px",
            marginBottom: "35px",
          }}
        >
          <label>관심 언론사 (최대 3개)</label>
          <div style={{ marginLeft: "100pt" }}>{renderMediaOptions()}</div>
          {!showMoreMediaOptions && (
            <More
              onClick={() => setShowMoreMediaOptions(true)}
              style={{
                marginLeft: "700px",
                cursor: "pointer",
                width: "60px",
              }}
            />
          )}
        </div>
        {errorMessage && (
          <div style={{ color: "red", marginLeft: "7vw", fontWeight: "bold" }}>
            {errorMessage}
          </div>
        )}
        <div style={{ marginLeft: "600px" }}>
          <Password
            style={{ width: "150px", marginRight: "30px" }}
            onClick={() => setPasswordModalOpen(true)} // Password 아이콘 클릭 시 모달 열기
          />
          <Save style={{ width: "150px" }} onClick={handleSave} />
        </div>
      </form>
      <PasswordResetModal
        isOpen={isPasswordModalOpen}
        onRequestClose={() => setPasswordModalOpen(false)}
      />
    </Modal>
  );
};

export default EditInfo;
