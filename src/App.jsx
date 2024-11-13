import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={` ${
        isDarkMode ? "bg-black text-white" : "bg-slate-50 text-black"
      }` }
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <MyWork />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
