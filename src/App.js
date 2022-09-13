import React from "react";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/about/skills/Skills";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
      </main>
    </>
  );
};

export default App;
