import React, { createContext, useState, useContext, ReactNode } from "react";

interface ScrapData {
  createdDate: Date;
  items: string[];
}

interface ScrapContextType {
  scraps: { [key: string]: ScrapData };
  addScrap: (folder: string, news: string) => void;
  createFolder: (folder: string) => void;
  deleteFolder: (folder: string) => void;
  renameFolder: (oldName: string, newName: string) => void; // 추가한 부분
  updateScrapOrder: (folder: string, items: string[]) => void;
}

const ScrapContext = createContext<ScrapContextType | undefined>(undefined);

export const ScrapProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scraps, setScraps] = useState<{ [key: string]: ScrapData }>({});

  const addScrap = (folder: string, news: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      if (!newScraps[folder]) {
        newScraps[folder] = { createdDate: new Date(), items: [] };
      }
      newScraps[folder].items = [...newScraps[folder].items, news];
      return newScraps;
    });
  };

  const createFolder = (folder: string) => {
    setScraps((prevScraps) => ({
      ...prevScraps,
      [folder]: { createdDate: new Date(), items: [] },
    }));
  };

  const deleteFolder = (folder: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      delete newScraps[folder];
      return newScraps;
    });
  };

  const renameFolder = (oldName: string, newName: string) => {
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

  const updateScrapOrder = (folder: string, items: string[]) => {
    setScraps((prevScraps) => ({
      ...prevScraps,
      [folder]: {
        ...prevScraps[folder],
        items,
      },
    }));
  };

  return (
    <ScrapContext.Provider
      value={{
        scraps,
        addScrap,
        createFolder,
        deleteFolder,
        renameFolder,
        updateScrapOrder,
      }}
    >
      {children}
    </ScrapContext.Provider>
  );
};

export const useScrap = () => {
  const context = useContext(ScrapContext);
  if (!context) {
    throw new Error("useScrap must be used within a ScrapProvider");
  }
  return context;
};
