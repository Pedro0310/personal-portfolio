import React from "react";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
