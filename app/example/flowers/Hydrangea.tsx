"use client";

import {
  FlowerType,
  FormFlower,
  FormFlowerInstance,
  Position,
  Properties,
} from "../FormElements";

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
  //   attributes:
};

function BuilderComponent({
  flowerInstance,
}: {
  flowerInstance: FormFlowerInstance;
}) {
  console.log("flowerInstance", flowerInstance);
  return (
    <div
      //   className={`w-[${flowerInstance.properties.size}px] h-[${flowerInstance.properties.size}px]`}
      className={`w-[${flowerInstance.properties.size}px] h-[${flowerInstance.properties.size}px]`}
    >
      {flowerInstance.type}
    </div>
  );
}
