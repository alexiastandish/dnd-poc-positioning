import React from "react";
import * as Slider from "@radix-ui/react-slider";
import cx from "classnames";
import useShelfBuilder from "../../hooks/useShelfBuilder";

export default function EditSize({
  activeSize,
  editIndex,
  minFlowerSize,
  maxFlowerSize,
}: {
  activeSize: number;
  editIndex: number;
  minFlowerSize: number;
  maxFlowerSize: number;
}) {
  const { editFlowerSize } = useShelfBuilder();
  // TODO: add note about guestimating sizes
  return (
    <div>
      {activeSize}
      <Slider.Root
        defaultValue={[activeSize]}
        max={maxFlowerSize}
        min={minFlowerSize}
        value={[activeSize]}
        step={10}
        onValueChange={(size) => editFlowerSize(size, editIndex)}
        aria-label="value"
        className="relative flex h-5 w-64 touch-none items-center"
      >
        <Slider.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
          <Slider.Range className="absolute h-full rounded-full bg-purple-600 dark:bg-white" />
        </Slider.Track>
        <Slider.Thumb
          className={cx(
            "block h-5 w-5 rounded-full bg-purple-600 dark:bg-white",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        />
      </Slider.Root>
    </div>
  );
}
