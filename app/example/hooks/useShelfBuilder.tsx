"use client";

import React, { useContext } from "react";
import { ShelfBuilderContext } from "../context/ShelfBuilderContext";

function useShelfBuilder() {
  const context = useContext(ShelfBuilderContext);

  if (!context) {
    throw new Error(
      "useShelfBuilder must be used within a ShelfBuilderContext"
    );
  }
  return context;
}

export default useShelfBuilder;
