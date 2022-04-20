import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Social from "./components/Social";
import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Main from "./components/Main"
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import './App.scss';
function App() {

  return (
    <Rooter>

      <div className="app">

        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />


      </div>
    </Rooter>
  );
}

export default App;
