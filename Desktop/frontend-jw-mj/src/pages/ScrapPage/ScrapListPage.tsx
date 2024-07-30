import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrapList from "../../components/ScrapList";
import { useScrap } from "../../components/ScrapContext";
import Add from "components/scrapPoppup/ScrapFolderAdd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./ScrapListPage.css";

const ScrapListPage: React.FC = () => {
  const { scraps, createFolder, updateScrapOrder } = useScrap();
  const [newFolder, setNewFolder] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();

  const handleAddClick = () => {
    setShowAdd(true);
  };

  const handleFolderSelect = (folder: string) => {
    setSelectedFolder(folder);
    navigate(`/scrap/${folder}`);
  };

  const handleConfirmAdd = () => {
    createFolder(newFolder);
    setShowAdd(false);
  };

  const handleCancelAdd = () => {
    setShowAdd(false);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (!selectedFolder) return;

    const items = Array.from(scraps[selectedFolder].items);
    const [movedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedItem);

    updateScrapOrder(selectedFolder, items);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <ScrapList
          selectedFolder={selectedFolder}
          onFolderSelect={handleFolderSelect}
          scraps={scraps}
        />
      </div>
      {showAdd && (
        <Add
          isOpen={showAdd}
          onClose={handleCancelAdd}
          onConfirm={handleConfirmAdd}
          setNewFolder={setNewFolder}
        />
      )}
      <button className="FolderAddButton" onClick={handleAddClick}>
        폴더 추가하기
      </button>
      {selectedFolder && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="scrap-list">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {scraps[selectedFolder].items.map((scrap, index) => (
                  <Draggable key={scrap} draggableId={scrap} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="scrapItem"
                      >
                        {scrap}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default ScrapListPage;
