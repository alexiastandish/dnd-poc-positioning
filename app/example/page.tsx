"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import useShelfBuilder from "./hooks/useShelfBuilder";

// const notesData = [];

export default function App() {
  //   const [notes, setNotes] = useState(notesData);
  const { flowers, addFlower, moveFlower } = useShelfBuilder();

  function handleDragEnd(ev: DragEndEvent) {
    console.log("ev", ev);
    const { over } = ev;
    if (!over) return;
    if (ev.active.data?.current?.isSidebarItem) {
      const position = {
        x: ev.activatorEvent.clientX + ev.delta.x - 25,
        y: ev.activatorEvent.clientY + ev.delta.y - 25,
      };

      return addFlower(ev.active, position);
    }
    moveFlower(ev.active.id, { x: ev.delta.x, y: ev.delta.y });
  }
  console.log("flowers", flowers);

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[snapCenterToCursor]}>
      <Sidebar />
      <Droppable>
        {flowers.map((flower) => (
          <Draggable
            styles={{
              position: "absolute",
              left: `${flower.position.x}px`,
              top: `${flower.position.y}px`,
            }}
            flower={flower}
            key={flower.id}
          />
        ))}
      </Droppable>
    </DndContext>
  );
}
