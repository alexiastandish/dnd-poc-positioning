"use client";

import { createContext, ReactNode, useState } from "react";
import {
  FlowerElements,
  FlowerType,
  FormFlowerInstance,
  Position,
} from "../FormElements";

import { Active } from "@dnd-kit/core";
import { generateId } from "../utils/helpers/generateId";

type ShelfBuilderContextType = {
  flowers: FormFlowerInstance[];
  addFlower: (element: Active, position: Position) => void;
  moveFlower: (elementId: string, moveCoordinates: Position) => void;
  // updateFlower:
};

export const ShelfBuilderContext =
  createContext<ShelfBuilderContextType | null>(null);

export default function ShelfBuilderContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [flowers, setFlowers] = useState<FormFlowerInstance[]>([]);

  const addFlower = (element: Active, position: Position) => {
    const newFlower = FlowerElements[
      element?.data?.current?.type as FlowerType
    ].construct(generateId());

    return setFlowers((prev) => {
      return [...prev, { ...newFlower, position }];
    });
  };

  const moveFlower = (elementId: string, moveCoordinates: Position) => {
    const flower = flowers.find((x) => x.id === elementId);
    if (!flower) return;
    flower.position.x += moveCoordinates.x;
    flower.position.y += moveCoordinates.y;
    const _flowers = flowers.map((x) => {
      if (x.id === flower.id) return flower;
      return x;
    });
    setFlowers(_flowers);
  };

  return (
    <ShelfBuilderContext.Provider value={{ flowers, addFlower, moveFlower }}>
      {children}
    </ShelfBuilderContext.Provider>
  );
}
