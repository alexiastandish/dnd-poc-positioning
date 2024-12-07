import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useShelfBuilder from "../../hooks/useShelfBuilder";
import { IconX } from "@tabler/icons-react";

export default function SideRail({ children }: { children: ReactNode }) {
  const { editFlower, resetEditFlower } = useShelfBuilder();

  return (
    <div className="">
      <AnimatePresence>
        {editFlower && (
          <motion.aside
            // todo: fix inline styles
            style={{
              height: "100%",
              background: "green",
              position: "absolute",
              width: "300px",
            }}
            initial={{ right: "-300px" }}
            animate={{
              right: 0,
            }}
            exit={{
              right: "-300px",
              transition: { duration: 0.3 },
            }}
          >
            <button onClick={resetEditFlower}>
              <IconX stroke={1.5} />
            </button>
            <div>{children}</div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
