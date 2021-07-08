import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  opened: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

function Accordion({ title, children }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled((prev) => !prev)}>
        {title}
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="opened"
            exit="closed"
            style={{ overflow: "hidden" }}
          >
            <p>{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default Accordion;
