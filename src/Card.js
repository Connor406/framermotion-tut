import React from "react";
import { useMotionValue, useTransform } from "framer-motion";
import { StyledCard } from "./Elements";

function Card({ bgColor, setIsCardActive, title, imgSrc }) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <div>
      <StyledCard
        // whileHover={{
        //   scale: [1, 1.04, 1.02],
        //   transition: { duration: 0.2 },
        //   times: [0, 0.8, 1],
        // }}
        // whileTap={{ background: "var(--red)" }}
        drag="x"
        onDragEnd={(event, info) => {
          if (Math.abs(info.point.x) > 150) {
            setIsCardActive(false);
          }
        }}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x,
          opacity,
          background: bgColor,
        }}
        key={title}
      >
        <h3>{title}</h3>
        <img src={imgSrc} />
      </StyledCard>
    </div>
  );
}

export default Card;
