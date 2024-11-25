import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  display: "flex",
  width: "600px",
  height: "600px",
};

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  console.log("isOver", isOver);
  const style = {
    background: isOver ? "green" : "red",
  };

  return (
    <div style={{ ...style, ...CustomStyle }} ref={setNodeRef}>
      {children}
    </div>
  );
}
