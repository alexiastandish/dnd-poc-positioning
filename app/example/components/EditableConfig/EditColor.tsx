import React from "react";
import * as Select from "@radix-ui/react-select";
import selectStyles from "./SelectStyles.module.scss";
import cx from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

export default function EditColor({
  config,
  activeColor,
  editIndex,
}: {
  config: { value: string; label: string }[];
  activeColor: string;
  editIndex: number;
}) {
  return (
    <Select.Root defaultValue={activeColor} value={activeColor}>
      <Select.Trigger asChild aria-label="Food">
        <button className={selectStyles.buttonTrigger}>
          <Select.Value />
          <Select.Icon className="ml-2">
            <ChevronDownIcon />
          </Select.Icon>
        </button>
      </Select.Trigger>
      <Select.Content position="popper">
        <Select.ScrollUpButton className="flex text-gray-700 dark:text-gray-300">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          <Select.Group>
            {config.map((color, index) => (
              <Select.Item
                key={`${color}-${index}`}
                value={color.value.toLowerCase()}
                className={cx(
                  "relative flex items-start px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                  "radix-disabled:opacity-50",
                  "focus:outline-none select-none"
                )}
              >
                <Select.ItemText>{color.label}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}
