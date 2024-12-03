"use client";
import React from "react";
import { FormFlower } from "../FormElements";
import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";

export default function SidebarFlower({
  formFlower,
}: {
  formFlower: FormFlower;
}) {
  const { label, icon } = formFlower.sidebarFlower;

  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: formFlower.type,
    data: { isSidebarItem: true, type: formFlower.type },
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
      className="w-[100px] h-[100px] p-[10px] mb-[10px] border border-[#ccc] cursor-grab text-center"
      style={style}
    >
      <div className="relative flex flex-col h-[80%]">
        <Image
          src={icon}
          alt={formFlower.type}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {label}
    </div>
  );
}
