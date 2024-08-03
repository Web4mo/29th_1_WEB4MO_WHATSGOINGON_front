import React, { createContext, useState, useContext, ReactNode } from "react";

interface ScrapData2 {
  createdDate: Date;
  items: string[];
}

interface ScrapContextType2 {
  scraps: { [key: string]: ScrapData2 };
  addScrap2: (folder: string, news: string) => void;
  deleteFile: (folder: string) => void;
  renameFile: (oldName: string, newName: string) => void; // 추가한 부분
  updateScrapOrder2: (folder: string, items: string[]) => void;
}

const ScrapContext2 = createContext<ScrapContextType2 | undefined>(undefined);

export const ScrapProvider2: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scraps, setScraps] = useState<{ [key: string]: ScrapData2 }>({});

  const addScrap2 = (folder: string, news: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      if (!newScraps[folder]) {
        newScraps[folder] = { createdDate: new Date(), items: [] };
      }
      newScraps[folder].items = [...newScraps[folder].items, news];
      return newScraps;
    });
  };

  const deleteFile = (folder: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      delete newScraps[folder];
      return newScraps;
    });
  };

  const renameFile = (oldName: string, newName: string) => {
    // 추가한 부분
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      if (newScraps[oldName]) {
        newScraps[newName] = newScraps[oldName];
        delete newScraps[oldName];
      }
      return newScraps;
    });
  };

  const updateScrapOrder2 = (folder: string, items: string[]) => {
    setScraps((prevScraps) => ({
      ...prevScraps,
      [folder]: {
        ...prevScraps[folder],
        items,
      },
    }));
  };

  return (
    <ScrapContext2.Provider
      value={{
        scraps,
        addScrap2,
        deleteFile,
        renameFile,
        updateScrapOrder2,
      }}
    >
      {children}
    </ScrapContext2.Provider>
  );
};

export const useScrap2 = () => {
  const context2 = useContext(ScrapContext2);
  if (!context2) {
    throw new Error("useScrap must be used within a ScrapProvider");
  }
  return context2;
};
