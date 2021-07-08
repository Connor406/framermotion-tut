import React, { useState } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
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
  const [isToggled, setIsToggled] = useState(false);

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
        <h1 style={{ zIndex: 0 }}>Header</h1>
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </Header>
      <Container>
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
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
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
