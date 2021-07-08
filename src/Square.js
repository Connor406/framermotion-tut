import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

export const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--green)",
  "var(--purp)",
];

function Square() {
  const [colorList, setColorList] = useState(COLORS);
  return (
    <div>
      <button onClick={() => setColorList(shuffle(colorList))}>Shuffle</button>
      {colorList.map((color) => (
        <motion.div
          key={color}
          positionTransition={{
            damping: 20,
            stiffness: 250,
            type: "spring",
          }}
          style={{
            background: color,
            height: 100,
            width: 100,
          }}
        >
          {" "}
        </motion.div>
      ))}
    </div>
  );
}

export default Square;
