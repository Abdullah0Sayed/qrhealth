import React from "react";
import { motion } from "framer-motion";

const MotionContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.8, scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
