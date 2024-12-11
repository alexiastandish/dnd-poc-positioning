"use client";

import React, { useState } from "react";
import {
  DndContext,
  useDroppable,
  useDraggable,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
  KeyboardSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

const defaultCoordinates = {
  x: 0,
  y: 0,
};

export default function FormBuilder() {
  const [elements, setElements] = useState([]);
  const [{ translate }, setTranslate] = useState({
    initialTranslate: { x: 0, y: 0 },
    translate: { x: 0, y: 0 },
  });
  const [initialWindowScroll, setInitialWindowScroll] = useState({
    x: 0,
    y: 0,
  });
  const mouseSensor = useSensor(MouseSensor, {
    delay: 250,
    tolerance: 5,
  });
  const touchSensor = useSensor(TouchSensor, {
    delay: 250,
    tolerance: 5,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <DndContext
      sensors={sensors}
      onDragMove={({ delta }) => {
        setTranslate(({ initialTranslate }) => ({
          initialTranslate,
          translate: {
            x: initialTranslate.x + delta.x - initialWindowScroll.x,
            y: initialTranslate.y + delta.y - initialWindowScroll.y,
          },
        }));
      }}
      onDragEnd={(e) => {
        setElements((prev) => [
          ...prev,
          { ...e.active, position: { x: translate.x, y: translate.y } },
        ]);
        setTranslate(({ translate }) => {
          return {
            translate: { x: 0, y: 0 },
            initialTranslate: { x: 0, y: 0 },
          };
        });
        setInitialWindowScroll(defaultCoordinates);
      }}
      onDragCancel={() => {
        setTranslate(({ initialTranslate }) => ({
          translate: initialTranslate,
          initialTranslate,
        }));
        setInitialWindowScroll(defaultCoordinates);
      }}
      modifiers={[restrictToWindowEdges]}
      onDragStart={() => {
        setInitialWindowScroll({
          x: window.scrollX,
          y: window.scrollY,
        });
      }}
    >
      <div className="flex">
        {/* Sidebar with draggable items */}
        <Sidebar />

        {/* Droppable canvas area */}
        <Designer elements={elements} />
      </div>
    </DndContext>
  );
}

// Sidebar Component
function Sidebar() {
  const blocks = [
    { id: "block-1", label: "Header" },
    { id: "block-2", label: "Text" },
    { id: "block-3", label: "Image" },
  ];

  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        borderRight: "2px solid #ccc",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <h3>Blocks</h3>
      {blocks.map((block) => (
        <SidebarDraggable key={block.id} block={block} />
      ))}
    </div>
  );
}

// Sidebar Draggable Items
function SidebarDraggable({ block }: { block: { id: string; label: string } }) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: block.id,
    data: { isSidebarItem: true },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: "150px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        cursor: "grab",
        textAlign: "center",
      }}
    >
      {block.label}
    </div>
  );
}

// Designer (Droppable Area)
function Designer({ elements }: { elements: any[] }) {
  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div
      ref={setDroppableNodeRef}
      style={{
        width: "calc(100% - 200px)",
        height: "100vh",
        border: "2px dashed #ccc",
        margin: "auto",
        position: "relative",
      }}
    >
      <p>Drop items here</p>

      {/* Render draggable elements in the droppable area */}
      {elements.map((element) => (
        <DroppableDraggable key={element.id} element={element} />
      ))}
    </div>
  );
}

// Draggable Blocks Inside Droppable Area
function DroppableDraggable({
  element,
}: {
  element: { id: string; type: string; position: { x: number; y: number } };
}) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: element.id,
  });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: "150px",
        height: "50px",
        backgroundColor: "#d0e6f7",
        position: "absolute",
        left: `${element.position.x}px`,
        top: `${element.position.y}px`,
        border: "1px solid #007bff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "grab",
      }}
    >
      {element.type}
    </div>
  );
}
