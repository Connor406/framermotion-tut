import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  opened: { opacity: 1, x: 0 },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      delay: 0.1,
    },
  },
};

const liVariants = {
  opened: {
    y: 0,
    opacity: 1,
  },
  closed: { y: 200, opacity: 0 },
};

const ulVariants = {
  opened: {
    scale: 1.05,
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
      staggerDirection: -1, // either 1 or -1 to reverse order
      when: "afterChildren", // either 'afterChildren' or "beforeChildren"
    },
  },
  closed: {
    scale: 1,
  },
};

const links = ["one", "two", "three", "four"];

function Nav({ isNavOpen, setIsNavOpen }) {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "opened" : "closed"}
    >
      <button onClick={() => setIsNavOpen(false)}>close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
}

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
