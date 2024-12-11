"use client";
import React from "react";
import SidebarFlower from "./SidebarFlower";
import { FlowerElements } from "../FormElements";
import styles from "./Sidebar.module.scss";

export default function Sidebar(props) {
  // TODO: add text about color changing arnd resizing within the layout

  return (
    <div className={styles.sidebar}>
      <h3>Blocks</h3>

      <SidebarFlower formFlower={FlowerElements.Hydrangea} />
      <SidebarFlower formFlower={FlowerElements.Sunflower} />
      <SidebarFlower formFlower={FlowerElements.Cosmos} />
    </div>
  );
}
