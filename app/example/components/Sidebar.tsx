"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

export default function Sidebar(props) {
  const blocks = [
    {
      id: "block-1",
      label: "Header",
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: "block-2",
      label: "Text",
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: "block-3",
      label: "Image",
      position: {
        x: 0,
        y: 0,
      },
    },
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

function SidebarDraggable({ block }: { block: { id: string; label: string } }) {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: block.id,
    data: { isSidebarItem: true },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: "100px",
        height: "100px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        cursor: "grab",
        textAlign: "center",
        ...style,
      }}
    >
      {block.label}
    </div>
  );
}
