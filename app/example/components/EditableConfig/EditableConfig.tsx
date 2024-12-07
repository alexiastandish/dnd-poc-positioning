import React from "react";
import flowers from "@/app/example/utils/constants/flowers.json";
import useShelfBuilder from "../../hooks/useShelfBuilder";
import EditColor from "./EditColor";
import EditSize from "./EditSize";
export default function EditableConfig() {
  const { editFlower, editIndex, resetEditFlower } = useShelfBuilder();

  if (!editFlower) return;

  const type = editFlower?.type.toLowerCase();
  const config = {
    colors: flowers[type].colors.map((color) => {
      return { label: color, value: color };
    }),
    size: flowers[type].size.width,
  };

  return (
    <div>
      {config.colors.length > 1 && (
        <EditColor
          config={config.colors}
          activeColor={editFlower.properties?.color}
          editIndex={editIndex}
        />
      )}
      <EditSize
        minFlowerSize={flowers[type].size.minFlowerSize}
        maxFlowerSize={flowers[type].size.maxFlowerSize}
        activeSize={editFlower.properties?.size}
        editIndex={editIndex}
      />
    </div>
  );
}
