import React from "react";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Qualification/>
        <Portfolio/>
      </main>
    </>
  );
};

export default App;
