"use client";

import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import useShelfBuilder from "./hooks/useShelfBuilder";
import SideRail from "./components/SideRail/SideRail";
import { SmartPointerSensor } from "./components/SmartPointerSensor";
import EditableConfig from "./components/EditableConfig/EditableConfig";

// const notesData = [];

export default function App() {
  const { flowers, addFlower, moveFlower, editFlower } = useShelfBuilder();

  function handleDragEnd(ev: DragEndEvent) {
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

  const smartSensor = useSensor(SmartPointerSensor);
  const sensors = useSensors(smartSensor);
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      modifiers={[snapCenterToCursor]}
      sensors={sensors}
    >
      <Sidebar />
      <Droppable>
        {flowers.map((flower, index) => (
          <Draggable
            styles={{
              position: "absolute",
              left: `${flower.position.x}px`,
              top: `${flower.position.y}px`,
            }}
            index={index}
            flower={flower}
            key={flower.id}
          />
        ))}
      </Droppable>
      <SideRail>
        <EditableConfig />
      </SideRail>
    </DndContext>
  );
}
