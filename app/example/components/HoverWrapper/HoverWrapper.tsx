import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverWrapper = ({
  children,
  buttonLabel,
  onButtonClick,
  buttonIcon,
  isDragging,
}: {
  children: ReactNode;
  buttonLabel?: string;
  buttonIcon?: ReactNode;
  onButtonClick: () => void;
  isDragging: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("isDragging", isDragging);
  return (
    <div
      data-no-dnd="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && !isDragging && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="middle none center flex items-center justify-center z-10 top-[-10px] cursor-pointer right-[-10px] absolute rounded-full bg-pink-500 p-1 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={(e) => {
              e.stopPropagation();
              onButtonClick();
            }}
          >
            {buttonIcon ? buttonIcon : buttonLabel}
          </motion.button>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default HoverWrapper;
