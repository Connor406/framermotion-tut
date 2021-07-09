import React from "react";
import { motion } from "framer-motion";
import Square from "./Square";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 100,
  },
};

const hVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
  exit: { opacity: 0, y: 100 },
};

function About() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        variants={hVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        About
      </motion.h2>
      <Square />
    </motion.div>
  );
}

export default About;
