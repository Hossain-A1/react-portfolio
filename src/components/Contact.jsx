import React from "react";

const Contact = () => {
  return (
    <div id="contact" className='containers flex items-center justify-center min-h-screen px-4 bg-gradient-to-t from-gray-300 to-gray-50'>
      <div className='max-w-xl w-full space-y-6'>
        <h3 className='text-center text-lg font-medium text-gray-600'>
          Connect with me
        </h3>
        <h1 className='text-center text-4xl font-bold text-gray-800'>
          Get in touch
        </h1>
        <p className='text-center text-gray-500'>
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form className='space-y-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type='text'
              placeholder='Enter your name'
              className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />
          </div>
          <textarea
            placeholder='Enter your message'
            rows='5'
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'
          ></textarea>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='px-8 py-3 text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300'
            >
              Submit now →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
