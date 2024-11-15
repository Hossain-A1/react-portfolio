import React, { useState } from "react";
import arrow from "../../src/assets/portfolio_images/images/arrow-icon.png";
import arrow_light from "../../src/assets/portfolio_images/images/arrow-icon-dark.png";
import moon from "../../src/assets/portfolio_images/images/moon_icon.png";
import sun from "../../src/assets/portfolio_images/images/sun_icon.png";
import menu from "../../src/assets/portfolio_images/images/menu-black.png";
import menu_white from "../../src/assets/portfolio_images/images/menu-white.png";
import close from "../../src/assets/portfolio_images/images/close-white.png";
import close_black from "../../src/assets/portfolio_images/images/close-black.png";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About me", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "My Work", href: "/#work" },
  { label: "Contact me", href: "/#contact" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`containers flex justify-between items-center py-2 border-b sticky top-0 z-20 ${
        !isDarkMode ? "bg-slate-50" : "bg-black"
      } `}
    >
      <h1 className='text-4xl font-semibold flex items-center'>
        Hossain <span className='w-2 h-2 rounded-full bg-red-700 mt-5'></span>
      </h1>

      <ul className='flex items-center gap-6 shadow-sm px-6 py-4 rounded-full max-lg:hidden'>
        {navLinks.map((item) => (
          <li className='text-lg font-light cursor-pointer' key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-3 mr-2'>
        <img
          onClick={toggleTheme}
          className='w-8 cursor-pointer'
          src={isDarkMode ? sun : moon}
          alt={isDarkMode ? "sun icon" : "moon icon"}
        />

        <button
          className={`flex gap-3 text-xl items-center max-md:hidden justify-center px-8 py-2.5 border ${
            isDarkMode ? "border-white" : "border-black"
          } rounded-full font-light `}
        >
          contact{" "}
          <img
            className='w-4'
            src={isDarkMode ? arrow_light : arrow}
            alt='arrow icon'
          />
        </button>

        <img
          onClick={() => setOpenModal(true)}
          className='w-8 cursor-pointer lg:hidden'
          src={!isDarkMode ? menu : menu_white}
          alt='menu icon'
        />

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all ${
            openModal ? "w-full" : "w-0"
          } ${isDarkMode ? "bg-gray-900" : "bg-purple-300 text-black"}`}
        >
          {openModal && (
            <img
              onClick={() => setOpenModal(false)}
              className='w-8 block place-self-end text-right mr-4 mt-4 cursor-pointer'
              src={isDarkMode ? close : close_black}
              alt='close icon'
            />
          )}
          <ul className='flex flex-col items-center justify-center gap-6 px-6 py-4'>
            {navLinks.map((item) => (
              <li
                onClick={() => setOpenModal(false)}
                className='text-lg font-light'
                key={item.label}
              >
                {item.label}
              </li>
            ))}
            <button
              className={`flex gap-3 text-xl items-center justify-center px-8 py-2.5 border ${
                isDarkMode ? "border-white" : "border-black"
              } rounded-full font-light `}
            >
              contact{" "}
              <img
                className='w-4'
                src={isDarkMode ? arrow_light : arrow}
                alt='arrow icon'
              />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
