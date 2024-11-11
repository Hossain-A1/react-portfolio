import React, { useState } from "react";

import arrow from "../../src/assets/portfolio_images/images/arrow-icon.png";
import moon from "../../src/assets/portfolio_images/images/moon_icon.png";
import menu from "../../src/assets/portfolio_images/images/menu-black.png";
import close from "../../src/assets/portfolio_images/images/close-white.png";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "My Work", href: "/work" },
  { label: "Contack me", href: "/contack" },
];
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='containers flex justify-between items-center bg-transparent py-2 border-b'>
      <h1 className='text-4xl font-semibold flex items-center '>
        Hossain <span className='w-2 h-2 rounded-full bg-red-700 mt-5 '></span>
      </h1>

      <ul className='flex items-center gap-6 shadow-sm px-6 py-4 rounded-full max-lg:hidden '>
        {navLinks.map((item) => (
          <li className='text-lg font-light' key={item.label}>
            {item.label}
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-3 mr-2 '>
        <img className='w-8' src={moon} alt='moon icon' />

        <button className='flex gap-3 text-xl items-center justify-center px-8 py-2.5 border border-black rounded-full font-light max-md:hidden '>
          contact <img className='w-4' src={arrow} alt='' />{" "}
        </button>

      
          <img
            onClick={() => setOpenModal(true)}
            className='w-8'
            src={menu}
            alt='menu icon'
          />
        
       
      

        <div
          className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-orange-950 transition-all ${
            openModal ? "w-full" : "w-0"
          }`}
        >
          {
            openModal &&(   <img
              onClick={() => setOpenModal(false)}
              className='w-8 block place-self-end text-right mr-4 mt-4'
              src={close}
              alt='close icon'
            />)
          }
          <ul className='flex flex-col items-center justify-center  gap-6 px-6 py-4  '>
            {navLinks.map((item) => (
              <li onClick={()=>setOpenModal(false)} className='text-lg text-white font-light' key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
