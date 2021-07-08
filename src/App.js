import React, { useState } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import Nav from "./Nav";
import Slideshow from "./Slideshow";
import Square from "./Square";
import { text } from "./randomText";
import Modal from "./Modal";
import Accordion from "./Accordion";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <h1>Header</h1>
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </Header>
      <Container>
        <Slideshow />
        <Square />
        <motion.h2 initial={{ x: 0 }} animate={{ x: value + "px" }}>
          Super Cool
        </motion.h2>
        <button onClick={() => setIsToggled(true)}>button</button>
        <input
          type="range"
          min="-100"
          max="100"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <Modal isToggled={isToggled} setIsToggled={setIsToggled}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <Accordion children={text} title={"Click this bad boy"} />
        <CardGrid>
          <Card
            // whileHover={{
            //   scale: [1, 1.04, 1.02],
            //   transition: { duration: 0.2 },
            //   times: [0, 0.8, 1],
            // }}
            // whileTap={{ background: "var(--red)" }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  drag="x"
                  onDragEnd={(event, info) => {
                    console.log(info.point.x);
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
                    background: "var(--blue)",
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
