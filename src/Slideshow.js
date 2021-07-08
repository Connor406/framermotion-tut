import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "./Square";
import { wrap } from "@popmotion/popcorn";

const variants = {
  enter: {
    opacity: 0,
    x: 1000,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -1000,
  },
};

function Slideshow() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrap(0, COLORS.length, page);

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={page}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.7}
          onDragEnd={(e, { offset, velocity }) => {
            console.log(offset.x);
            if (offset.x > 400) {
              paginate(1);
            } else if (offset.x < -400) {
              paginate(-1);
            }
          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index],
            position: "absolute",
            left: 0,
            top: 0,
          }}
          variants={variants}
          exit="exit"
          animate="center"
          initial="enter"
        />
      </AnimatePresence>
    </div>
  );
}

export default Slideshow;
