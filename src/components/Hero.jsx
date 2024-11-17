import React from "react";
import download from "../assets/portfolio_images/images/download-icon.png";
import hero_img from "../assets/portfolio_images/images/hero_img.jpeg";
const Hero = ({ isDarkMode }) => {
  return (
    <div
      id='hero'
      className='containers py-20 flex justify-center items-center'
    >
      <div
        className={`text-center ${
          isDarkMode ? "text-white" : "text-black"
        } max-w-4xl px-6`}
      >
        <img
          className='w-32 h-32 mx-auto shadow-md rounded-full border-4 border-white mb-4'
          src={hero_img}
          alt='Eliana Jade'
        />
        <h1 className='text-4xl sm:text-5xl font-semibold mb-4'>
          Hi! I'm Hossain Ahmed{" "}
          <span role='img' aria-label='wave'>
            👋
          </span>
        </h1>
        <p className='text-xl sm:text-2xl mb-6'>
          full-stack web developer based in Saudi Arabia.
        </p>
        <p className='text-lg sm:text-xl font-light mb-6'>
          {
            " I’m a full-stack developer based in Dhaka, Bangladesh, with 5 years of experience crafting efficient and scalable solutions."
          }
        </p>
        <div className='flex justify-center gap-6'>
          <button  className='bg-gradient-to-r max-sm:text-sm whitespace-nowrap from-orange-400 to-pink-600 text-white py-2 px-8 rounded-full text-xl transition hover:opacity-80'>
            Contact me
          </button>
          <button className='bg-white max-sm:text-sm whitespace-nowrap flex items-center justify-center gap-2 text-gray-900 py-2 px-8 rounded-full text-xl border-2 border-gray-900 transition hover:opacity-80'>
            My Resume{" "}
            <img className='w-6' src={download} alt='download icon ' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
