import React from "react";
import { motion } from "framer-motion";

export const SplitText = ({ children, ...rest }: any) => {
  let words = children.split(" ");
  return words.map((word: string | number, i: number) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}>
        <motion.div
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          className="text-[45px] text-pink-600 lg:text-[75px] font-semibold font-snowtimes text-center"
          custom={i}>
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
};
