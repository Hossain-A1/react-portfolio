import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-slate-50 text-black"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
