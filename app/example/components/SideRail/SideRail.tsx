import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useShelfBuilder from "../../hooks/useShelfBuilder";
import { IconX } from "@tabler/icons-react";
import styles from "./SideRail.module.scss";

export default function SideRail({ children }: { children: ReactNode }) {
  const { editFlower, resetEditFlower } = useShelfBuilder();

  return (
    <div className="">
      <AnimatePresence>
        {editFlower && (
          <motion.aside
            className={styles.sideRail}
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
