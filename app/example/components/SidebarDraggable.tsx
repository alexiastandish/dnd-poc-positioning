"use client";

import { useDraggable } from "@dnd-kit/core";

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

export default SidebarDraggable;
