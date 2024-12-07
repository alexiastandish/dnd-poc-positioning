"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import SidebarDraggable from "./SidebarDraggable";
import SidebarFlower from "./SidebarFlower";
import { FlowerElements } from "../FormElements";

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
  console.log("FlowerElements", FlowerElements);
  // TODO: add text about color changing arnd resizing within the layout
  // todo: style not inline
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
      <SidebarFlower formFlower={FlowerElements.Hydrangea} />
      <SidebarFlower formFlower={FlowerElements.Sunflower} />
    </div>
  );
}
