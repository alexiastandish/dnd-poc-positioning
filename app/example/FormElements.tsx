import { HydrangeaFormElement } from "./flowers/Hydrangea";

export type FlowerType = "Hydrangea";

export type Position = {
  x: number;
  y: number;
};

export type Properties = {
  size: number;
  color: string;
};

export type FormFlower = {
  type: FlowerType;

  construct: (id: string) => FormFlowerInstance;
  sidebarFlower: {
    icon: string;
    label: string;
  };
  // drag and drop element
  builderComponent: React.FC<{ flowerInstance: FormFlowerInstance }>;
  // when viewing non editable preview of shelf
  previewerComponent: React.FC;
  // right rail properties
  propertiesComponent: React.FC;
};

export type FormFlowerInstance = {
  id: string;
  type: FlowerType;
  position: Position;
  properties?: Properties;
};

type FlowerElementsType = {
  [key in FlowerType]: FormFlower;
};
export const FlowerElements: FlowerElementsType = {
  Hydrangea: HydrangeaFormElement,
};
