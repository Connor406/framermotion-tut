import React, { useState } from "react";
import { CardGrid, Container, Header } from "./Elements";
import "./App.css";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import Nav from "./Nav";
import Card from "./Card";
import Slideshow from "./Slideshow";
import CARDS from "./cardArray";
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
  const [isCardActive, setIsCardActive] = useState(
    new Array(CARDS.length).fill(true)
  );
  const [isToggled, setIsToggled] = useState(false);

  console.log(isCardActive);

  const handleCardRemove = (id) => {
    console.log(id);
    const newIds = isCardActive.slice();
    newIds[id] = false;
    setIsCardActive(newIds);
  };

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
        {/* <Slideshow /> */}
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
          <Card style={{ background: CARDS[0].bgColor }}>
            <h3>Some card</h3>
            <img src={CARDS[0].imgSrc} />
          </Card>
        </Modal>
        <Accordion children={text} title={"Click this bad boy"} />
        <CardGrid>
          <AnimatePresence>
            {CARDS.map(({ id, bgColor, title, imgSrc }) => (
              <>
                {isCardActive[id] && (
                  <motion.div
                    key={id}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      opacity: {
                        duration: 0,
                      },
                    }}
                  >
                    <Card
                      bgColor={bgColor}
                      setIsCardActive={() => handleCardRemove(id)}
                      title={title}
                      imgSrc={imgSrc}
                    />
                  </motion.div>
                )}
              </>
            ))}
          </AnimatePresence>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
