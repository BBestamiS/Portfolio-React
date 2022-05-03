
import React, { useEffect } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Social from "./components/Social";
import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Main from "./components/Main"
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useState } from "react";

import './App.scss';
function App() {

  const [cursor, setCursor] = useState(false);
  const [cursorPositionY, setCursorPositionY] = useState("0 px");
  const [cursorPositionX, setCursorPositionX] = useState("0 px");
  const [cursorOpacity, setCursorOpacity] = useState(false);

  const changeCursorPossition = (e) => {
    setCursorPositionY((e.pageY - 10).toString() + "px")
    setCursorPositionX((e.pageX - 10).toString() + "px")
    setCursorOpacity(true)
  }
  const changeCursorOpocity = (e) => {

    setCursorOpacity(false)
  }

  return (
    <Rooter>
      <div className="app" onMouseMove={changeCursorPossition} onMouseLeave={changeCursorOpocity} >
        <div id="cursor" style={{ top: cursorPositionY, left: cursorPositionX }} >
          <div style={!cursor ? { opacity: cursorOpacity ? "100%" : "0%" } : { opacity: "0%" }} ></div>
        </div>
        <Nav cursor={cursor} setCursor={setCursor} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Main />} />
        </Routes>

        <Footer />


      </div>
    </Rooter>
  );
}

export default App;
