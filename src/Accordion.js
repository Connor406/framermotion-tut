import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
