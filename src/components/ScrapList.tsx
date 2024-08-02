import React, { useState } from "react";
import ScrapFolder from "./ScrapFolder";
import "./ScrapList.css";

interface ScrapData {
  createdDate: Date;
  items: string[];
}

interface ScrapListProps {
  selectedFolder: string;
  onFolderSelect: (folder: string) => void;
  scraps: { [key: string]: ScrapData };
}

const ScrapList: React.FC<ScrapListProps> = ({
  selectedFolder,
  onFolderSelect,
  scraps,
}) => {
  const [sortBy, setSortBy] = useState<"이름 순" | "날짜 순">("이름 순");

  const sortedFolders = Object.keys(scraps).sort((a, b) => {
    if (sortBy === "이름 순") {
      return a.localeCompare(b);
    } else if (sortBy === "날짜 순") {
      return scraps[b].createdDate.getTime() - scraps[a].createdDate.getTime();
    }
    return 0;
  });

  return (
    <div>
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
        value={selectedFolder}
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
      {selectedFolder ? (
        <ScrapFolder
          folder={selectedFolder}
          news={scraps[selectedFolder]?.items || []}
          createdDate={scraps[selectedFolder]?.createdDate}
        />
      ) : (
        <div className="grid-container">
          {sortedFolders.map((folder) => (
            <div key={folder} className="grid-item">
              <ScrapFolder
                folder={folder}
                news={scraps[folder].items}
                createdDate={scraps[folder].createdDate}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrapList;
