import React from "react";

const Footer = () => {
  return (
    <footer
      id='footer'
      className='containers flex flex-col gap-10 items-center w-full bg-gradient-to-t from-orange-100 to-gray-300 text-black'
    >
      <div className='flex flex-col items-center justify-center gap-5 '>
        <h1 className='text-4xl font-semibold flex items-center'>
          Hossain <span className='w-2 h-2 rounded-full bg-red-700 mt-5'></span>
        </h1>
        <a href=''>mrhossainahmed&@gmail.com</a>
      </div>
      <div className='sm:flex items-center justify-between border-t border-black w-full py-5'>
        <p className='text-lg'>
          {new Date().getFullYear()} Hossain Ahmed. All right reserved.
        </p>
        <div className=' flex text-green-500 gap-2.5 text-lg'>
          <a href='https://github.com/Hossain-A1'>GitHub</a>
          <a href='https://www.linkedin.com/in/hossain-ahmed-163b11236/'>
            LinkedIn
          </a>
          <a href='https://www.linkedin.com/in/hossain-ahmed-163b11236/'>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
