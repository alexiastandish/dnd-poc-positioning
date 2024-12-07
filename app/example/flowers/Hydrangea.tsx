"use client";

import HoverWrapper from "../components/HoverWrapper/HoverWrapper";
import {
  FlowerType,
  FormFlower,
  FormFlowerInstance,
  Position,
  Properties,
} from "../FormElements";
import flowers from "@/app/example/utils/constants/flowers.json";
import useShelfBuilder from "../hooks/useShelfBuilder";
import { IconPencil } from "@tabler/icons-react";

const type: FlowerType = "Hydrangea";
const size: number = 100;
const color: string = "yellow";

const properties: Properties = { size, color };
export const HydrangeaFormElement: FormFlower = {
  type,
  construct: (id: string) => ({
    id,
    properties,
    type,
    position: { x: 0, y: 0 },
  }),
  sidebarFlower: {
    icon: "/images/hydrangea.png",
    label: "Hydrangea",
  },
  builderComponent: BuilderComponent,
  previewerComponent: () => <div>previewerComponent</div>,
  propertiesComponent: () => <div>propertiesComponent</div>,
};

// todo: add wiggle on hover
function BuilderComponent({
  flowerInstance,
  index,
  isDragging,
}: {
  flowerInstance: FormFlowerInstance;
  index: number;
  isDragging: boolean;
}) {
  const flowerConfig = flowers[flowerInstance.type.toLowerCase()];
  const { setEditFlowerAndIndex } = useShelfBuilder();
  console.log("flowerInstance", flowerInstance);
  return (
    <HoverWrapper
      isDragging={isDragging}
      buttonIcon={<IconPencil stroke={1.5} />}
      onButtonClick={() => setEditFlowerAndIndex(flowerInstance, index)}
    >
      <div
        className={`w-[${flowerInstance.properties.size}px] h-[${flowerInstance.properties.size}px]`}
        // todo: remove temporary
        style={{
          background: isDragging ? "blue" : "transparent",
          height: flowerInstance.properties?.size,
          width: flowerInstance.properties?.size,
        }}
      >
        <img
          src={flowerConfig.image.src[flowerInstance.properties.color]}
          alt={flowerInstance.type}
        />
      </div>
    </HoverWrapper>
  );
}
