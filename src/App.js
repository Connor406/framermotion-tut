import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import About from "./AboutPage";
import "./App.css";
import CARDS from "./cardArray";
import { Container, Header } from "./Elements";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";

function App() {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  console.log(location);

  // const [isCardActive, setIsCardActive] = useState(
  //   new Array(CARDS.length).fill(true)
  // );
  // const [isToggled, setIsToggled] = useState(false);

  // const handleCardRemove = (id) => {
  //   const newIds = isCardActive.slice();
  //   newIds[id] = false;
  //   setIsCardActive(newIds);
  // };

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;

// Holding on to this until later vids to see how my code compares

/* <CardGrid>
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
        </CardGrid> */
