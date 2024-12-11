"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import SidebarDraggable from "./SidebarDraggable";
import SidebarFlower from "./SidebarFlower";
import { FlowerElements } from "../FormElements";

export default function Sidebar(props) {
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

      <SidebarFlower formFlower={FlowerElements.Hydrangea} />
      <SidebarFlower formFlower={FlowerElements.Sunflower} />
      <SidebarFlower formFlower={FlowerElements.Cosmos} />
    </div>
  );
}
