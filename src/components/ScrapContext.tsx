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
  updateScrapOrder: (folder: string, items: string[]) => void; // Added method for reordering
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
      newScraps[folder].items.push(news);
      return newScraps;
    });
  };

  const createFolder = (folder: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      if (!newScraps[folder]) {
        newScraps[folder] = { createdDate: new Date(), items: [] };
      }
      return newScraps;
    });
  };

  const deleteFolder = (folder: string) => {
    setScraps((prevScraps) => {
      const newScraps = { ...prevScraps };
      delete newScraps[folder];
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
      value={{ scraps, addScrap, createFolder, deleteFolder, updateScrapOrder }}
    >
      {children}
    </ScrapContext.Provider>
  );
};

export const useScrap = () => {
  const context = useContext(ScrapContext);
  if (context === undefined) {
    throw new Error("useScrap must be used within a ScrapProvider");
  }
  return context;
};
