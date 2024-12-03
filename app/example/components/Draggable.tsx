"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { FlowerElements, FormFlowerInstance } from "../FormElements";

// update to dynamic
const CustomStyle = {
  display: "flex",
  border: "1px solid black",
};

export function Draggable({
  flower,
  styles,
}: {
  flower: FormFlowerInstance;
  styles: any;
}) {
  console.log("flower", flower);
  const BuilderComponent = FlowerElements[flower.type].builderComponent;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: flower.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...CustomStyle, ...styles }}
      {...listeners}
      {...attributes}
    >
      <BuilderComponent flowerInstance={flower} />
      {/* {content} */}
    </div>
  );
}
