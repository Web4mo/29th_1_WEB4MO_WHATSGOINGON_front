import React, { useState } from "react";
import ScrapFile from "./ScrapFile";
import "./ScrapList.css";
import { IconSwitch } from "assets/export";

const dummyNewsData = [
  {
    scrapId: 1,
    articleId: 101,
    previewImg: "https://via.placeholder.com/150",
    title: "우크라이나, 크름반도...",
    date: "2024.08.04",
  },
  // 추가 뉴스 아이템들...
];

interface NewsItem {
  scrapId: number;
  articleId: number;
  previewImg: string;
  title: string;
  date: string;
}

interface ScrapData {
  createdDate: Date;
  items: NewsItem[];
}

interface ScrapListProps {
  onFolderSelect: (folder: string) => void;
}

const ScrapList2: React.FC<ScrapListProps> = ({ onFolderSelect }) => {
  const [sortBy, setSortBy] = useState<"이름 순" | "날짜 순">("이름 순");

  const dummyFolder = {
    folderId: 1,
    folderName: "기본 폴더",
    createdDate: new Date("2024-08-04 05:17"),
    items: dummyNewsData,
  };

  const initialScraps: { [key: string]: ScrapData } = {
    [dummyFolder.folderName]: {
      createdDate: dummyFolder.createdDate,
      items: dummyFolder.items,
    },
  };

  // 폴더 정렬
  const sortedFolders = Object.keys(initialScraps).sort((a, b) => {
    if (sortBy === "이름 순") {
      return a.localeCompare(b);
    } else if (sortBy === "날짜 순") {
      return (
        initialScraps[b].createdDate.getTime() -
        initialScraps[a].createdDate.getTime()
      );
    }
    return 0;
  });

  return (
    <div>
      <IconSwitch style={{ position: "absolute", width: 180 }} />
      <div className="sortSwitch">
        <button
          className={`sortButton ${sortBy === "이름 순" ? "active" : ""}`}
          onClick={() => setSortBy("이름 순")}
        >
          이름 순
        </button>
        <button
          className={`sortButton ${sortBy === "날짜 순" ? "active" : ""}`}
          onClick={() => setSortBy("날짜 순")}
        >
          날짜 순
        </button>
      </div>
      <br />
      <select
        value={""}
        onChange={(e) => onFolderSelect(e.target.value)}
        className="folderSelect"
      >
        <option value="">모든 폴더 보기</option>
        {sortedFolders.map((folder) => (
          <option key={folder} value={folder}>
            {folder}
          </option>
        ))}
      </select>
      <br />
      <div className="grid-container">
        {sortedFolders.map((folder) => (
          <React.Fragment>
            {initialScraps[folder].items.map((newsItem) => (
              <div className="grid-item">
                <ScrapFile news={[newsItem]} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrapList2;
