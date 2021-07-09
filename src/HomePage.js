import React from "react";
import { motion } from "framer-motion";
import Slideshow from "./Slideshow";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h2>Homepage</h2>
      <Slideshow />
    </motion.div>
  );
}

export default HomePage;
