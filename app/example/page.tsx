"use client";

import React, { useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import { v4 as uuidv4 } from "uuid";

const notesData = [];

export default function App() {
  const [notes, setNotes] = useState(notesData);

  function handleDragEnd(ev) {
    // What to do here??
    // It's not a sortable, it's a free drag and drop
    const { over } = ev;
    if (!over) return;
    console.log("over", over);
    if (ev.active.data?.current?.isSidebarItem) {
      const position = {
        x: ev.activatorEvent.clientX + ev.delta.x - 25,
        y: ev.activatorEvent.clientY + ev.delta.y - 25,
      };
      const id = uuidv4();
      return setNotes((prev) => {
        return [...prev, { ...ev.active, position, id }];
      });
    }
    const note = notes.find((x) => x.id === ev.active.id);
    note.position.x += ev.delta.x;
    note.position.y += ev.delta.y;
    const _notes = notes.map((x) => {
      if (x.id === note.id) return note;
      return x;
    });
    setNotes(_notes);
  }

  console.log("notes", notes);
  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[snapCenterToCursor]}>
      <Sidebar />
      <Droppable>
        {notes.map((note) => (
          <Draggable
            styles={{
              position: "absolute",
              left: `${note.position.x}px`,
              top: `${note.position.y}px`,
            }}
            key={note.id}
            id={note.id}
            content={note.content}
          />
        ))}
      </Droppable>
    </DndContext>
  );
}
